#!/usr/bin/env python
#-*- coding: utf-8 -*-

"""
Fafile for deploy hijacking server project
"""
from fabric.api import env, task, roles, local, run, execute, lcd, hosts, sudo, put, parallel, cd
from fabric.contrib.project import upload_project
from fabric.contrib.files import sed
import time, os

PROJECT_NAME = "hijacking_server"
GIT_REPOSITORY = "ssh://git@gitlab.zmj.com:10022/zhaona/hijacking-server.git"
BRANCH = 'origin/master'
DEPLOY_DIR = os.path.expanduser('~/deploy/')
PRODUCTION_DIR = '/data/www'

# env.shell = "/bin/sh -c"

def make_symlink_atomically(new_target, symlink_location, sudo=False):
    # From http://blog.moertel.com/articles/2005/08/22/how-to-change-symlinks-atomically
    runner = sudo if sudo else run
    params = {
            'new_target': new_target,
            'symlink_location': symlink_location,
            'tempname': 'current_tmp',
            }
    #cmd = "ln -s %(new_target)s %(tempname)s && mv -f %(tempname)s %(symlink_location)s" % params
    cmd = "rm -rf %(symlink_location)s ; ln -s %(new_target)s %(symlink_location)s " % params
    runner(cmd)



class Deploy(object):
    ins = None

    DB_HOST=None
    DB_NAME=None
    MONGODB=None

    @classmethod
    def setIns(cls, version):
        cls.ins = Deploy(version)

    @classmethod
    def i(cls,):
        return cls.ins

    def __init__(self, version):
        self.version = version
        self.project_name = PROJECT_NAME
        self.git_dir = os.path.join(DEPLOY_DIR, self.project_name, 'git')
        self.prep_dir = os.path.join(DEPLOY_DIR, self.project_name, self.versiondir())
        self.src_dir = os.path.join(self.prep_dir, 'src')
        self.srv_config_dir = os.path.join(self.git_dir, 'srv', 'prod')
        self.production_dir = os.path.join(PRODUCTION_DIR, self.project_name)
        self.run_time = time.time()

    def versiondir(self,):
        return self.version.replace('/', '-')

    def get_commit(self,):
        with lcd(self.git_dir):
            return local('git rev-parse --verify %s' % self.version, capture=True).strip()

    def git_checkout(self,):
        if not os.path.exists(self.git_dir):
            local('git clone %s %s' % (GIT_REPOSITORY, self.git_dir))
        with lcd(self.git_dir):
            local('git fetch')
            local('git checkout %s' %  self.get_commit())

    def switch_symlink(self,):
        new_target = self.get_release_dir()
        symlink_location = os.path.join(self.production_dir, 'current')
        make_symlink_atomically(new_target, symlink_location)

    def get_time_str(self,):
        return time.strftime('%Y-%m-%d-%H-%M-%S', time.localtime(self.run_time))

    def get_release_name(self,):
        return self.get_time_str() + "_" + self.versiondir() + "_" + self.get_commit()

    def get_release_dir(self,):
        return os.path.join(self.production_dir, 'releases', self.get_release_name())

    def get_temp_dir(self,):
        return os.path.join(self.production_dir, 'releases')

    def copy_src(self, subdir="src"):
        cmd = 'rsync -a --delete --delete-excluded '
        excludes = [
            '.git',
            'codeception.yml',
            '.gitignore',
            'tests'
        ]
        for e in excludes:
            cmd += ' --exclude  %s ' % e
        cmd += '%s %s/' % (os.path.join(self.git_dir,subdir), self.prep_dir)
        local(cmd)

    def install_vendor(self,):
        composer_params = [
            '--no-dev',
            '--prefer-dist',
        ]
        with lcd(self.src_dir):
            local('composer install '+ ' '.join(composer_params))

    def init_env(self,):
        with lcd(self.src_dir):
            local("echo 1 $'\n' yes | ./init")


    def push_to_server(self,):
        # rsync_project(self.get_release_dir(), self.prep_dir + "/")
        upload_project(local_dir = self.prep_dir, remote_dir=self.get_temp_dir())
        run('mv %s %s' % (os.path.join(self.get_temp_dir(), self.versiondir()), self.get_release_dir()))

    def update_custom_files(self,):
        # dbname
        if Deploy.DB_NAME != None:
            sed(os.path.join(self.get_release_dir(),'src/common/config/main-local.php'), 'dbname=[A-Za-z0-9_]*', 'dbname='+Deploy.DB_NAME)
        if Deploy.DB_HOST != None:
            sed(os.path.join(self.get_release_dir(),'src/common/config/main-local.php'), 'mysql:host=[0-9\.]+', 'mysql:host='+Deploy.DB_HOST)

        if Deploy.MONGODB != None:
            sed(os.path.join(self.get_release_dir(),'src/common/config/main-local.php'), "mongodb://[A-Za-z0-9_\.:\/]*", 'mongodb://'+Deploy.MONGODB)
        

    def restart_server(self,):
        configs = {
            # 'php.ini' : '/etc/php.ini',
            # 'php-fpm.conf': '/usr/local/php/etc/php-fpm.conf',
            # 'nginx.conf' : '/usr/local/nginx/conf/nginx.conf',
        }
        for f,t in configs.items():
            put(os.path.join(self.srv_config_dir, f), t)

        sudo('/etc/init.d/php-fpm restart')
        # sudo('/usr/local/nginx/sbin/nginx -s reload')

    @staticmethod
    def prep_release(version, ):
        Deploy.setIns(version)
        Deploy.i().git_checkout()
        Deploy.i().copy_src('src')
        Deploy.i().install_vendor()
        Deploy.i().init_env()
        
        
def publish(version=BRANCH):
    Deploy.prep_release(version)
    Deploy.i().push_to_server()
    Deploy.i().update_custom_files()
    Deploy.i().switch_symlink()
    Deploy.i().restart_server()


def feichuang():
    env.hosts = ['root@42.62.65.37']

def guoyin():
    env.hosts = ['root@67.198.189.18']
    global PROJECT_NAME
    PROJECT_NAME = "hijacking-server-gy"
    Deploy.DB_NAME = "hijacking_gy"
    Deploy.MONGODB = "192.168.193.124/hijacking_log_gy"

def liujian():
    env.hosts = ['root@lj2.peeyoo.com']
    global PROJECT_NAME
    PROJECT_NAME = "hijacking-server"
    Deploy.DB_NAME = "hijacking"
    Deploy.DB_HOST = "192.168.130.241"
    Deploy.MONGODB = "192.168.193.124/hijacking_log_lj"

def gouyin2():
    env.hosts = ['root@lj2.peeyoo.com']
    global PROJECT_NAME
    PROJECT_NAME = "hijacking-server-gy2"
    Deploy.DB_NAME = "hijacking_gy2"
    Deploy.DB_HOST = "192.168.130.241"
    Deploy.MONGODB = "192.168.193.124/hijacking_log_gy2"

def liumj():
    env.hosts = ['root@lj2.peeyoo.com']
    global PROJECT_NAME
    PROJECT_NAME = "hijacking-server-lmj"
    Deploy.DB_NAME = "hijacking_lmj"
    Deploy.MONGODB = "192.168.128.50/hijacking_log_lmj"
    
