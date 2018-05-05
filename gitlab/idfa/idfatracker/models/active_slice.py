#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from .baseModel import BaseModel


class ActiveSlice(BaseModel):
    table = 'active_slice'
    primary_key = 'sid'
    tableSQL = '''
    CREATE TABLE active_slice (
    sid   serial primary key,
    nid integer,
    ip  varchar(16),
    start_time  timestamp(0) without time zone,
    end_time timestamp(0) without time zone
    );
    CREATE INDEX ON active_slice (nid);
    '''

    def __init__(self,):
        pass

    @classmethod
    def remove(cls, sid):
        sql = "DELETE FROM active_slice WHERE sid = %s"
        cls.execute(sql, (sid,))

    @classmethod
    def get(cls, sid):
        """
        get slice by sid
        """
        sql = "SELECT * FROM active_slice where sid = %s"
        return cls.find(sql, (sid,))

    @classmethod
    def replace_nid(cls, o_nid, n_nid):
        """
        """
        sql = "UPDATE active_slice SET nid = %s WHERE nid = %s"
        cls.execute(sql, (n_nid, o_nid))

    @classmethod
    def create(cls, nid, ip, time):
        sql = "INSERT INTO active_slice(nid, ip, start_time, end_time)" +\
              "VALUES (%s, %s, %s, %s) RETURNING sid"
        r = cls._pool.fetchone(sql, (nid, ip, time, time))
        sid = r[0]
        return cls.get(sid)

    def merge(self, sid):
        """
        merge slice
        """
        slice = self.__class__.get(sid)
        if slice is None:
            return False
        attrs = {}
        if self.start_time > slice.start_time:
            attrs['start_time'] = slice.start_time
        if self.end_time < slice.end_time:
            attrs['end_time'] = slice.end_time
        if len(attrs) > 0:
            self.update_attrs(attrs)
        self.__class__.remove(sid)
        return True
