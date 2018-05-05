# -*- coding: utf-8 -*-

from .biz import Processor
from .redis_conn import getRedis
from .loader import LogLoader

class Worker(object):
    """
    """
    def __init__(self, id, loader=None, redis=None):
        self.id = id
        redis = redis if redis is not None else getRedis()
        if loader is None:
            loader = LogLoader(redis)
        self.reader = loader.new_reader(id)
        self.pcs = Processor(redis)
        self._stopped = False

    def run(self,):
        for ip, keys, dt in self.reader:
            print(ip, keys, dt)
            if self._stopped:
                break
            self.pcs.process(keys, ip, dt)