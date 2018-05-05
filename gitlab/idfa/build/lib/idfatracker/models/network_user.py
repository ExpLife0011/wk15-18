#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from .baseModel import BaseModel
from collections import defaultdict


class NetworkUser(BaseModel):
    table = 'network_user'
    primary_key = 'id'
    tableSQL = '''
    CREATE TABLE network_user (
    id   serial primary key,
    nid integer,
    uid  integer,
    ip varchar(16),
    last_active timestamp(0) without time zone
    );
    CREATE INDEX ON network_user (nid);
    CREATE INDEX ON network_user (uid);
    '''

    def __init__(self,):
        pass

    @classmethod
    def replace_uid(cls, o_uid, n_uid):
        d = defaultdict(list)
        with cls.get_conn() as conn, conn.cursor() as cur:
            user_in_network_sql = "select nid,last_active,id from network_user where uid = %s OR uid = %s;"
            del_o_sql = "DELETE FROM network_user WHERE id = %s;"
            sql = "UPDATE network_user set uid = %s , last_active = %s WHERE id= %s;"
            cur.execute(user_in_network_sql, (o_uid,n_uid))
            rc = cur.fetchall()
            if len(rc) !=0:
                #{nid:[[last_active,id],[...]],...}
                for rc_tup in rc:
                    rc_list = list(rc_tup)
                    d[rc_list.pop(0)].append(rc_list)
                for k,v in d.items():
                    #对v按last_active 升序排序
                    #last_active 最后的时间
                    #id_list重复uid记录id
                    v.sort(key = lambda x:x[0])
                    last_active = v[-1][0]
                    id_list = [(x[1],) for x in v]
                    update_id = id_list.pop(0)
                    #更新记录
                    cur.execute(sql,(n_uid,last_active,update_id))
                    if len(id_list) > 0 :
                        #删除这些记录
                        cur.executemany(del_o_sql,id_list)

    @classmethod
    def replace_nid(cls, o_nid, n_nid):
        d = defaultdict(list)
        with cls.get_conn() as conn, conn.cursor() as cur:
            user_in_network_sql = "select uid,last_active,id from network_user where nid = %s OR nid = %s;"
            del_o_sql = "DELETE FROM network_user WHERE id = %s;"
            sql = "UPDATE network_user set nid = %s , last_active = %s WHERE id= %s;"
            cur.execute(user_in_network_sql, (o_nid,n_nid))
            rc = cur.fetchall()
            if len(rc) !=0:
                #{nid:[[last_active,id],[...]],...}
                for rc_tup in rc:
                    rc_list = list(rc_tup)
                    d[rc_list.pop(0)].append(rc_list)
                for k,v in d.items():
                    #对v按last_active 升序排序
                    #last_active 最后的时间
                    #id_list重复uid记录id
                    v.sort(key = lambda x:x[0])
                    last_active = v[-1][0]
                    id_list = [(x[1],) for x in v]
                    update_id = id_list.pop(0)
                    #更新记录
                    cur.execute(sql,(n_nid,last_active,update_id))
                    if len(id_list) > 0 :
                        #删除这些记录
                        cur.executemany(del_o_sql,id_list)

    @classmethod
    def count_by_nid(cls, nid):
        sql = "SELECT count(*) FROM network_user where nid = %s"
        r = cls._pool.fetchone(sql, (nid,))
        return r[0]

    @classmethod
    def get_uids(cls, nid):
        sql = "SELECT uid FROM network_user where nid = %s"
        r = cls._pool.fetchall(sql, (nid,))
        return r

    @classmethod
    def get_by_uid_nid(cls, nid, uid):
        sql = "SELECT * FROM network_user WHERE nid=%s AND uid=%s;"
        return cls.find(sql, (nid, uid))

    @classmethod
    def get_nids_by_uids(cls, uids):
        sql = "SELECT DISTINCT nid FROM network_user WHERE uid IN %s"
        return cls._pool.fetchall(sql, (tuple(uids),))

    @classmethod
    def create(cls, nid, uid, ip, time):
        sql = "INSERT INTO network_user (nid, uid, ip, last_active) " + \
              "VALUES (%s, %s, %s, %s)"
        cls.execute(sql, (nid, uid, ip, time))

    def update_active(self, ip, dt):
        self.update_attrs({
            'ip': ip,
            'last_active': dt,
        })

    @classmethod
    def create_or_update(cls, nid, uid, ip, time):
        nu = cls.get_by_uid_nid(nid, uid)
        if nu is not None:
            nu.update_active(ip, time)
        else:
            cls.create(nid, uid, ip, time)

