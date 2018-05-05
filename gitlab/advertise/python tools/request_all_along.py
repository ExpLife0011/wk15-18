#!/usr/bin/env python3
#_*_coding:utf-8_*_

'''
	python3 request_on_along.py -f FILE -t THREAD_AMOUNT -w WAIT_SECONDS

'''
from fake_useragent import UserAgent
import urllib.request
import time,sys
from optparse import OptionParser
import threading
import queue



def parseParams():
    parser = OptionParser()
    parser.add_option("-f","--file",help="the input file with url list")
    parser.add_option("-t","--threads",default=1,type="int",help="how many threads will you run")
    parser.add_option("-w","--holdon",default=3,type="int",help="waiting time between two requests in a single thread")
    return parser.parse_args()



class RequestAllAlong(object):
    """docstring for RequestWork"""
    def __init__(self, options):
        self.tn = options.threads
        self.wait=options.holdon
        self.urlQueue=self.url_queue(options.file)
        #self.lock=threading.Lock()
        self.userAgent = UserAgent()

    def launchWorker(self):
        threads=[]
        for i in range(self.tn):
            worker = RequestWorker(self.urlQueue,self.wait,self.userAgent)
            threads.append(worker)
            worker.start()
        for th in threads:
            th.join()


    def url_queue(self,filename):
        url_queue = queue.Queue(0)
        urls = self.openFile(filename)
        for url in urls:
            url_queue.put(url.strip())
        return url_queue

    def openFile(self,filename):
        f = None
        try:
            f=open(filename,"r")
            dataStr = f.readlines()
            return dataStr
        except Exception as e:
            print("failed to read file!") 
            sys.exit()   
        finally:
            if f != None:
                f.close()


class RequestWorker(threading.Thread):
    def __init__(self, queue,wait,ua):
        threading.Thread.__init__(self)
        self.queue = queue
        self.wait = wait
        self.userAgent = ua

    def run(self):
        while True:
            if self.queue.empty():
                break
            else:
                item = self.queue.get()                
                self.pullRequset(item)
                self.queue.task_done()
            time.sleep(self.wait)

    def pullRequset(self,url):
        ua = self.userAgent.random
        try:
            req = urllib.request.Request(url)
            req.add_header("User-Agent",ua)
            response = urllib.request.urlopen(req)
            print('%s request "%s" over!'%(threading.currentThread(),url))
        except Exception as e:
            print(str(e))
            print("failed to request:%s"%(url))


def main():
    options, args = parseParams()
    ral = RequestAllAlong(options)
    ral.launchWorker()


if __name__=='__main__':
    main()

        





