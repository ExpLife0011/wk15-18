#-*-coding: utf-8-*-

from optparse import OptionParser
from multiprocessing import Pool, Manager, Process
import logging
from fabric.api import run, sudo, get, settings, local, lcd, env
from fabric import network
import time, os, sys
try:
    import pymysql as MySQLdb
except:
    import MySQLdb
import hashlib
import pycurl
from os.path import getsize
import re
from datetime import datetime
import json
from urllib2 import Request, urlopen
import codecs

logger = None

def initLogger(debug=False, logfile=None):
    global logger
    logger = logging.getLogger("UAU")
    if debug:
        logger.setLevel(logging.DEBUG)
    else:
        logger.setLevel(logging.WARNING)
    if logfile:
        h = logging.FileHandler(logfile)
    else:
        h = logging.StreamHandler(sys.stdout)
    h.setFormatter(logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s'))
    logger.addHandler(h)

def flags():
    parser = OptionParser(add_help_option=False)

    parser.add_option("-h", "--host", help="server host for collect http flow")
    parser.add_option("--port", default='22', help="ssh server host port for collect http flow")
    parser.add_option("-u", "--user", default="root", help="ssh user for login to http flow server")
    parser.add_option("-p", "--password", help="ssh user for login to http flow server")
    parser.add_option("-d", "--device", help="network card device name")
    parser.add_option("-f", "--file", help="local urls file for download and decode, if presents, will not login to the http server")
    parser.add_option("-c", "--concurrent", default=10, type="int", help="concurrent download threads number")
    parser.add_option("-t", "--timeout", default=600, help="max seconds for download one apk file")
    parser.add_option("-w", "--wait", default=60, type="float",help="httpry run time")
    parser.add_option("-r", "--runtime", default=os.path.join(os.path.expanduser('~'),"uau"), help="local runtime path")
    parser.add_option("-y", "--remotedir", default="/root", help="remote runtime path")
    parser.add_option("-v", "--verbosity", default=0, help="debug mode if 1")
    parser.add_option("-o", "--log", default=None, help="log file mode")
    parser.add_option("-g", "--tag", default='', help="add tag argument")
    parser.add_option("-a", "--api", default="http://114.215.188.141:9001/sina/api/apkinfo?", help="push urls api")

    parser.add_option("--ghost", help="server host for collect http flow")
    parser.add_option("--gport", default='22', help="ssh server host port for collect http flow")
    parser.add_option("--guser", default="root", help="ssh user for login to http flow server")
    parser.add_option("--gpassword", help="ssh user for login to http flow server")

    return parser.parse_args()

class UAU(object):
    def __init__(self, options):
        self.host = options.host
        self.port = options.port
        self.user = options.user
        self.password = options.password
        self.device = options.device
        self.urls_file = options.file
        self.pnum = options.concurrent
        self.timeout = options.timeout
        self.wait_time = options.wait
        self.runtime = options.runtime
        self.remotedir = options.remotedir
        self.tag = options.tag
        self.api = options.api
        self.local_data = os.path.abspath(os.path.join(self.runtime, "data"))
        self.queue = Manager().Queue()
        self.urls = []
        self.results = {}
        self.p_package = None
        self.p_version = None
        self.p_appname = None

        self.ghost = options.ghost
        self.gport = options.gport
        self.guser = options.guser
        self.gpassword = options.gpassword
        # clear runtime
        local("rm -rf " + self.runtime+"/*")
        # if not os.path.exists(os.path.join(self.runtime,'apktool_2.2.0.jar')):
        #     local('cp apktool_2.2.0.jar ' + os.path.join(self.runtime,'apktool_2.2.0.jar'))

    def remote_get_httpry_log(self,):
        """
        connect remote server, run httpry and fetch back data
        """
        env.passwords=dict()
        try:
            ghoststr = self.guser + '@' + self.ghost + ':' + self.gport
            env.forward_agent = True
            env.gateway=ghoststr
            env.passwords[ghoststr]=self.gpassword
        except:
            pass
        hoststr = self.user + '@' + self.host + ':' + self.port
        env.host_string = hoststr
        env.passwords[hoststr] = self.password
        cmd_kill = 'kill -9 `cat /tmp/uau.pid`'
        data = os.path.join(self.remotedir, 'uau.data')
        pipe = os.path.join(self.remotedir, 'uau.pipe')
        cmd_delete_data = 'rm -f ' + data
        cmd_delete_pipe = 'rm -f ' + pipe
        cmd_make_pipe = 'mknod ' + pipe + ' p'
        cmd_grep = 'set -m; /bin/egrep \'Mozilla.*\\.apk\' < ' + pipe + '> ' + data + ' &'
        cmd_httpry = '/usr/sbin/httpry -d -i ' + self.device + ' -m get -P \
        /tmp/uau.pid -f User-Agent,Host,request-uri,HTTP-Version -o ' + pipe
        endtime = str(int(self.wait_time/60+1)) #add 1 minute
        # clear environment
        with settings(warn_only=True):
            sudo(cmd_kill)
            sudo(cmd_delete_data)
            sudo(cmd_delete_pipe)
        # start httpry and wait
        sudo(cmd_make_pipe)
        sudo(cmd_grep)
        sudo(cmd_httpry)
        time.sleep(5)
        sudo('echo '+cmd_kill+' > /tmp/stop')
        sudo('at -m now +' + endtime + ' minutes < /tmp/stop')
        logger.info("start httpry and wait")
        network.disconnect_all()
        time.sleep(self.wait_time)
        # fetch data from remote
        sudo(cmd_kill)
        get(data, self.local_data)
        #clear
        with settings(warn_only=True):
            sudo(cmd_delete_data)
            sudo(cmd_delete_pipe)
            sudo('rm stop')
        # check file
        # wait local file cache
        time.sleep(1)
        if not os.path.exists(self.local_data):
            logger.error("get data file error")
            exit(1)

    def parse_urls(self, data_file):
        """
        parse data log file, get all apk download links
        """
        urls = []
        with codecs.open(data_file, "r",encoding='utf-8', errors='ignore') as f:
            for line in f:
                l = line.split("\t")
                if 'Mozilla' in l[0] and '.apk' in l[2]:
                    url = l[1] + l[2]
                    if len(url) <= 255:
                        urls.append(url)
        logger.info("parsed url count: %d", len(urls))
        return urls

    def get_db(self,):
        """
        get local database connection
        """
        return MySQLdb.connect(host="localhost", user="root", passwd="password", db="apk", charset='utf8')

    def fetch_one(self, sql, data=None):
        """
        fetchone line from db
        """
        conn = self.get_db()
        cursor = conn.cursor()
        cursor.execute(sql, data)
        r = cursor.fetchone()
        cursor.close()
        conn.close()
        return r

    def commit(self, sql, data=None):
        """
        commit data to database
        """
        conn = self.get_db()
        cursor = conn.cursor()
        cursor.execute(sql, data)
        conn.commit()
        cursor.close()
        conn.close()

    def log_urls(self, urls, start_time, end_time):
        """
        save url logs
        """
        uurls = set(urls)
        for url in uurls:
            id, _, _, _ = self.get_info(url, True)
            self.commit('insert into log_urls(url_id,url_count,start_time,end_time)\
            values (%s,%s,%s,%s);',
                        (id, urls.count(url), start_time, end_time))

    def get_info(self, url, auto_insert=False):
        """
        get apk info from db
        """
        sql = 'select id,package_name,app_name,version from url where url=%s;'
        info = self.fetch_one(sql, (url,))
        if not info:
            if auto_insert:
                self.add_new(url)
                return self.get_info(url)
            return (None, None, None, None)
        #(id, package, app, version)
        return info

    def add_new(self, url, package="", app="", version=""):
        addtime = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        sql = 'insert into url(url,package_name,app_name,version,addtime) values(%s,%s,%s,%s,%s);'
        self.commit(sql, (url,package,app,version,addtime))

    def update_info(self, url, package, app, version):
        sql = 'update url set package_name=%s,app_name=%s,version=%s where url=%s;'
        self.commit(sql, (package, app, version,url))

    def need_process(self, url):
        """
        check if url need process
        """
        id, package, app, version = self.get_info(url, True)
        if len(package) or len(app):
            return False

        down = self.fetch_one('select count(id) from down_log where url_id=%s;', (id,))
        unpack = self.fetch_one('select count(id) from unpack_log where url_id=%s;', (id,))
        if down[0] >= 3:
            return False
        if unpack[0] == 0:
            return True
        return False


    def save_down_log(self, url, success=1):
        id, _, _,_ = self.get_info(url=url)
        down_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        sql = 'insert into down_log(url_id,down_time,success) values(%s,%s,%s);'
        self.commit(sql, (id, down_time, success))

    def save_unpack_log(self, url, success=1, method=1):
        id, _, _, _ = self.get_info(url=url)
        unpack_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        sql = 'insert into unpack_log(url_id,unpack_time,success,method) values(%s,%s,%s,%s);'
        self.commit(sql, (id, unpack_time, success, method))

    def fetch_apk(self, apk_url):
        try:
            apk_file = os.path.join(self.runtime, hashlib.md5(apk_url.encode('utf-8')).hexdigest()+'.apk')
        except Exception as e:
            logger.warn("apk url encode error: %s" % (e,))
            return
        logger.info("----download start----%s" % apk_url)
        c = pycurl.Curl()
        try:
            c.setopt(c.URL, 'http://' + apk_url)
        except Exception as e:
            logger.warn("url error %s: %s" % type(e), e)
            self.save_down_log(apk_url, 0)
            return
        c.setopt(c.TIMEOUT, self.timeout)
        c.setopt(c.USERAGENT, 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19')
        with open(apk_file, 'wb') as f:
            c.setopt(c.WRITEDATA, f)
            try:
                c.perform()
                success = 1
                self.queue.put((apk_url, apk_file))
                logger.info("----download over----%s" % apk_url)
            except Exception as e:
                logger.warn('download apk error: %s', e)
                success = 0
                logger.info('Download Failure:%s' % apk_url)
        c.close()
        self.save_down_log(apk_url, success)

    def get_package_name(self,apk_dir):
        if os.path.exists(os.path.join(self.runtime,apk_dir)):
            try:
                with open(os.path.join(self.runtime,apk_dir,'AndroidManifest.xml'), 'r') as f:
                    p = re.compile('package=\"\S+\"')
                    r = re.search(pattern=p, string=f.read())
                    n = r.group()
                    p1 = re.compile('\"\S+\"')
                    name = re.search(pattern=p1, string=n)
                    s = re.compile('\"')
                    package = re.sub(s, '', name.group())
                    return package
            except:
                return ''
        else:
            return ''

    def get_app_name(self,apk_dir):
        if os.path.exists(os.path.join(self.runtime,apk_dir)):
            try:
                with open(os.path.join(self.runtime,apk_dir,'res/values/strings.xml'),'r') as f:
                    p = re.compile('<string name="app_name">\S+</string>')
                    string1 = re.search(p, f.read())
                    m = string1.group()
                    p1 = re.compile('\<string name=\"app_name\"\>')
                    p2 = re.compile('\</string\>')
                    app = re.sub(p2, '', re.sub(p1, '', m))
                    return app
            except:
                return ''
        else:
            return ''

    def get_app_version(self, apk_dir):
        if os.path.exists(os.path.join(self.runtime, apk_dir)):
            try:
                with open(os.path.join(self.runtime, apk_dir, 'apktool.yml'), 'r') as f:
                    p = re.compile('versionName: \'?\S+\'?')
                r = re.search(pattern=p, string=f.read())
                m = r.group()
                version = m.split()
                return version[1]
            except:
                return ''
        else:
            return ''

    def analysis_apk_info(self, apk_url, apk_file):
        if not os.path.isfile(apk_file) or getsize(apk_file) <= 1048576:
            local("rm -rf " + apk_file)
            return (None, None, None)
        command = 'aapt dump badging ' + apk_file
        with lcd(self.runtime):
            with settings(warn_only=True):
                logger.info("----analysis start----%s" % apk_file)
                r =local(command,capture=True)
                logger.info("----analysis over----%s" % apk_file)
        self.save_unpack_log(apk_url, int(r.succeeded), method=1)
        local("rm -rf " + apk_file)
        if not r.succeeded:
            logger.warn("decode apk error with info: %s" % r.stderr)
            return (None, None, None)
        if self.p_package == None:
            self.p_package = re.compile('package: name=\'([^\']+)\'')
        if self.p_version == None:
            self.p_version = re.compile('versionName=\'([^\']+)')
        if self.p_appname == None:
            self.p_appname = re.compile('application: label=\'([^\']+)')
        package = self.p_package.findall(r)
        package = package[0] if len(package) > 0 else ''
        version = self.p_version.findall(r)
        version = version[0] if len(version) > 0 else ''
        app = self.p_appname.findall(r)
        app = app[0] if len(app) > 0 else ''
        logger.info("get apk info: %s, %s, %s" % (package, app, version))
        return (package, app, version)

    def decode_apk(self, apk_url, apk_file):
        if not os.path.isfile(apk_file) or getsize(apk_file) <= 1048576:
            return (None, None, None)
        command = 'java -jar apktool_2.2.0.jar d ' + apk_file
        with lcd(self.runtime):
            with settings(warn_only=True):
                logger.info("----unpack start----%s" % apk_file)
                r =local(command)
                logger.info("----unpack over----%s" % apk_file)
                local("rm -f " + apk_file)
        self.save_unpack_log(apk_url, int(r.succeeded))
        apk_dir = os.path.join(self.runtime,apk_file[:-4])
        if r.succeeded:
            ret = self.get_package_name(apk_dir), self.get_app_name(apk_dir), self.get_app_version(apk_dir)
        else:
            ret = (None, None, None)
        local("rm -rf "+ apk_dir)
        return ret

    def pushUrls(self, urls):
        data = []
        set_urls=set(urls)
        for url in set_urls:
            _, package, app, version = self.get_info(url)
            if app != '' and app != None:
                data.append({
                    "packagename": package,
                    "appname": app,
                    "url": url,
                    "version": version,
                    "time": datetime.now().strftime('%Y%m%d%H%M%S'),
                    "count": urls.count(url),
                    "tag": self.tag
                })
        logger.info("pushing data: %s", data)
        req = Request(self.api, json.dumps(data).encode('utf-8'), {'Content-Type': 'application/json'})
        f = urlopen(req)
        response = f.read()
        f.close()
        logger.info("push orver: %s", response)

    def fetch_worker(self, ):
        pool = Pool(self.pnum)
        rs = pool.map_async(self.fetch_apk, self.urls)
        pool.close()
        while (True):
            if (rs.ready()):
                logger.info("*********** FETCH WORKER ALL DOWN **************")
                break
            remaining = rs._number_left * rs._chunksize
            logger.info("Waiting for %d download tasks to complete..." % rs._number_left)
            time.sleep(5)
        # mark finished
        self.queue.put((None, None))

    def decode_worker(self, ):
        while True:
            logger.debug("Current apk to be unpack: %d" % (self.queue.qsize(),))
            url, apk_file = self.queue.get()
            if url == None:
                break
            # add result
            package, app, version= self.analysis_apk_info(url, apk_file)
            if package and app:
                self.update_info(url=url, package=package, app=app, version=version)

    def run(self,):
        start_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        self.remote_get_httpry_log()
        end_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        urls = self.parse_urls(self.local_data)
        self.log_urls(urls, start_time, end_time)
        self.urls = [url for url in set(urls) if self.need_process(url)]
        logger.info("need process url: %d" % len(self.urls))
        fp = Process(target=self.fetch_worker)
        fp.start()
        self.decode_worker()
        # no used join
        fp.join()
        # all finished, push result to remote server
        self.pushUrls(urls)

def main():
    options, args = flags()
    initLogger(options.verbosity, options.log)
    u = UAU(options)
    u.run()


if __name__ == "__main__":
    main()
