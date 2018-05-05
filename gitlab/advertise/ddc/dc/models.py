#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sqlite3
import datetime
import os
import MySQLdb

conn=MySQLdb.connect(
    host='localhost',
    user='root',
    passwd='password',
    #location /etc/mysql/mysql.conf.d/mysql.cnf
    unix_socket='/var/run/mysqld/mysqld.sock'
    )
cur=conn.cursor()

def init_db(path,origin_path):
    dbname=path.replace('/','_')
    print(dbname)
    sqli="CREATE DATABASE "+dbname+' CHARACTER SET utf8 COLLATE utf8_general_ci;'
    conn.set_character_set('utf8')
    cur.execute('SET NAMES utf8;')
    cur.execute('SET CHARACTER SET utf8;')
    cur.execute('SET character_set_connection=utf8;')
    cur.execute(sqli)
    cur.execute('use '+dbname)
    sqli = """CREATE TABLE domain
    (
    domain varchar(64),
    uri varchar(255),
    title varchar(255),
    content text,
    crawl_time datetime,
    t_predict tinyint,
    c_predict tinyint,
    p_predict tinyint,
    human_check tinyint
    ) default charset=utf8 """
    cur.execute(sqli)

class Domain(object):
    def __init__(self, domain,evn):
        self.domain = domain
        self.data = {}
        self.uri = None
        self.title = None
        self.content = None
        self.crawl_time = None
        self.t_predict = None
        self.p_predict = None
        self.human_check = None
        self.in_db = False
        self.checkbywhich=""
        dbname=evn.replace('/','_')
        cur.execute('use '+dbname)
        conn.set_character_set('utf8')
        cur.execute('SET NAMES utf8;')
        cur.execute('SET CHARACTER SET utf8;')
        cur.execute('SET character_set_connection=utf8;')
    def load(self,):
        """
        read data from db
        """

        sql = "SELECT uri, title, content, crawl_time, t_predict, p_predict, human_check FROM domain WHERE domain = %s";
        # cur = self.db.cursor()
        cur.execute(sql, (self.domain,))
        r = cur.fetchone()
        if r != None:
            self.uri, self.title, self.content, self.crawl_time, self.t_predict, self.p_predict, self.human_check = r
            self.in_db = True

    def update_content(self, uri, title, content):
        self.load()
        if self.in_db:
            sql = "UPDATE domain SET uri = %s, title = %s, content = ?,crawl_time=%s, t_predict=0, c_predict=0, human_check=0 WHERE domain = ?"
        else:
            sql = "INSERT INTO domain (uri, title, content, crawl_time, domain, t_predict, c_predict, human_check) VALUES(%s, %s, %s, %s, %s, 0, 0,0)"
        cur.execute(sql, (uri.decode('utf8'), title, content, datetime.datetime.now(), self.domain.decode('utf8')))
        conn.commit()

    def check(self, human_check):
        sql = "UPDATE domain SET human_check = %s WHERE domain = %s"
        cur.execute(sql, (human_check, self.domain))
        conn.commit()

    def predict(self, t_predict, c_predict):
        sql = "UPDATE domain SET t_predict = %s, c_predict = %s WHERE domain = %s"
        cur.execute(sql, (t_predict, c_predict, self.domain))
        conn.commit()

def DomainsNeedCheck(path):
    dbname=path.replace('/','_')
    cur.execute('use '+dbname)
    conn.set_character_set('utf8')
    cur.execute('SET NAMES utf8;')
    cur.execute('SET CHARACTER SET utf8;')
    cur.execute('SET character_set_connection=utf8;')
    sql = "SELECT domain FROM domain WHERE human_check = 0 and t_predict = 0 limit 10"

    while True:
        cur.execute(sql)
        results = cur.fetchall()
        for r in results:
            domain = Domain(r[0],path)
            domain.load()
            yield domain
        if len(results) < 10:
            break

def ContentsDefinite(path):
    dbname=path.replace('/','_')
    cur.execute('use '+dbname)
    conn.set_character_set('utf8')
    cur.execute('SET NAMES utf8;')
    cur.execute('SET CHARACTER SET utf8;')
    cur.execute('SET character_set_connection=utf8;')
    offset = 0
    limit = 10
    sql = "SELECT content FROM domain WHERE human_check = 1 limit %s, %s";
    while True:
        cur.execute(sql, (offset, limit))
        results = cur.fetchall()
        for r in results:
            content = r[0]
            yield content
        if len(results) < limit:
            break
        offset += limit

if __name__=="__main__":
    init_db()
