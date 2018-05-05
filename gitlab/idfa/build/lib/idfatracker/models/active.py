#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from .baseModel import BaseModel
import time
import datetime
from .active_slice import ActiveSlice
from .network_user import NetworkUser


class Active(BaseModel):

    table = 'active'
    primary_key = 'id'
    tableSQL = '''
    CREATE TABLE active (
    id   serial primary key,
    nid  INTEGER ,
    uid  INTEGER ,
    sid  INTEGER ,
    ip   varchar(16) ,
    active_at timestamp(0) without time zone
    );
    CREATE INDEX ON active (uid);
    CREATE INDEX ON active (nid);
    CREATE INDEX ON active (sid);
    CREATE INDEX ON active (ip);
    '''

    def __init__(self,):
        pass

    @classmethod
    def replace_uid(cls, o_uid, n_uid):
        """
        replace all uid where is o_uid to n_uid
        """
        sql = "UPDATE active set uid = %s WHERE uid = %s;"
        cls.execute(sql, (n_uid, o_uid))

    @classmethod
    def replace_nid(cls, o_nid, n_nid):
        """
        """
        sql = "UPDATE active set nid = %s WHERE nid = %s"
        cls.execute(sql, (n_nid, o_nid))

    @classmethod
    def replace_sid(cls, o_sid, n_sid):
        """
        """
        sql = "UPDATE active set sid = %s WHERE sid = %s"
        cls.execute(sql, (n_sid, o_sid))

    @classmethod
    def get_by_ip_user(cls, ip, uid, end_time, maxDuration):
        '''
        查找活跃时间在time - maxDuration至time中的一条活跃记录, 满足ip和uid
        :param ip:
        :param uid:
        :param time:  datetime obj
        :param maxDuration: duration unit secends
        :return: Active object
        '''
        sql = "SELECT * FROM active WHERE uid = %s AND ip = %s AND active_at BETWEEN %s AND %s;"
        begin_stamp = time.mktime(end_time.timetuple()) - maxDuration
        s_time = datetime.datetime.fromtimestamp(begin_stamp)
        act_obj = cls.find(sql, (uid, ip, s_time, end_time))
        return act_obj

    @classmethod
    def new(cls, ip, nid, uid, time, slice_id=None):
        if slice_id is None:
            # create active slice
            slice = ActiveSlice.create(nid, ip, time)
            slice_id = slice.sid
        else:
            act_slice_obj = ActiveSlice.get(slice_id)
            last_end_time = act_slice_obj.end_time
            if last_end_time < time:
                # update end time
                act_slice_obj.update_attrs(dict(end_time=time))
        cls.create(ip, nid, uid, time, slice_id)
        if NetworkUser.check_by_uid_nid(nid, uid) is None:
            NetworkUser.create(nid, uid, time)

    @classmethod
    def create(cls, ip, nid, uid, time, slice_id):
        sql = "INSERT INTO active (ip, nid, uid, sid, active_at) " + \
              "VALUES (%s, %s, %s, %s, %s)"
        cls.execute(sql, (ip, nid, uid, slice_id, time))

    @classmethod
    def get_by_ip_time(cls, ip, from_time, end_time):
        sql = "SELECT * FROM active WHERE ip=%s AND active_at BETWEEN %s AND %s;"
        return cls.find_all(sql, (ip, from_time, end_time))
