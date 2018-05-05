#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import sys
sys.path.append('/Users/yeah/Documents/workspace/gitlab/idfa/idfatracker/models')
from idfatracker.models.active import Active
from idfatracker.models.active import ActiveSlice
from idfatracker.models.network_user import NetworkUser
from idfatracker.models import baseModel
from datetime import datetime


if __name__ == "__main__":
    baseModel.set_db("127.0.0.1",5432,"postgres","admin","idfa")
    #et = datetime.datetime.now()
    #e = Active.get_by_ip_user("204.214.225.205",29,et ,100000000)
    #NetworkUser.replace_uid(32,34)
    #Active.replace_uid(29,39)
    #Active.replace_nid(2,23)
    #NetworkUser.replace_nid(3,6)
    #x = NetworkUser.count_by_nid(68)
    #y = NetworkUser.get_uids(6)
    #z = NetworkUser.check_by_uid_nid(6,34)
    #NetworkUser.create(dict(uid=3,nid=4,last_active=datetime.now()))
    #ActiveSlice.create_table()
    Active.new("11.11.11.11",3,9,datetime.now(),slice_id=1)
    #r = active.Active.get_by_ip_time('204.214.225.205',datetime(2018,3,12,12,12,12,12233),datetime.now())

