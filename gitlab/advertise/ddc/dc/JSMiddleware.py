#!/usr/bin/env python
# -*- coding: utf-8 -*-

from selenium import webdriver
from scrapy.http import HtmlResponse
from twisted.internet import threads

UA = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 UBrowser/2.0.1288.1 Safari/537.36'
def fetch_content(request):
    webdriver.DesiredCapabilities.PHANTOMJS['phantomjs.page.settings.resourceTimeout'] = 5000
    webdriver.DesiredCapabilities.PHANTOMJS['phantomjs.page.settings.userAgent'] = UA
    driver = webdriver.PhantomJS()
    driver.set_page_load_timeout(10)
    driver.get(request.url)
    content = driver.page_source.encode('utf-8')
    driver.quit()
    return HtmlResponse(request.url, encoding='utf-8', body=content, request=request)



class PhantomJSMiddleware(object):
    @classmethod
    def process_request(cls, request, spider):

        if request.meta.has_key('PhantomJS'):
            return threads.deferToThread(fetch_content, request)
