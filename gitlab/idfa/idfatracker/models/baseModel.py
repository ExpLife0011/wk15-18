#!/usr/bin/env python3
# -*- coding:utf-8 -*-

from psycopg2.extras import DictCursor
from .psycopg2_pool import PostgresConnectionPool


def set_db(*args, **kwargs):
    BaseModel.set_db(*args, **kwargs)


class BaseModel(object):
    table = ""
    tableSQL = ""
    primary_key = ""
    _pool = None

    def __init__(self,):
        self.attrs = {}

    @classmethod
    def create_table(cls,):
        if cls.tableSQL != "":
            cls.execute(cls.tableSQL, ())

    @classmethod
    def set_db(cls, *args, **kwargs):
        cls._pool = PostgresConnectionPool(maxsize=33, *args, **kwargs)

    @classmethod
    def get_conn(cls, isolation_level=None):
        """
        @return generator used by with statment
        """
        return cls._pool.connection(isolation_level)

    @classmethod
    def newInstance(cls, data):
        ins = cls()
        ins.attrs = data
        return ins

    def __getattr__(self, name):
        if name in self.attrs:
            return self.attrs[name]
        return None

    @classmethod
    def execute(cls, sql, params):
        return cls._pool.execute(sql, params)

    @classmethod
    def find(cls, sql, params):
        r = cls._pool.fetchone(sql, params, cursor_factory=DictCursor)
        if r is not None:
            return cls.newInstance(dict(r))
        return None

    @classmethod
    def find_all(cls, sql, params):
        for r in cls._pool.fetchiter(sql, params, cursor_factory=DictCursor):
            yield cls.newInstance(dict(r))

    def update_attrs(self, attrs):
        # filter
        temp = {}
        for k, v in attrs.items():
            if k not in self.attrs or self.attrs[k] != v:
                temp[k] = v
        if len(temp) == 0:
            return

        attrs = temp
        cls = self.__class__
        sql = "UPDATE " + cls.table + " SET " + \
              ", ".join([k + " = %s" for k in attrs.keys()])
        sql = sql + " WHERE " + cls.primary_key + " = %s"
        params = list(attrs.values())
        params.append(self.__getattr__(cls.primary_key))
        cls._pool.execute(sql, params)
        for k, v in attrs.items():
            self.attrs[k] = v
