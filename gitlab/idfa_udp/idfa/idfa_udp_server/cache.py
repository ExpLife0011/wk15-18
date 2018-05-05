#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import redis
import datetime
import startup





class IdfaCache():

    def __init__(self,key):
        self.key = key   #ipa,报文传来，不包括固定字符，作为redis的key
        self.redis_obj = startup.getRedis()


    def refresh_redis(self,append_set):
        self.set_ipa_cache(append_set)
        self.set_expire_time()

    def get_ipa_cache(self):
        return self.redis_obj.sscan(self.key)
    def set_ipa_cache(self,append_set):
        self.redis_obj.sadd(self.key,*append_set)

    def set_expire_time(self):
        now = datetime.datetime.now()
        expire_time = datetime.datetime(now.year,now.month,now.day,23,59,59)
        print(expire_time)
        self.redis_obj.expireat(self,expire_time)

if __name__ == "__main__":
    redi = redis.StrictRedis.from_url("redis://127.0.0.1:6379/0")
    redi.sadd("3456443",*(3,4,5,6,8))