# -*- coding: utf-8 -*-

import redis

REDIS_CONN_STR = ""


def getRedis():
    return redis.StrictRedis.from_url(REDIS_CONN_STR)
