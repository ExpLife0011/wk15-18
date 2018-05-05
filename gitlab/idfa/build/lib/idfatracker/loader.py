# -*- coding: utf-8 -*-

import json
from ipaddress import ip_address
from datetime import datetime
from .redis_conn import getRedis


QUEUE_PREFIX = "newlog_"

class LogLoader(object):
    """
    """
    def __init__(self, redis=None, maxN=32):
        self.maxN = maxN
        self.redis = redis if redis is not None else getRedis()

    def push(self, keys, ip, time):
        r = int(ip_address(ip)) % self.maxN
        key = QUEUE_PREFIX + str(r)
        v = json.dumps([ip, keys, time.timestamp()])
        self.redis.rpush(key, v)

    def read(self, num):
        key = QUEUE_PREFIX + str(num % self.maxN)
        return self.read_data(key)

    def read_data(self, key):
        _, data = self.redis.blpop(key)
        ip, keys, ts = tuple(json.loads(data.decode('utf-8')))
        t = datetime.fromtimestamp(ts)
        return (ip, keys, t) 
    
    def new_reader(self, num):
        key = QUEUE_PREFIX + str(num % self.maxN)
        while True:
            yield self.read_data(key)