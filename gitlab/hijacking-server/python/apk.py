#coding:utf-8
from fabric.api import run,sudo,get,settings,local,lcd,env
from datetime import datetime,date
import MySQLdb
import urllib
import urllib2
import time
import re
import os
from os.path import getsize
import requests
import sys
import multiprocessing
from multiprocessing import Pool
import logging
import pycurl
import StringIO
import hashlib
from optparse import OptionParser
parser=OptionParser()

parser.add_option("-u","--userhost",dest='userHost',default='root@125.62.37.66',help="write user@host")
parser.add_option("-p","--password",dest='passWord',default='ZAQ!@WSXzaq12wsx',help="write password")
parser.add_option("-r","--runtime",dest='runTime',type='float',default=0.1,help="write runtime(minute)")
parser.add_option("-n","--networkcard",dest='Networkcard',default='enp4s0f1',help="write networkcard name")
parser.add_option("-m","--process",dest='Process',type='int',default=10,help="write process")

(options,args)=parser.parse_args()
env.host_string=options.userHost
env.password = options.passWord

def delete_dirs(path):
    if os.path.isfile(path):
        try:
            os.remove(path)
        except:
            pass
    elif os.path.isdir(path):
        for item in os.listdir(path):
            itemsrc = os.path.join(path, item)
            delete_dirs(itemsrc)
        try:
            os.rmdir(path)
        except:
            pass

log_dir_name=run('pwd')
log_dir_name=str(log_dir_name)
py_dir_name=os.getcwd()
py_dir_name=str(py_dir_name)
if not os.path.exists(py_dir_name+'/apklog.log'):
    os.mknod('apklog.log')
dir = 'all_apk_dir'
dir = py_dir_name + '/' + str(dir)
if os.path.exists(dir):
    delete_dirs(dir)
os.mkdir(dir)
logger = logging.getLogger('mylogger')
logger.setLevel(logging.DEBUG)
fh = logging.FileHandler('apklog.log')
fh.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh.setFormatter(formatter)
logger.addHandler(fh)


def get_info_by_httpry(runtime=options.runTime,Networkcard=options.Networkcard):
    with settings(warn_only=True):
        run('pkill -9 httpry')
        run('rm -f ' + log_dir_name + '/apk.txt')
    try:
        run('rm -f '+ log_dir_name + '/pipe1')
    except:
        pass
    run('mknod pipe1 p')
    run('set -m; /bin/grep \'.apk\' < '+ log_dir_name +'/pipe1 > '+ log_dir_name +'/apk.txt &')
    command='/usr/sbin/httpry -d -i ' + Networkcard + ' -m get -P '+ log_dir_name +'/pid.txt -f User-Agent,Host,request-uri,HTTP-Version -o '+ log_dir_name +'/pipe1'
    run(command)
    time.sleep(runtime*60)
    try:
        get(log_dir_name + '/pid.txt',py_dir_name + '/pid.txt')
        with open(py_dir_name + '/pid.txt','r') as f:
            pid=f.read()
            print pid
        run('kill -9 '+ str(pid))
        run('rm -f ' + log_dir_name + '/pid.txt')
        delete_dirs(py_dir_name + '/pid.txt')
    except:
        get_info_by_httpry(runtime,Networkcard)
        # with settings(warn_only=True):
        #     run('pkill -9 httpry')
    run('rm -f '+ log_dir_name + '/pipe1')
    command1='ps -aux | grep httpry'
    run(command1)


def get_data():
    if os.path.isfile(py_dir_name + '/apk.txt'):
        os.remove(py_dir_name + '/apk.txt')
    get(log_dir_name + '/apk.txt',py_dir_name + '/apk.txt')
    run('rm -f ' + log_dir_name + '/apk.txt')
    urls=[]
    try:
        with open(py_dir_name + '/apk.txt','r') as f:
            for line in f:
                l = line.split('\t')
                # if 'Mozilla' in l[0] and l[2].endswith('.apk'):
                if 'Mozilla' in l[0] and '.apk' in l[2]:
                    if len(l[2])<240:
                        url = l[1] + l[2]
                        urls.append(url)
    except:
        pass
    delete_dirs(py_dir_name + '/apk.txt')
    url_set=set(urls)
    logger.info('There are %s urls'%(len(url_set)))
    need_unpack_url=[]
    for url in url_set:
        db = MySQLdb.connect(host="localhost", user="root", passwd="rootroot", db="apk")
        cursor = db.cursor()
        num = urls.count(url)
        sql = 'select num from apktable where url="%s";' % url
        cursor.execute(sql)
        result = cursor.fetchone()
        
        if result==None or result==0:
            need_unpack_url.append(url)
            sql = 'insert into apktable(num,url) values("%s","%s");'%(num,url)
            logger.info("insert into apktable,url is %s" % url)
            cursor.execute(sql)
            db.commit()
            cursor.close()
            db.close()
        else:
            count = int(result[0]) + int(num)
            sql = 'update apktable set num="%s" where url="%s";'%(count,url)
            logger.info("update apktable,url is %s" % url)
            cursor.execute(sql)
            db.commit()
            cursor.close()
            db.close()
    return need_unpack_url


def get_package_name(path):
    if os.path.exists(path):
        try:
            with open(path + '/AndroidManifest.xml', 'r') as f:
                p = re.compile('package=\"\S+\"')
                r = re.search(pattern=p, string=f.read())
                n = r.group()
                p1 = re.compile('\"\S+\"')
                name = re.search(pattern=p1, string=n)
                s = re.compile('\"')
                package_name = re.sub(s, '', name.group())
                return package_name
        except Exception,e:
            print 'get_package_name Failure',e
    else:
        print '%s not exists'%path


def get_app_name(path):
    if os.path.exists(path):
        try:
            with open(path + '/res/values/strings.xml') as f:
                p = re.compile('<string name="app_name">\S+</string>')
                string1 = re.search(p, f.read())
                m = string1.group()
                p1 = re.compile('\<string name=\"app_name\"\>')
                p2 = re.compile('\</string\>')
                app_name = re.sub(p2, '', re.sub(p1, '', m))
                return app_name
        except Exception,e:
            print 'get_app_name',e
    else:
        print '%s not exists'%path


def download_apk(url):
    print '-----------download_apk start-----------'
    apkname = hashlib.md5(url).hexdigest()
    unpack_apk_dir = dir + '/' + apkname
    try:
        print '----download start----'+url
        logger.info("----download start----%s" % url)
        apk_url = 'http://' + url
        c = pycurl.Curl()
        b = StringIO.StringIO()
        c.setopt(pycurl.WRITEFUNCTION, b.write)
        c.setopt(pycurl.URL, apk_url)
        c.setopt(pycurl.CONNECTTIMEOUT, 20)
        c.setopt(pycurl.TIMEOUT, 600)
        c.perform()
        apkdata=b.getvalue()
        b.close()
        apknm=unpack_apk_dir + ".apk"
        f = open(apknm, 'wb')
        f.write(apkdata)
        print '----download over----'+url
        logger.info("----download over----%s" % url)
        f.close()
        c.close()
    except Exception,e:
        print '----download failure----'+url
        logger.info('Download Failure:%s'%url)
        logger.info('Reason:%s'%e)
        pass
    print '-----------download_apk over-----------'


def unpack_apk(url):
    apkname = hashlib.md5(url).hexdigest()
    unpack_apk_dir = dir + '/' + apkname
    try:
        if not os.path.exists(dir+'/apktool_2.1.1.jar'):
            local('cp '+ py_dir_name + '/apktool_2.1.1.jar ' + dir+'/apktool_2.1.1.jar')
        else:
            pass
        if os.path.exists(unpack_apk_dir + ".apk") and getsize(unpack_apk_dir + ".apk")>1048576:
            command = 'java -jar apktool_2.1.1.jar d ' + apkname + '.apk'
            with lcd(dir):
                try:
                    print '----unpack start----'+url
                    logger.info("----unpack start----%s" % url)
                    local(command)
                    print '----unpack over----'+url
                    logger.info("----unpack over----%s" % url)
                    local('ls')     #
                except:
                    print '----unpack failure----'+url
                    logger.info("----unpack failure----%s" % url)
            package_name=get_package_name(unpack_apk_dir)
            app_name=get_app_name(unpack_apk_dir)
            db = MySQLdb.connect(host="localhost", user="root", passwd="rootroot", db="apk")
            cursor = db.cursor()
            sql = 'update apktable set package_name="%s",app_name="%s" where url="%s";'%(package_name, app_name,url)
            cursor.execute(sql)
            db.commit()
            cursor.close()
            db.close()
        else:
            print '----This is not an apk----'+unpack_apk_dir
    except:
        logger.info('Unpack Failure:url is %s'%url)
        pass


def upload_data():
    db = MySQLdb.connect(host="localhost", user="root", passwd="rootroot", db="apk")
    cursor = db.cursor()
    url_string = ''
    with open('apk_info.txt','r') as f:
        for line in f:
            l = line.split(' ')
            package_name = l[0]
            app_name = l[1]
            id = l[2]
            sql = 'select url from apktable where package_name="%s" and app_name="%s";'%(package_name,app_name)
            cursor.execute(sql)
            result = cursor.fetchall()
            if len(result) == 0:
                print 'There is no url,%s'%line
            else:
                for num,url in enumerate(result):
                    if num < len(result) - 1:
                        url_string += (url[0] + '   ')
                    else:
                        url_string += url[0]

            data={
                'url':url_string,
                'id':id
            }
            print data
            r=requests.post('http://api.gy1.peeyoo.com/apk',data=data)
            print r.text
    cursor.close()
    db.close()


def main(process=options.Process):
    get_info_by_httpry()
    urls=get_data()
    pool=Pool(process)
    result=pool.map(download_apk, urls)
    pool.close()
    pool.terminate()
    pool.join()
    for url in urls:
        unpack_apk(url)
    upload_data()
    delete_dirs(dir)


if __name__=='__main__':
    main()

