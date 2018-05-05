#!/usr/bin/env python
## -*- coding: utf-8 -*-

import sys
import re, time
import sets

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


def get_request(log_file):
    p = re.compile(r''
         '(\d+.\d+.\d+.\d+)\s-\s-\s' #IP address
         '\[(.+)\]\s' #datetime
         '"GET\s(.+)\s\w+/.+"\s' #requested file
         '(\d+)\s' #status
         '(\d+)\s' #bandwidth
         '"(.+)"\s' #referrer
         '"(.+)"' #user agent
    )
    f = open(log_file, 'rb')
    for line in f:
        r = p.findall(line)
        if len(r) > 0:
            yield r[0]

def filter_req(requests, sid, hour):
    for req in requests:
        uri = req[2]
        if not uri.startswith("/jd/"+sid+"/"):
            continue
        rh = req[1].split(":")[1]
        if rh != hour:
            continue
        yield req

def reqs_to_pv(requests):
    pvs_time = {}
    for req in requests:
        key = req[0]+"|"+req[6]+"|"+req[5]
        t = time.mktime(time.strptime(req[1].split()[0], '%d/%b/%Y:%H:%M:%S'))
        if (not pvs_time.has_key(key)) or (t - pvs_time[key] > 10):
            yield req
        pvs_time[key] = t

def domain_count(requests):
    c = {}
    for req in requests:
        url = req[5]
        domain, _ = extract_url(url)
        if not c.has_key(domain):
            c[domain] = 0
        c[domain] += 1
    return c

def compare(tday_file, yday_file, sid, hour):
    tday_counts = domain_count(reqs_to_pv(filter_req(get_request(tday_file), sid, hour)))
    yday_counts = domain_count(reqs_to_pv(filter_req(get_request(yday_file), sid, hour)))
    all_domains = sets.Set(yday_counts.keys() + tday_counts.keys())
    results = {}
    for domain in all_domains:
        c1 = tday_counts.get(domain, 0)
        c2 = yday_counts.get(domain, 0)
        c = c1 - c2
        if c != 0:
            results[domain] = c
    return sorted(results.items(), key=lambda x: x[1])

def main():
    if len(sys.argv) != 5:
        print "Usage: refer.py today_log_file yestoday_log_file server_id time_hour"
        exit(0)
    tday_file = sys.argv[1]
    yday_file = sys.argv[2]
    sid = sys.argv[3]
    hour = sys.argv[4]

    results = compare(tday_file, yday_file, sid, hour)
    for domain, c in results:
        print domain, c

if __name__=="__main__":
    main()
