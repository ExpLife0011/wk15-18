#!/usr/bin/env python3
# -*- coding:utf-8 -*-
import datetime
import re

def bytesToIp(ipbytes):
    result=""
    for x in bytearray(ipbytes):
        result = result + str(x) + "."
    return result[:-1]

def byte_add(x):
    rem = x%65536
    quo = int(x/65536)
    sum  = rem+quo
    if sum < 65536:
        return sum
    else:
        return byte_add(sum)

def cal_check_sum(packet):  #packet  数据包（包括校验和）
    sum = 0
    size = len(packet) - 2
    for x in range(0, size, 2):
        byte2 = packet[x:x + 2]
        byte2_num = int.from_bytes(byte2, byteorder='big', signed=False)
        sum = sum + byte2_num
    sum = byte_add(sum)
    return ~sum & 0xffff

def check_empty_data(data_bytes):
    data_num = int.from_bytes(data_bytes,byteorder='big',signed=False)
    return 0 == data_num

#tup_list=[("idfa",4),("qq",2)...]
def bytesToIdStr(tup_list,idbytes):
    ids = {}
    cursor = 0
    for x in tup_list:
        name = x[0]
        size = x[1]
        end = cursor+size
        bytes = idbytes[cursor:end]
        if not check_empty_data(bytes):
            if name == "idfa":
                id = ByteToHex(bytes)
            else:
                id_int = int.from_bytes(bytes, byteorder='big', signed=False)
                id = str(id_int)
            ids[name] = id
        cursor = end
    return ids

def HexToByte( hexStr ):
    return bytes.fromhex(hexStr)

def ByteToHex( bins ):
    return ''.join( [ "%02X" % x for x in bins ] ).strip()

def cur_time_str():
    return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

def str_to_timestamp(ts):
    return datetime.datetime.strptime(ts,"%Y-%m-%d %H:%M:%S")


def time_interval_seconds(bt_str,st_str):
    later = str_to_timestamp(str(bt_str))
    pre = str_to_timestamp(str(st_str))
    mins = (later - pre).total_seconds()
    return int(mins)


def check_ip_format(ip):
    if ip == None:
        return False
    else:
        return False if re.match("\d+\.\d+\.\d+\.\d+", ip) == None else True

def insert_multi_parms_sql(base,parms_dict):
    head = ""
    tail = ""
    v_list = []
    for k,v in parms_dict.items():
        head = head + k + ","
        tail = tail + "%s" +","
        v_list.append(v)
    head = "("+head[:-1]+")"
    tail = "("+tail[:-1]+")"
    v_tup = tuple(v_list)
    sql  =  base.format(head,tail)
    return sql,v_tup

def select_multi_parms_sql(base,parms_dict):
    parms =""
    v_list=[]
    for k,v in parms_dict.items():
        parms += " " + k +"=" + "%s AND"
        v_list.append(v)
    sql = base.format(parms[:-4])
    v_tup = tuple(v_list)
    return sql , v_tup

def reset_uid_tup_list(ou_tup_list,nu):
    result =[]
    for t in ou_tup_list:
        result.append((nu,t[0]))
    return result

def fill_idfa_divider(idfa):
    return idfa[:8]+"-"+idfa[8:12] +"-" + idfa[12:16] + "-" + idfa[16:20]+"-" + idfa[20:]


def tuplist_to_list(tuplist):
    result_list = []
    for tup in tuplist:
        if tup[0] !=None:
            result_list.append(tup[0])
    return list(set(result_list))


if __name__ == "__main__":
    m = bytesToIdStr([("idfa",4),("qq",3)],b'\x00\x00\x00\x00\x00\x00\x00')
    print(m)