#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from .baseModel import BaseModel
from .network_user import NetworkUser
from .merge_log import MergeLog
# from .active import Active
# from .active_slice import ActiveSlice

PUBLIC_USER_COUNT = 200
SIMILAR_RATIO = 0.5

STATUS_ACTIVE = 1
STATUS_INACTIVE = 2
STATUS_DEAD = 3


class Network(BaseModel):
    table = "network"
    primary_key = "nid"
    tableSQL = '''
    CREATE TABLE network (
    nid         serial primary key,
    last_ip     varchar(16),
    start_time   timestamp(0) without time zone,
    end_time timestamp(0) without time zone,
    status smallint
    );
    CREATE INDEX ON network (last_ip);
    '''

    def __init__(self,):
        self.uids = []
        pass

    @classmethod
    def create(cls, ip, start_time, end_time, status=STATUS_ACTIVE):
        """
        create new network
        """
        sql = """INSERT INTO network (last_ip, start_time, end_time, status)
        VALUES(%s, %s, %s, %s) RETURNING nid """
        r = cls._pool.fetchone(sql, (ip, start_time, end_time, status))
        nid = r[0]
        return cls.get(nid)

    @classmethod
    def get(cls, nid):
        """
        """
        sql = "SELECT * FROM network WHERE nid = %s"
        return cls.find(sql, (nid,))

    def get_before_time(cls, time):
        """
        get networks that last_active before time
        """
        sql = "SELECT * FROM network WHERE last_active < %s order by nid desc"
        return cls.find_all(sql, (time,))

    @classmethod
    def remove(cls, nid):
        """
        """
        sql = "DELETE FROM network WHERE nid = %s"
        cls.execute(sql, (nid,))

    @classmethod
    def get_by_ip(cls, ip):
        sql = "SELECT * FROM network WHERE last_ip = %s"
        return cls.find_all(sql, (ip,))

    @classmethod
    def get_active(cls, ip):
        sql = "SELECT * FROM network WHERE last_ip = %s and status = %s"
        return cls.find(sql, (ip, STATUS_ACTIVE))

    def merge(self, nid):
        """
        merge network
        """
        if self.nid == nid:
            return False
        nw1 = Network.get(nid)
        if nw1 is None:
            return False
        Network.remove(nid)
        MergeLog.create(nid, self.nid)
        # update related datas
        Network.post_merge(nid, self.nid)
        return True

    @classmethod
    def post_merge(cls, o_nid, n_nid):
        # Active.replace_nid(o_nid, n_nid)
        NetworkUser.replace_nid(o_nid, n_nid)
        # ActiveSlice.replace_nid(o_nid, n_nid)

    def active(self, ip, time):
        """
        mark active
        """
        if time > self.end_time:
            self.update_attrs({
                'last_ip': ip,
                'end_time': time,
            })
    
    def inactive(self,):
        self.update_attrs({
            'status': STATUS_INACTIVE,
        })

    def is_public(self,):
        """
        check network is public
        """
        count = NetworkUser.count_by_nid(self.nid)
        return count > PUBLIC_USER_COUNT

    def get_uids(self,):
        if len(self.uids) == 0:
            self.uids = NetworkUser.get_uids(self.nid)
        return self.uids

    def similar(self, network):
        """
        check network similar
        """
        myuids = self.get_uids()
        nuids = NetworkUser.get_uids(network.nid)
        snids = []
        for uid in nuids:
            if uid in myuids:
                snids.append(uid)
        l1 = len(myuids)
        l2 = len(nuids)
        ls = len(snids)
        return l1*SIMILAR_RATIO < ls and l2*SIMILAR_RATIO < ls
