#!/usr/bin/env python3
# -*- coding:utf-8 -*-
import requests
import json
import threading
from cache import IdfaCache
import hashlib
import redis
from log import ipa_logger



class SubmitApi(threading.Thread):
    CHANNEL_ID=49
    NETWORKCARD_ID=10000
    CHECK_IPA_URL = "https://if.accidea.com/idfa/api/exist/busi"
    SUBMIT_IDFA_URL = "https://if.accidea.com/idfa/api/{}/{}/ipa/col".format(CHANNEL_ID,NETWORKCARD_ID)
    COMMON_HEADERS = {"Content-Type": "application/json","Accept":"application/json"}
    def __init__(self,ipa_code,ip,idfa_list):
        ##完整ipa   pre-thinned4205831119538759132.thinned.signed.dpkg.ipa
        threading.Thread.__init__(self)
        self.ipa = "pre-thinned{}.thinned.signed.dpkg.ipa".format(ipa_code)
        self.ip = ip
        self.idfa_list = idfa_list
        md5 = hashlib.md5()
        name = self.ipa+self.ip
        md5.update(name.encode("utf-8"))
        self.key = md5.hexdigest()
        print(self.key)
        self.cache = IdfaCache(self.key)

    def run(self):
        isNeed = True if self.__check_ipa_business() == "1" else False
        if isNeed :
            need_submit_idfa_set = self.diff_with_redis(self.key,self.idfa_list)
            if len(need_submit_idfa_set) > 0:
                self.__submit_ipa_business(need_submit_idfa_set)
        else:
            ipa_logger.info("{}: {} is out of business.".format(self.ip,self.ipa))

    def __check_ipa_business(self):
        try:
            params = dict(ipa = self.ipa)
            r = requests.get(SubmitApi.CHECK_IPA_URL, params=params,timeout=5,verify=False)
            r.raise_for_status()  # 如果响应状态码不是 200，就主动抛出异常
        except requests.RequestException as e:
            return "0"
        else:
            return r.text

    def __submit_ipa_business(self,idfa_set):
        try:
            params = dict(ipa = self.ipa, ip = self.ip,idfa = list(idfa_set))
            json_params = json.dumps(params)
            print(params)
            r = requests.post(SubmitApi.SUBMIT_IDFA_URL, data=json_params,headers = SubmitApi.COMMON_HEADERS,timeout=5,verify=False)
            r.raise_for_status()  # 如果响应状态码不是 200，就主动抛出异常
        except requests.RequestException as e:
            print(e)
        else:
            result = r.json()
            if result["code"] == 0:
                #上传成功，更新redis
                self.cache.refresh_redis(idfa_set)
                ipa_logger.info("{} : {} is in business. Result:{}".format(self.ip,self.ipa,r.text))


    def diff_with_redis(self,key,idfa_list):
        cur,idfas_redis_list = self.cache.get_ipa_cache()
        if len(idfas_redis_list) != 0:
            idfa_redis = set(idfas_redis_list)
            idfa_pre = set(idfa_list)
            idfa_diff_set = idfa_pre.difference(idfa_redis)
            return idfa_diff_set
        else:
            #未保存或者已经过期
            return set(idfa_list)



if __name__ == "__main__":
    print(threading.current_thread())
    pool = redis.ConnectionPool(host='localhost', port=6379, decode_responses=True)
    s = SubmitApi("4205831119538759133","59.149.70.23",["CAC39549-35D4-48A7-A229-5C2AA79D8A11","CAC39544-25D4-48A7-A229-5C2AA79D8A11"])
    s.start()