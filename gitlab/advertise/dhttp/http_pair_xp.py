#!/usr/bin/env python
# -*- coding: utf-8 -*-

import dpkt
import socket
import gzip
import StringIO
import re
from urlparse import urlparse
import time




DEBUG=True
dst_dic=dict()


class Response(object):
    def __init__(self, ip, ts, tcp_packet,location):
        self.ip = ip
        self.ts = ts
        self.tcp = ip.data
        self.packets = [tcp_packet]
        self.location=location
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

    def to_http(self,):
        stream = self.payload()
        if not stream[:4] == b"HTTP":
            return None
        try:
            http = dpkt.http.Response(stream)
        except Exception as e:
            print(e)
            return None
        return http

class Request(object):
    def __init__(self, ip, ts,):
        self.ip = ip
        self.ts = ts
        self.tcp = ip.data

class HttpPair(object):
    def __init__(self, req_file, resp_file):
        self.resp_cache = dict()
        self.req_cache = []
        # self.w = open(wfile, 'wb')
        self.resps = self.read_packets(resp_file, self.add_resp_segment)
        self.reqs = self.read_packets(req_file, self.request_segment)
        self.req_ts = 0
        self.filename=1


    def run(self,):
        for resp in self.resps:
            if resp.location == None:
                http = resp.to_http()
                if http == None:
                    continue
                req = self.find_request(resp)
                if req == None:
                    continue
                print (resp.ts, socket.inet_ntoa(resp.ip.src), socket.inet_ntoa(resp.ip.dst))
                self.save_data(req, resp)
            elif resp.location != None:
                req = self.find_request(resp)
                if req == None:
                    continue
                self.url_parser(req.tcp.data, resp.location)


    def save_data(self, req, resp):
        http = resp.to_http()
        if 'content-encoding' in http.headers and http.headers['content-encoding'] == 'gzip':
            data = StringIO.StringIO(http.body)
            gzipper = gzip.GzipFile(fileobj=data)
            try:
                content=gzipper.read()
            except:
                pass
        else:
            content=http.body
        self.url_parser(req.tcp.data, content)

    def url_parser(self,req, content):
        if content != '':
            try:
                request=dpkt.http.Request(req)
                host = request.headers['host'] if 'host' in request.headers else ''
                uri=request.uri
                url=host+uri
                if content not in dst_dic:
                    url_list=[url]
                    dst_dic[content]=url_list
                else:
                    if url not in dst_dic[content]:
                        dst_dic[content].append(url)
                # raise dpkt.NeedData
                # raise Exception
            except dpkt.NeedData:
                pass
        else:
            pass

    def write_dic_origin(self,):
        
        for content in dst_dic:
            listfile=open(str(self.filename),'w')
            listfile.write('======================response page or location============================\n')
            listfile.write(content+'\n\n\n')
            listfile.write('------------------------------request url----------------------------------\n')
            for url in dst_dic[content]:
                listfile.write(url+'\n\n')
            self.filename=self.filename+1
        print(self.filename-1)

        
    def md(text):
        import hashlib
        import types
        if types(text) is types.StringType:
            m=hashlib.md5()
            m.update(text)
            return m.hexdigest()
        else:
            return""



    def find_request(self, resp):
        if len(self.req_cache) == 0:
            req = next(self.reqs, None)
            if req == None:
                return None
            self.req_cache.append(req)
        # read more requests
        while True:
            req = self.req_cache[-1]
            if req.ts > resp.ts + 2:
                break
            req = next(self.reqs, None)
            if req == None:
                break
            self.req_cache.append(req)

        # remove no used requests
        while len(self.req_cache) > 0:
            req = self.req_cache[0]
            if req.ts > resp.ts - 2:
                break
            del self.req_cache[0]

        for req in self.req_cache:
            if req.ip.src == resp.ip.dst and \
               req.ip.dst == resp.ip.src and \
               req.tcp.sport == resp.tcp.dport and \
               req.tcp.dport == resp.tcp.sport and \
               req.tcp.ack == resp.tcp.seq:
                return req
        return None

    def request_segment(self, ts, ip,):
        tcp = ip.data
        if not isinstance(tcp, dpkt.tcp.TCP):
            return
        stream = tcp.data
        if len(stream) < 4:
            return
        if stream[:4] == b"GET ":
            return Request(ip, ts)

    def add_resp_segment(self, ts, ip):
        tcp = ip.data
        tp = (ip.src, ip.dst, tcp.sport, tcp.dport)
        if tp not in self.resp_cache:
            resp = Response(ip, ts, tcp, None)
            self.resp_cache[tp] = resp
        else:
            resp = self.resp_cache[tp]
            resp.add_packet(tcp)
        if resp.closed():
            del self.resp_cache[tp]
            return resp
        try:
            if re.match(r'30[12]',tcp.data[9:12]):
                response = dpkt.http.Response(tcp.data)
                location = response.headers['location']
                resp = Response(ip, ts, None, location)
                print(location)
                return resp
        except Exception as e:
            print(e)
            pass
    def read_packets(self, filename, receive):
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
            p = receive(ts, ip)
            if p != None:
                yield p

if __name__ == '__main__':
    import sys
    if len(sys.argv) <= 2:
        print("%s <request pcap filename> <response pcap filename> " % sys.argv[0])
        sys.exit(2)
    HP = HttpPair(sys.argv[1], sys.argv[2])
    HP.run()
    HP.write_dic_origin()
