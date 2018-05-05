#-*-coding:"utf-8"-*-
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import datetime
import threading

def open_one_page():
    s=datetime.datetime.now()
    driver = webdriver.PhantomJS()
    driver.get("http://www.jd.com")
    e=datetime.datetime.now()
    timecost=(e-s)
    print("open 1 page time cost:%s" % timecost)
    driver.close()
    # print(driver.page_source.encode("utf-8"))


def open_more_page(num):
    s=datetime.datetime.now()
    driver = webdriver.PhantomJS()
    for i in range(num):
        driver.get("http://www.ifeng.com")
    e=datetime.datetime.now()
    timecost=e-s
    print("open %s page time time cost:%s" % (num,timecost))
    driver.close()
if __name__ == '__main__':
    open_one_page()
    open_more_page(20)


