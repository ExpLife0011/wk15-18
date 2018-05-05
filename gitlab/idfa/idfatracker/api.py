# -*- coding: utf-8 -*-
"""
"""

from .models import Network, NetworkUser, User
from .redis_conn import getRedis


def get_idfas(ip):
    """
    """
    uids = set()
    # get from network
    network = Network.get_active(ip)
    if network is not None:
        r = NetworkUser.get_uids(network.nid)
        for uid in r:
            uids.add(uid)
    # get from cache
    redis = getRedis()
    key = "cache_start_"+ip
    caches = redis.hgetall(key)
    for uid, _ in caches.items():
        uid = int(uid)
        uids.add(uid)

    idfas = []
    for uid in uids:
        user = User.get(uid)
        if user is None:
            continue
        if user.idfa is not None:
            idfas.append(user.idfa)

    return idfas
