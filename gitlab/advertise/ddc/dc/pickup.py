#!/usr/bin/env python
#-*- coding: utf-8 -*-

from doc_classify.machine import Classify, load_cfy
from models import DomainsNeedCheck
import os
import sys


class UI(object):
    def __init__(self, mc_save_pth):
        self.path=mc_save_pth
        self.mc = load_cfy(mc_save_pth)
        words=set(open(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'dict.txt'), 'rb').read().decode('utf8').strip().split("\n"))
        self.mc.add_jieba_dict(words)
        self.title_keywords = []
        with open(mc_save_pth+'title_dict.txt','r') as f:
            for line in f:
                line=line.strip()
                self.title_keywords.append(line)



    def content_predict(self, content):
        contents = [content]
        r = self.mc.predict(contents)
        return r[0] == 1

    def title_predict(self, title):
        for kw in self.title_keywords:
            if kw in title:
                print('-----------------kw is:%s'%kw.encode("utf-8"))
                return True
        return False

    def getDomains(self,):
        domains = DomainsNeedCheck(self.path)
        for d in domains:
            if self.title_predict(d.title):
                d.predict(1, 0)
                d.checkbywhich="checked by title" 
            elif self.content_predict(d.content):
                d.predict(-1, 1)
                d.checkbywhich="checked by content"
            else:
                d.predict(-1, -1)
                d.checkbywhich="none"
                continue
            yield d

    def m_check(self, d):
        print ("******=========================================****")
        print(d.domain + d.uri)
        print(d.content)
        print("\n=========title=========\n")
        message=d.checkbywhich
        print(message)
        print(d.title)
        while True:
            r = raw_input("Is this bc site[y/n]:")
            if r.strip() == "y":
                return True
            if r.strip() == "n":
                return False

    def run(self,):
        for d in self.getDomains():
            c = self.m_check(d)
            if c:
                d.check(1)
            else:
                d.check(-1)


def main(save_path):
    ui = UI(save_path)
    ui.run()


if __name__ == "__main__":
    main(path)
