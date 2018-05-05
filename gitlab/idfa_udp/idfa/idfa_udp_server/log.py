#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import os,logging
from logging.handlers import TimedRotatingFileHandler
import time


class Log():
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + "/log/" # 获取上级目录的绝对路径
    def __init__(self,log_name,path,filename):
        if not os.path.exists(Log.BASE_DIR):
            os.mkdir(Log.BASE_DIR)
        if not os.path.exists(Log.BASE_DIR+path):
            os.mkdir(Log.BASE_DIR+path)
        self.logger = logging.getLogger(log_name)
        formatter = logging.Formatter('%(asctime)s - %(message)s')
        hdlr = TimedRotatingFileHandler(filename=Log.BASE_DIR+path+filename, when="midnight", interval=1,encoding="utf-8")
        hdlr.setFormatter(formatter)
        self.logger.setLevel(logging.INFO)
        self.logger.addHandler(hdlr)


    def get_logger(self):
        return self.logger



udp_logger = Log("udp_log","udp_log/","udp_log").get_logger()
ipa_logger = Log("ipa_log","ipa_log/","ipa_log").get_logger()

