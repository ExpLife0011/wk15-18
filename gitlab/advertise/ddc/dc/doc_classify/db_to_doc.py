#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sqlite3

db = sqlite3.connect("bc.db")

def load_positive_contents():
    offset = 0
    limit = 10
    sql = "SELECT content FROM domain WHERE human_check = 1 limit ?, ?"
    cur = db.cursor()
    while True:
        cur.execute(sql, (offset, limit))
        results = cur.fetchall()
        for r in results:
            content = r[0]
            yield content
        if len(results) < limit:
            break
        offset += limit

def load_negative_contents():
    offset = 0
    limit = 10
    sql = "SELECT content FROM domain WHERE human_check = -1 limit ?, ?"
    cur = db.cursor()
    while True:
        cur.execute(sql, (offset, limit))
        results = cur.fetchall()
        for r in results:
            content = r[0]
            yield content
        if len(results) < limit:
            break
        offset += limit


