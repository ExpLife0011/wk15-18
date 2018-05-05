#/usr/bin/python2
# -*- coding: utf-8 -*-

from gensim import corpora
from scipy.sparse import csr_matrix
import numpy
from sklearn import svm
import os
import re
import jieba
import pickle
import sys
reload(sys)
sys.setdefaultencoding("utf-8")

def stop_words_filter():
    stop_words = set(open(os.path.join(os.path.dirname(os.path.realpath(__file__)),\
                    'stop_words.txt'), 'rb').read().decode('utf8').split('\n'))
    def fn(words):
        words_list = list(words)
        for i in range(words_list.__len__())[::-1]:
            if words_list[i] in stop_words:
                words_list.pop(i)
            elif words_list[i].isdigit():
                words_list.pop(i)
            elif words_list[i].strip() == u'':
                words_list.pop(i)
        return words_list
    return fn

def pre_filter(text):
    text = re.sub('\u3000', '', text)
    text = re.sub('\ufeff', '', text)
    return text


class Classify(object):
    def __init__(self, feature_num=10, no_above=0.99, nu=0.5, gamma=0.1):
        self.feature_num = feature_num
        self.no_above = no_above
        self.nu = nu
        self.gamma = gamma
        self.stop_words_filter = stop_words_filter()
        self.dict = None
        self.svm = None

    def add_jieba_dict(self, dict_file):
        jieba.load_userdict(dict_file)

    def doc2words(self, str_doc):
        sent_list = str_doc.split('\n')
        sent_list = map(pre_filter, sent_list)
        word_2dlist = [self.stop_words_filter(jieba.cut(part, cut_all=False)) for part in sent_list]
        return sum(word_2dlist, [])

    def gen_dict(self, word_lists):
        self.dict = corpora.Dictionary()
        self.dict.add_documents(word_lists)
        self.dict.filter_extremes(no_above=self.no_above, keep_n=self.feature_num)
        self.dict.compactify()

    def use_dict(self, words):
        self.dict = corpora.Dictionary()
        self.dict.add_documents([words,])
        self.dict.compactify()

    def doc2vector(self, str_doc):
        words = self.doc2words(str_doc)
        return self.wl2vector(words)

    def wl2vector(self, words):
        bow = self.dict.doc2bow(words)
        v = [0] * self.feature_num
        for tokenid,_ in bow:
            v[tokenid] = 1
        return v

    def gen_matrix(self, word_lists):
        rows = []
        cols = []
        data = []
        line = 0
        for wl in word_lists:
            s = len(wl)
            bow = self.dict.doc2bow(wl)
            for tokenid, token_c in bow:
                rows.append(line)
                cols.append(tokenid)
                #data.append(1)
                data.append(token_c * 100.0 / s)
            line += 1
        return csr_matrix((numpy.array(data), (numpy.array(rows), numpy.array(cols))),\
                          shape=(len(word_lists), self.feature_num))

    def train(self, contents):
        wls = map(self.doc2words, contents)
        return self.train_by_wls(wls)

    def train_by_wls(self, wls):
        if self.dict == None:
            self.gen_dict(wls)
        matrix = self.gen_matrix(wls)
        self.svm = svm.OneClassSVM(kernel='rbf', nu= self.nu, gamma=self.gamma)
        self.svm.fit(matrix)

    def predict(self, contents):
        wls = map(self.doc2words, contents)
        return self.predict_by_wls(wls)

    def predict_by_wls(self, wls):
        matrix = self.gen_matrix(wls)
        return self.svm.predict(matrix)

    def save(self, path):
        fn_swf = self.stop_words_filter
        self.stop_words_filter = None
        # save dictionary
        self.dict.save(os.path.join(path, 'dict'))
        self.dict.save_as_text(os.path.join(path, 'dict.txt'))
        # save svm
        svm_file = open(os.path.join(path, 'svm'), 'wb')
        pickle.dump(self.svm, svm_file)
        svm_file.close()
        # save self
        cfy_file = open(os.path.join(path, 'cfy'), 'wb')
        pickle.dump(self, cfy_file)
        cfy_file.close()
        self.stop_words_filter = fn_swf

def load_cfy(path):
    cfy_file = open(os.path.join(path, 'cfy'), 'rb')
    cfy = pickle.load(cfy_file)
    cfy_file.close()
    cfy.stop_words_filter = stop_words_filter()
    # load dictionary
    cfy.dict = corpora.Dictionary.load(os.path.join(path, 'dict'))
    # load svm
    svm_file = open(os.path.join(path, 'svm'), 'rb')
    cfy.svm = pickle.load(svm_file)
    svm_file.close()
    return cfy

if __name__ == "__main__":
    pass
