#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from datetime import datetime
from .baseModel import BaseModel


class MergeLog(BaseModel):

    table = 'merge_log'
    primary_key = 'id'
    tableSQL = '''
    CREATE TABLE merge_log (
    id       serial primary key,
    pre_nid  integer,
    suf_nid  integer,
    merge_time timestamp(0) without time zone
    )
    '''

    def __init__(self,):
        pass

    @classmethod
    def create(cls, pre, suf):
        sql = "INSERT INTO merge_log (pre_nid, suf_nid, merge_time) VALUES (%s, %s, %s)"
        cls.execute(sql, (pre, suf, datetime.now()))
