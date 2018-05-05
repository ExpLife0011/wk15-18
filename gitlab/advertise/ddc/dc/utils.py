#!/usr/bin/env python
## -*- coding: utf-8 -*-

def extract_url(url):
    url = url.strip()
    if url.startswith("http://"):
        url = url[7:]
    elif url.startswith("https://"):
        url = url[8:]
    pos = url.find("/")
    if pos == -1:
        domain = url
        uri = "/"
    else:
        domain = url[0:pos]
        uri = url[pos:]
    return domain, uri

