#!/usr/bin/env python3
# -*- coding:utf-8 -*-

from datetime import datetime

from .baseModel import BaseModel
from .network_user import NetworkUser


class User(BaseModel):
    """
    uid
    idfa
    weixin
    qq
    baidu
    iqiyi
    """

    table = 'users'
    primary_key = "uid"
    tableSQL = '''
    CREATE TABLE users (
    uid serial primary key,
    idfa varchar(36) UNIQUE,
    weixin varchar(11) UNIQUE,
    qq varchar(11) UNIQUE,
    baidu varchar(64) UNIQUE,
    iqiyi varchar(64) UNIQUE,
    create_at timestamp(0) without time zone,
    last_seen timestamp(0) without time zone
    )
    '''

    KEY_IDFA = 'idfa'
    KEY_weixin = 'weixin'
    KEY_qq = 'qq'
    KEY_baidu = 'baidu'
    KEY_iqiyi = 'iqiyi'

    def __init__(self,):
        pass

    @classmethod
    def get_by_key(cls, key_type, key):
        sql = "SELECT * FROM users WHERE "+key_type+" = %s"
        return cls.find(sql, (key,))

    @classmethod
    def get(cls, uid):
        sql = "SELECT * FROM users WHERE uid = %s"
        return cls.find(sql, (uid,))

    @classmethod
    def keys_to_uid(cls, keys, dt):
        users = []
        attrs = dict(keys.items())
        for key_type, key in keys.items():
            u = User.get_by_key(key_type, key)
            if u is not None:
                del attrs[key_type]
                users.append(u)
        if len(users) == 0:
            return User.create(keys, dt)
        user = users[0]
        uids = set()
        if len(users) > 1:
            for u in users[1:]:
                if u.uid != user.uid:
                    uids.add(u.uid)
        for uid in uids:
            user.merge(uid)
        return user

    @classmethod
    def create(cls, keys, time=None):
        """
        keys: {key_type: key_value}
        @return: created user object
        """
        if time is None:
            time = datetime.now()
        keys['create_at'] = time
        keys['last_seen'] = time
        sql = "INSERT INTO users ( " + ", ".join(keys.keys()) + \
              " ) VALUES (" + ", ".join(["%s"]*len(keys)) + ") RETURNING uid"
        r = cls._pool.fetchone(sql, tuple(keys.values()))
        uid = r[0]
        return cls.get(uid)

    @classmethod
    def remove(cls, uid):
        """
        remove user
        """
        sql = "DELETE FROM users WHERE uid = %s"
        return cls.execute(sql, (uid,))

    def merge(self, uid):
        if self.uid == uid:
            return False
        attrs = {}
        user1 = User.get(uid)
        if user1 is None:
            return False
        # created time
        if user1.create_at < self.create_at:
            attrs['create_at'] = user1.create_at
        # last seen
        if user1.last_seen > self.last_seen:
            attrs['last_seen'] = user1.last_seen
        # keys
        for k, v in user1.attrs.items():
            if k not in self.attrs:
                attrs[k] = v
        User.remove(uid)
        self.update_attrs(attrs)
        # update related datas
        User.post_merge(uid, self.uid)
        return True

    @classmethod
    def post_merge(cls, o_uid, n_uid):
        #Active.replace_uid(o_uid, n_uid)
        NetworkUser.replace_uid(o_uid, n_uid)

    def touch_seen(self, time=None):
        if time is None:
            time = datetime.now()
        if self.last_seen >= time:
            return
        self.update_attrs({'last_seen': time})
