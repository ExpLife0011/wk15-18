#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os,sys
from sets import Set
from utils import extract_url
from crawler import crawl, TextSpider
from geoip import geolite2

class Domain(object):
    def __init__(self, domain):
        self.domain = domain
        self.pages = {}
        self.count = 0

    def getPage(self, url):
        if not self.pages.has_key(url):
            self.pages[url] = Page(url)
        return self.pages[url]

    def topPage(self,):
        r = sorted(self.pages.values(), key=lambda p: p.rcount(),
                   reverse=True)
        return r[0]

    def calc(self,):
        for _, page in self.pages.items():
            self.count += page.rcount()

class Page(object):
    def __init__(self, url):
        self.url = url
        self.jss = Set()
        self.count = 0

    def logjs(self, url):
        self.count += 1
        self.jss.add(url)

    def rcount(self,):
        return self.count / self.jss.__len__()


class Counter(object):
    def __init__(self,):
        self.domains = {}

    def getDomain(self, domain):
        if not self.domains.has_key(domain):
            self.domains[domain] = Domain(domain)
        return self.domains[domain]

    def log(self, js_url, page_url):
        domain, uri = extract_url(page_url)
        d = self.getDomain(domain)
        page = d.getPage(domain+uri)
        page.logjs(js_url)

    def calc(self,):
        for _, d in self.domains.items():
            d.calc()
        return sorted(self.domains.values(), key=lambda d: d.count, reverse=True)

    def save(self, filepath):
        r = self.calc()
        with open(filepath,'w') as f:
            for d in r:
                page = d.topPage()
                f.write(page.rcount() + " " + page.url + "\n")


def domain_filter():
    ds = set(open(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'white_domains.txt'), 'rb').read().decode('utf8').strip().split('\n'))
    def in_white_list(url):
        domain, _ = extract_url(url)
        for d in ds:
            if d in domain:
                return True
        return False
    return in_white_list

def read_js_log(filepath):
    in_white_list = domain_filter()
    with open(filepath, 'rb') as f:
        for line in f:
            tmp = line.strip().split("\t")
            if tmp.__len__() != 5:
                continue
            dt, ip, js_domain, js_uri, page_url = tmp
            if in_white_list(page_url):
                continue
            #if is_china_ip(ip):
            #    continue
            yield (dt, js_domain, js_uri, page_url)

def main(filepath,evn):

    c = Counter()
    for _,js_domain,js_uri,page_url in read_js_log(filepath):
        c.log(js_domain+js_uri, page_url)
    domains = c.calc()
    urls = ['http://'+d.topPage().url for d in domains]
    print("get urls: %d" % (len(urls),))
    crawl(urls,evn)

if __name__ == "__main__":
    main(filepath,evn)
