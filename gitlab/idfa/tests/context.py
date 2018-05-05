# -*- coding: utf-8 -*-

import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import idfatracker
from idfatracker.models.baseModel import BaseModel
from idfatracker.models.baseModel import set_db
from idfatracker import redis_conn

# set db
set_db(host='127.0.0.1', port=5432, user='postgres', password='password', dbname='unittest')
redis_conn.REDIS_CONN_STR = "redis://127.0.0.1:6379/0"


def initdb():
    from idfatracker import models
    ms = ["Network", "User", "NetworkUser"]
    for model in ms:
        m = getattr(models, model)
        print("Init table "+m.table)
        sql = "DROP TABLE " + m.table
        try:
            m.execute(sql, ())
        except Exception:
            pass
        m.create_table()


initdb()


def prepare_database(data):
    """
    restore database to data
    """
    with BaseModel.get_conn() as conn, conn.cursor() as cur:
        for table, vs in data.items():
            # clear table
            sql = "DELETE FROM " + table
            cur.execute(sql)
            conn.commit()
            for v in vs:
                sql = "INSERT INTO " + table + " ( " + ", ".join(v.keys()) + " )" + \
                      " VALUES ( " + ", ".join(['%s'] * len(v)) + ")"
                cur.execute(sql, tuple(v.values()))
            conn.commit()
