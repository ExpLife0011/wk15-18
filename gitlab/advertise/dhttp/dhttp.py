#!/usr/bin/env python
# -*- coding: utf-8 -*-

import dpkt
import socket
import gzip
import StringIO

DEBUG=False

class Connection(object):
    def __init__(self, tp, tcp_packet):
        self.tp = tp
        self.packets = [tcp_packet]

    def add_packet(self, tcp_packet):
        last_packet = self.packets[-1]
        if last_packet.seq + len(last_packet.data) == tcp_packet.seq:
            self.packets.append(tcp_packet)

    def closed(self,):
        last_packet = self.packets[-1]
        return last_packet.flags & dpkt.tcp.TH_FIN

    def payload(self,):
        data = b''
        for packet in self.packets:
            data += packet.data
        return data

class HttpParser(object):
    def __init__(self, wfile):
        self.conns = dict()
        self.w = open(wfile, 'wb')

    def save_conn(self, conn):
        stream = conn.payload()
        if not stream[:4] == b"HTTP":
            return
        try:
            http = dpkt.http.Response(stream)
        except Exception as e:
            print(e)
            return
        src_ip, dst_ip, sport, dport = conn.tp
        self.w.write(("-- %s:%d ---> %s:%d \n" % (socket.inet_ntoa(src_ip), sport, socket.inet_ntoa(dst_ip), dport)).encode('utf8'))
        self.w.write(("%s %s\n" % (http.status, http.reason)).encode("utf8"))
        #write headers
        for k,v in http.headers.items():
            self.w.write((k+" "+v).encode('utf8'))
            self.w.write(b"\n")

        self.w.write(b"\n")
        #write body
        if 'content-encoding' in http.headers and http.headers['content-encoding'] == 'gzip':
            data = StringIO.StringIO(http.body)
            gzipper = gzip.GzipFile(fileobj=data)
            try:
                self.w.write(gzipper.read())
            except:
                pass
        else:
            self.w.write(http.body)
        self.w.write(b"\n\n\n")

    def add_segment(self, ts, ip):
        tcp = ip.data
        tp = (ip.src, ip.dst, tcp.sport, tcp.dport)
        if tp not in self.conns:
            conn = Connection(tp, tcp)
            self.conns[tp] = conn
        else:
            conn = self.conns[tp]
            conn.add_packet(tcp)
        if conn.closed():
            del self.conns[tp]
            self.save_conn(conn)

    def parse_pcap_file(self, filename):
        # Open the pcap file
        f = open(filename, 'rb')
        pcap = dpkt.pcap.Reader(f)

        count = 0
        for ts, buf in pcap:
            count += 1
            eth = dpkt.ethernet.Ethernet(buf)
            if eth.type != dpkt.ethernet.ETH_TYPE_IP:
                continue
            ip = eth.data
            if ip.p != dpkt.ip.IP_PROTO_TCP:
                continue
            if DEBUG:
                print("%d: %s ---> %s" % (count, socket.inet_ntoa(ip.src), socket.inet_ntoa(ip.dst)))
            self.add_segment(ts, ip)

if __name__ == '__main__':
    import sys
    if len(sys.argv) <= 2:
        print("%s <pcap filename> <write filename>" % sys.argv[0])
        sys.exit(2)

    HP = HttpParser(sys.argv[2])
    HP.parse_pcap_file(sys.argv[1])
