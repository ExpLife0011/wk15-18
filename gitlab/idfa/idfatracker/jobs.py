# -*- coding: utf-8 -*-
"""
idfatracker business logic
"""

from rq.decorators import job
from rq import Queue
from rq_scheduler import Scheduler
import datetime
from datetime import timedelta

from .models import User, Network, Active, ActiveSlice, NetworkUser
from .redis_conn import getRedis

CONTINUE_DURATION = 6 * 3600
INACTIVE_TIME = 1800
MIN_UIDS = 2


@job("newlog", connection=getRedis())
def new_log(keys, ip, time):
    """
    keys : {key_type: key_value}
    """
    # user
    is_new, user = keys_to_user(keys, time)
    if user is None:
        # @todo: handle exception
        return
    uid = user.uid
    if not is_new:
        # plan 1 test
        active = Active.get_by_ip_user(ip, uid, time, CONTINUE_DURATION)
        if active is not None:
            # plan 1 success
            Active.new(ip, active.nid, uid, time, active.sid)
            network = Network.get(active.nid)
            network.active(ip, time)
            merge_in_slice.delay(active.sid)
            return

    network = Network.create(ip, time)
    Active.new(ip, network.nid, uid, time)
    return


def keys_to_user(keys, time):
    """
    get user by the seen active keys
    keys : {key_type: key_value}
    @return: is_new_user, User
    """
    users = []
    attrs = dict(keys.items())
    for key_type, key in keys.items():
        u = User.get_by_key(key_type, key)
        if u is not None:
            del attrs[key_type]
            users.append(u)
    if len(users) == 0:
        return (True, User.create(keys, time))
    user = users[0]
    # merge user if needed
    if len(users) > 1:
        merge_users.delay(user.uid, [u.uid for u in users if u.uid != user.uid])
    user.update_attrs(attrs)
    user.touch_seen(time)
    return (False, user)


@job("plan2", connection=getRedis())
def merge_in_slice(slice_id):
    """
    merge network in slice, with same ip
    """
    slice = ActiveSlice.get(slice_id)
    if slice is None:
        return
    # check cache
    time_key = "slice_merge_time_"+str(slice_id)
    time_str = str(int(slice.start_time.timestamp())) + \
               "_" + str(int(slice.end_time.timestamp()))
    redis = getRedis()
    t = redis.get(time_key)
    if t is not None and t.decode() == time_str:
        return

    nids = set()
    sids = set()
    actives = Active.get_by_ip_time(slice.ip, slice.start_time, slice.end_time)
    for ac in actives:
        if ac.nid != slice.nid:
            nids.add(ac.nid)
            if ac.sid != slice.sid:
                sids.add(ac.sid)

    network = Network.get(slice.nid)
    if network is not None:
        if len(nids) > 0:
            merge_networks.delay(network.nid, list(nids))
    if len(sids) > 0:
        merge_slices.delay(slice.sid, list(sids))
    merge_similar.delay(slice_id)
    # set cache
    redis.setex(time_key, 3600, time_str)


@job("plan3", connection=getRedis())
def merge_similar(slice_id):
    """
    """
    slice = ActiveSlice.get(slice_id)
    if slice is None:
        return
    network = Network.get(slice.nid)
    if network.is_public():
        return
    maxT = datetime.datetime.now() - datetime.timedelta(seconds=INACTIVE_TIME)
    if slice.start_time > maxT:
        # ignore slice active time too short
        return
    uids = network.get_uids()
    if len(uids) < MIN_UIDS:
        return
    # get networks
    nids = NetworkUser.get_nids_by_uids(uids)
    for nid in nids:
        if nid == network.nid:
            continue
        n1 = Network.get(nid)
        if n1 is None:
            continue
        if n1.last_active > slice.start_time:
            continue
        if n1.is_public():
            continue
        if network.similar(n1):
            merge_networks.delay(network.nid, [n1.nid])


post_merge_scheduler = None


def get_post_merge_scheduler():
    global post_merge_scheduler
    if post_merge_scheduler is None:
        queue = Queue('post_merge', connection=getRedis())
        post_merge_scheduler = Scheduler(queue=queue)
    return post_merge_scheduler


@job("merge", connection=getRedis())
def merge_users(uid, uids):
    """
    merge users(uids) to user(uid)
    """
    user = User.get(uid)
    if user is None:
        return
    for id in uids:
        if user.merge(id):
            # add delay run for post merge
            get_post_merge_scheduler().enqueue_in(timedelta(minutes=2), post_merge_user, id, user.uid)


def post_merge_user(o_uid, n_uid):
    User.post_merge(o_uid, n_uid)


@job("merge", connection=getRedis())
def merge_networks(nid, nids):
    """
    merge networks(nids) to network(nid)
    """
    network = Network.get(nid)
    if network is None:
        return
    for id in nids:
        if network.merge(id):
            get_post_merge_scheduler().enqueue_in(timedelta(minutes=2), post_merge_network, id, network.nid)


def post_merge_network(o_nid, n_nid):
    Network.post_merge(o_nid, n_nid)


@job("merge", connection=getRedis())
def merge_slices(sid, sids):
    """
    merge active_slice
    """
    slice = ActiveSlice.get(sid)
    if slice is None:
        return
    for id in sids:
        if slice.merge(id):
            post_merge_slice(id, slice.sid)
            get_post_merge_scheduler().enqueue_in(timedelta(minutes=2), post_merge_slice, id, slice.sid)


def post_merge_slice(o_sid, n_sid):
    Active.replace_sid(o_sid, n_sid)
