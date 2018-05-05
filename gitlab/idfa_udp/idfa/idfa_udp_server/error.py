#!/usr/bin/env python3
# -*- coding:utf-8 -*-

class UDPParseError(Exception):
    CHECKSUM_ERROR = "check sum error"
    TYPE_ERROR = "wrong type format"
    def __init__(self, value):
        self.value = value

    def __str__(self):
        return repr(self.value)