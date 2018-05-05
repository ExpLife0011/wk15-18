#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
from crawler import crawl, TextSpider


def read_domains(filepath):
    urls = []
    with open(filepath, 'rb') as f:
        for line in f:
            domain = line.strip()
            if domain != "":
                urls.append("http://"+domain+"/")
    return urls


def main(domainpath,evn):
    filepath = domainpath
    urls = read_domains(filepath)
    crawl(urls,evn)


if __name__ == "__main__":
    main(domainpath , evn)

