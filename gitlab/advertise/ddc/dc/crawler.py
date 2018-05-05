#!/usr/bin/env python2
#-*- coding: utf-8 -*-

import scrapy
from scrapy.crawler import CrawlerProcess
import html2text, re
from utils import extract_url
from models import Domain
import chardet

UA = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 UBrowser/2.0.1288.1 Safari/537.36'

class TextSpider(scrapy.Spider):
    name = "bctext"
    start_urls = []
    custom_settings = {
        'DOWNLOADER_MIDDLEWARES' : {
            'JSMiddleware.PhantomJSMiddleware': 100
        }
    }
    evn=''
    def __init__(self, *args, **kwargs):
        super(TextSpider, self).__init__(*args, **kwargs)
        self.converter = html2text.HTML2Text()
        self.converter.ignore_links = True
        self.converter.ignore_images = True
        self.title_p = re.compile(r'<title[^>]*>([^<]+)</title>')
    def filter_content(self, content):
        content = self.converter.handle(content)
        r1 = u'[a-zA-Z0-9\n’!"#$%&\'()*+,-./:;<=>?@，。?★、…【】《》？“”‘’！[\\]^_`{|}~]+'
        return re.sub(r1, "", content).strip()

    def get_title(self, html):
        r = self.title_p.findall(html)
        if len(r) == 0:
            return ''
        else:
            return r[0]



    def parse(self, response):
        body = response.body.decode(response.encoding)
        title = self.get_title(body)
        content = self.filter_content(body)
        if len(content) > 20:
            save_content(response.url, title,content,TextSpider.evn)
        else:
            request = scrapy.Request(response.url, callback=self.parse_text, dont_filter=True)
            request.meta['PhantomJS'] = True
            request.meta['ua'] = UA
            yield request

    def parse_text(self, response):
        body = response.body.decode(response.encoding)
        title = self.get_title(body)
        content = self.filter_content(body)
        if len(content) > 20:
            save_content(response.url, title,content,TextSpider.evn)

def save_content(url, title, content,evn):
    domain, uri = extract_url(url)
    d = Domain(domain,evn)
    d.update_content(uri, title, content)


def crawl(urls,evn):
    TextSpider.start_urls = urls
    TextSpider.evn=evn
    process = CrawlerProcess({
        'USER_AGENT': UA
    })
    process.crawl(TextSpider)
    process.start()
