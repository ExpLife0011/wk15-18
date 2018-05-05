#!/usr/bin/env python3
# -*- coding:utf-8 -*-

from idfatracker.models import baseModel
import sys, getopt
import redis


REDIS_CONN_STR = ""


def get_arg(argv):
    try:
        opts, args = getopt.getopt(argv,"hi:p:d:u:",["host=","port=","database=","redisurl="])
    except getopt.GetoptError as e:
        print(e)
        #print('python3 startup.py -d <database> -u <redisurl>')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('python3 startup.py -d <database> -u <redisurl>')
            sys.exit()
        elif opt in ("-i", "--host"):
            host = arg
        elif opt in ("-p", "--port"):
            port = arg
        elif opt in ("-d", "--database"):
            db_str = arg
        elif opt in ("-u", "--redisurl"):
            redis_str = arg
    return host,port,db_str, redis_str

def getRedis():
    return redis.StrictRedis.from_url(REDIS_CONN_STR)

if __name__ == '__main__':
    host,port,db,REDIS_CONN_STR = get_arg(sys.argv[1:])
    baseModel.set_db(db)
    from idfatracker import redis_conn
    redis_conn.REDIS_CONN_STR = REDIS_CONN_STR
    from udp_server import UDPServer
    try:
        server = UDPServer(host,int(port))
        server.run()
    except ValueError as e:
        print("check the value type!")
