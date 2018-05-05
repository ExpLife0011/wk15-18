#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import utils
from log import udp_logger
from log import ipa_logger
import datetime
from idfatracker import loader
from idfatracker import api
from protocol_parse import Protocol
from submit import SubmitApi


class DataInterceptor():

    def __init__(self, udpData):
        self.udpData = udpData
        self.ipa = None if Protocol.IPA_NAME not in self.udpData else udpData[Protocol.IPA_NAME]
        self.ip = None if Protocol.IP_NAME not in self.udpData else self.udpData.pop(
            Protocol.IP_NAME)  # self.udpData在原始数据中去掉了ip元素
        self.current_time = datetime.datetime.now()
        self.loader = loader.LogLoader()

    def parse_udp_data(self):

        if self.ipa != None:
            #根据ip查找idfa，上报数据
            ######
            self.submit_idfa(self.ipa,self.ip)
            #self.log_ipa_with_time()
        else:
            if utils.check_ip_format(self.ip):
                # jobs.new_log.delay(self.udpData,self.ip,self.current_time)
                self.loader.push(self.udpData, self.ip, self.current_time)
                #写日志
                self.log_udp_with_time()

    def log_ipa_with_time(self):
        temp={}
        temp["ip"] = self.ip
        temp["ipa"] = self.ipa
        temp["init_time"] = self.current_time.strftime("%Y-%m-%d %H:%M:%S")
        ipa_logger.info(str(temp))


    def log_udp_with_time(self):
        temp = self.udpData
        temp["ip"] = self.ip
        temp["init_time"] = self.current_time.strftime("%Y-%m-%d %H:%M:%S")
        udp_logger.info(str(temp))

    def submit_idfa(self,ipa,ip):
        idfa_list  = api.get_idfas(ip)
        if len(idfa_list) > 0:
            SubmitApi(ipa,ip,idfa_list).start()









