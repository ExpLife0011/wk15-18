#!/usr/bin/env python3
# -*- coding:utf-8 -*-
from error import UDPParseError
from utils import *
import  utils

class Protocol():

    IDFA_NAME = "idfa"
    IPA_NAME = "ipa"
    WX_NAME = "weixin"
    QQ_NAME = "qq"
    BD_NAME = "baidu"
    IQY_NAME = "iqiyi"
    IP_NAME = "ip"
    __TYPE_TUP = ((IPA_NAME,8), (IDFA_NAME, 16), (WX_NAME,4), (QQ_NAME,4), (BD_NAME,4), (IQY_NAME,4))


    '''
    协议：
    2Bytes,sid,服务器id
    2Bytes，type，高字节按位type_tup
    2nBytes，data，数据
    2Bytes，尾校验，
    '''
    def __init__(self):
        pass

    def __split_modules(self,packet):
        type_bytes = packet[:4]
        ip_bytes = packet[4:8]
        data_bytes = packet[8:-2]
        check_bytes = packet[-2:]
        check_num = int.from_bytes(check_bytes,byteorder='big', signed=False)

        return type_bytes,ip_bytes,data_bytes,check_num


    def __checksum(self,packet):
        if len(packet)%2 == 0:
            return cal_check_sum(packet)
        else:
            raise UDPParseError(UDPParseError.CHECKSUM_ERROR)

    def __type_parse(self, type_bytes):
        type = int.from_bytes(type_bytes, byteorder='big', signed=False)
        if type & 0x03ffffff == 0: #只有高6位取值，其余10位常为0
            for i in range(6):
                if type & 0x80000000 == 0x80000000:
                    yield self.__TYPE_TUP[i]
                type = type << 1
        else:
            raise UDPParseError(UDPParseError.TYPE_ERROR)


    def parse(self,packet):
        type_bytes, ip_bytes, data_bytes, check_num = self.__split_modules(packet)
        if check_num == self.__checksum(packet):
            ip = bytesToIp(ip_bytes)
            types = self.__type_parse(type_bytes)
            data = bytesToIdStr(types,data_bytes)
            if data:
                data["ip"] = ip
                if Protocol.IDFA_NAME in data:
                    data[Protocol.IDFA_NAME] = utils.fill_idfa_divider(data[Protocol.IDFA_NAME])
                return data
            else:
                return None
        else:
            raise UDPParseError(UDPParseError.CHECKSUM_ERROR)


