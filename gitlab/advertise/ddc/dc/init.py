#!/usr/bin/env python
# -*- coding: utf-8 -*-
import models
import crawlByDomains,crawlByJsLog,pickup,update
import os,sys

def main():
    num=raw_input('crawl web:      1\ncreate machine: 2\nselect machine: 3\nfirst learn:    4\nExit:           5\n' )
    if num == '1':
        crawl()
    elif num == '2':
        create()
    elif num=='3':
        select()
    elif num=='4':
        first()
    elif num=='5':
        sys.exit()

def create():
    origin_path=os.getcwd()
    try:
        tag=save_ma()
        tag.read()
    except:
        pass
    save_path=raw_input("input you machine's save path (Example: /home/user/Document/) :")
    tag.save(save_path)
    try:
        os.makedirs(save_path)
    except OSError as e:
        if e.errno==17:
            print('File exists, please continue')
    print('initialization is completed, put your dict.txt in %s' %save_path)
    models.init_db(save_path,origin_path)
    crawl()

def crawl():
    tag=save_ma()
    tag.read()
    print('In crawl')
    save_path=raw_input("select you machine's save path (Example: /home/user/Document/) :")
    js_file=raw_input('your crawlByJsLog file(Example: /home/user/Document/js_file):')
    do_file=raw_input('your crawlByDomains file(Example: /home/user/Document/domain_file):')
    print(js_file+"  "+do_file)
    if os.path.exists(js_file):
        crawlByJsLog.main(js_file,save_path)

    elif os.path.exists(do_file):
        crawlByDomains.main(do_file,save_path)

    else:
        print("file don't exist or path error")
        crawl()
def select():
    try:
        tag=save_ma()
        tag.read()
    except:
        pass
    save_path=raw_input("input you machine's save path (Example: /home/user/Document/) :")
    pickup.main(save_path)
    update.main(save_path)

def first():
    try:
        tag=save_ma()
        tag.read()
    except:
        pass
    save_path=raw_input("input you machine's save path (Example: /home/user/Document/) :")
    update.main(save_path)


class save_ma(object):
    def __init__(self,):
        self.path=os.path.realpath(__file__)
        self.path=os.path.dirname(self.path)
    def save(self,machine):
        f=open(self.path+'/machines.txt','a')
        f.write(machine)
        f.write('\n')
    def read(self,):
        f=open(self.path+'/machines.txt','r')
        data=f.read()
        print('---------')
        print(data)
        print('---------')
if __name__ == '__main__':
    main()