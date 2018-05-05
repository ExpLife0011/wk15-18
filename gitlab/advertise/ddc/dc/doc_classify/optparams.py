#!/usr/bin/env python2
## -*- coding: utf-8 -*-

from machine import Classify
from db_to_doc import load_positive_contents, load_negative_contents
from itertools import product
from multiprocessing import Pool
from functools import partial
import sys,os

def _pickle_method(method):
	func_name = method.im_func.__name__
	obj = method.im_self
	cls = method.im_class
	if func_name.startswith('__') and not func_name.endswith('__'): #deal with mangled names
		cls_name = cls.__name__.lstrip('_')
		func_name = '_' + cls_name + func_name
	return _unpickle_method, (func_name, obj, cls)

def _unpickle_method(func_name, obj, cls):
	for cls in cls.__mro__:
		try:
			func = cls.__dict__[func_name]
		except KeyError:
			pass
		else:
			break
	return func.__get__(obj, cls)
import copy_reg
import types
copy_reg.pickle(types.MethodType, _pickle_method, _unpickle_method)

def featurn_numbers():
    #return [50, 100, 200, 500, 1000]
    return [1000]

def no_aboves():
    #return [0.5, 0.6, 0.7, 0.8, 0.99]
    return [0.99,]

def nus():
    return [n * 1.0 / 10 for n in range(1,6)]

def gammas():
    g = [0.001, 0.005]
    for i in range(1, 10):
        g.append(i * 1.0 / 100)
        g.append(i * 1.0 / 10)
    return sorted(g)

class Optimize(object):
    def __init__(self,):
        self.train_data=None
        self.test_data=None
        self.test_y=None
        self.words=set(open(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'dict.txt'), 'rb').read().decode('utf8').strip().split("\n"))

    def load_data(self,):
        temp_cfy = Classify()
        temp_cfy.add_jieba_dict(self.words)
        p_wls = [temp_cfy.doc2words(c) for c in load_positive_contents()]
        n_wls = [temp_cfy.doc2words(c) for c in load_negative_contents()]
        n = len(p_wls) * 80 / 100
        self.train_data = p_wls[:]
        self.test_data = n_wls
        self.test_y = [-1] * len(n_wls)
        for wl in p_wls[n:]:
            self.test_data.append(wl)
            self.test_y.append(1)

    def test(self, params):
        fnum, na, nu, gs = params
        cfy = Classify(fnum, na, nu, gs)
        cfy.add_jieba_dict(self.words)
        cfy.use_dict(self.words)
        cfy.train_by_wls(self.train_data)
        y_pred = cfy.predict_by_wls(self.test_data)
        r = zip(map(int, y_pred), self.test_y)
        tp = r.count((1, 1))
        fp = r.count((1, -1))
        fn = r.count((-1, 1))
        if (tp == 0):
            precision = 0
            recall = 0
            f1 = 0
        else:
            precision = tp * 1.0 / (tp + fp)
            recall = tp * 1.0 / (tp + fn)
            f1 = 5 * precision * recall / (4 * precision + recall)
        print(fnum,na,nu,gs, precision, recall, f1)
        return (precision, recall, f1)

    def run1(self,):
        self.load_data()
        self.test((1000, 0.99, 0.4, 0.9))

    def run(self, pn=4):
        self.load_data()
        p = Pool(pn)
        params = list(product(featurn_numbers(), no_aboves(), nus(), gammas()))
        print("Starting")
        results = p.map(self.test, params)
        results = zip(params, results)
        print("Sorting...")
        results = sorted(results, reverse=True, key=lambda r: r[1][2])
        print("Write to csv file...")
        with open('results.csv', 'wb') as f:
            f.write("fn, na, nu, gs, precision, recall, f1\n")
            for r in results:
                f.write(",".join(map(str, list(r[0]) + list(r[1]) )))
                f.write("\n")

def main():
    if (len(sys.argv) < 2):
        pn = 4
    else:
        pn = int(sys.argv[1])
    opt = Optimize()
    opt.run(pn)

if __name__=="__main__":
    main()
