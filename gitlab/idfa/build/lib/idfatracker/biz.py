# -*- coding: utf-8 -*-

from idfatracker.models import User, Network, NetworkUser
from datetime import datetime, timedelta

EXPIRE_TIME = 3600 * 6
CONTINUE_ACTIVE = 3600 * 6
INACTIVE_CHECK = 3600 * 2
MIN_UIDS = 5

class Processor(object):
    """
    """

    def __init__(self, redis):
        self.redis = redis

    def process(self, keys, ip, dt):
        dt = dt.replace(microsecond=0)
        uid = self.keys_to_uid(keys, dt)
        network = Network.get_active(ip)
        if network is not None:
            nu = NetworkUser.get_by_uid_nid(network.nid, uid)
            if nu is not None and \
                nu.last_active > dt - timedelta(CONTINUE_ACTIVE):
                # plan 1
                nu.update_active(ip, dt)
                network.active(ip, dt)
                self.collect_in_cache(ip, network)
                return
        self.cache_log(ip, uid, dt)
        self.try_polymerize(ip, dt, network)

    def keys_to_uid(self, keys, dt):
        """
        keys:{key_type: key_value}
        @return: is_new_user
        """
        user = User.keys_to_uid(keys, dt)
        user.touch_seen(dt)
        return user.uid

    def collect_in_cache(self, ip, network):
        caches = self.get_cache_all(ip)
        if len(caches) == 0:
            return
        for uid, dt in caches:
            if dt < network.start_time or dt > network.end_time:
                continue
            NetworkUser.create_or_update(network.nid, uid, ip, dt)
        self.clear_cache(ip)

    def get_cache_all(self, ip):
        r = []
        r1 = self.get_cache_start(ip)
        r2 = self.get_cache_last(ip)
        for uid, dt in r1.items():
            r.append((uid, dt))
        for uid, dt in r2.items():
            r.append((uid, dt))
        return r

    def get_cache_start(self, ip):
        key = self.cache_key_start(ip)
        return self.read_cache(self.redis.hgetall(key))

    def get_cache_last(self, ip):
        key = self.cache_key_last(ip)
        return self.read_cache(self.redis.hgetall(key))

    def read_cache(self, caches):
        d = {}
        for uid, v in caches.items():
            uid = int(uid)
            dt = datetime.fromtimestamp(float(v))
            d[uid] = dt
        return d

    def clear_cache(self, ip):
        key1 = self.cache_key_start(ip)
        key2 = self.cache_key_last(ip)
        self.redis.delete(key1, key2)

    def remove_cache(self, ip, uid):
        key1 = self.cache_key_start(ip)
        key2 = self.cache_key_last(ip)
        self.redis.hdel(key1, uid)
        self.redis.hdel(key2, uid)

    def cache_key_start(self, ip):
        return "cache_start_" + ip

    def cache_key_last(self, ip):
        return "cache_key_last" + ip

    def cache_log(self, ip, uid, dt):
        key1 = self.cache_key_start(ip)
        v = dt.timestamp()
        if self.redis.hsetnx(key1, uid, v) == 0:
            key2 = self.cache_key_last(ip)
            self.redis.hset(key2, uid, v)
            self.redis.expire(key2, EXPIRE_TIME)
        self.redis.expire(key1, EXPIRE_TIME)

    def try_polymerize(self, ip, dt, network):
        # check network
        if network is not None and network.end_time > dt - timedelta(INACTIVE_CHECK):
            # still active
            return
        l = self.redis.hlen(self.cache_key_last(ip))
        if l < MIN_UIDS:
            return
        
        new_network = self.polymerize(ip)
        if new_network is not None and network is not None:
            network.inactive()

    def polymerize(self, ip):
        r2 = self.get_cache_last(ip)
        if len(r2) == 0:
            return None
        r1 = self.get_cache_start(ip)
        # find uid has max number of uids
        r = {}
        for uid, dt in r2.items():
            r[uid] = {
                'start': r1[uid],
                'end': dt,
                'count': 0,
                'uids': [],
            }
        maxUid = None
        maxCount = 0
        for uid, dt in r1.items():
            for uid2, c in r.items():
                if dt >= c['start'] and dt <= c['end']:
                    c['count'] += 1
                    c['uids'].append(uid)
                    if c['count'] > maxCount:
                        maxCount = c['count']
                        maxUid = uid2
        # loop find more uids, use plan2
        start_time = r1[maxUid]
        end_time = r2[maxUid]
        outer = r1.keys()
        inner = []
        # loop find
        while True:
            changed = False
            for uid in outer:
                if uid in inner:
                    continue
                if r1[uid] >= start_time and r1[uid] <= end_time:
                    inner.append(uid)
                    if uid in r2 and r2[uid] > end_time:
                        end_time = r2[uid]
                        changed = True
                    continue
                if uid in r2 and r2[uid] >= start_time and r2[uid] <= end_time:
                    inner.append(uid)
                    if r1[uid] < start_time:
                        start_time = r1[uid]
                        changed = True
                    continue
            if not changed:
                break
        network = Network.create(ip, start_time, end_time)
        for uid in inner:
            dt = r2[uid] if uid in r2 else r1[uid]
            NetworkUser.create(network.nid, uid, ip, dt)
        # clear log
        self.clear_cache(ip)
        return network
