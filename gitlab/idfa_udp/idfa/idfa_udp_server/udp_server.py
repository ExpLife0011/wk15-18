#!/usr/bin/python3
# -*- coding:utf-8 -*-
from socket import *
from protocol_parse import Protocol
from interceptor import DataInterceptor

class UDPServer():

    def __init__(self, server_host, server_port):
        self.server_host = server_host
        self.server_port = server_port

    def run(self, buffer_size = 1024):
        s = socket(AF_INET, SOCK_DGRAM)
        s.bind((self.server_host, self.server_port))
        print('...waiting for messages...')
        while True:
            try:
                data, address = s.recvfrom(buffer_size)
                udp_data = Protocol().parse(data)
                if udp_data:
                    DataInterceptor(udp_data).parse_udp_data()
                #s.sendto(b'this is the UDP server', address)
            except Exception as e:
                print(repr(e))
                print(data)



            '''
            data, address = s.recvfrom(buffer_size)
            print(len(data))
            udp_data = Protocol().parse(data)
            DataInterceptor(udp_data).parse_udp_data()
            '''

        s.close()