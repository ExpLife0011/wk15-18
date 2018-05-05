#!/usr/bin/env python
## -*- coding: utf-8 -*-

from db_to_doc import load_negative_contents, load_positive_contents
from machine import Classify, load_cfy
import os

def test_doc2words():
    contents = load_positive_contents()
    cfy = Classify()
    for i in range(1):
        doc = contents.next()
        print(doc)
        for word in cfy.doc2words(doc):
            print(word),

def test_gen_dict():
    contents = load_positive_contents()
    cfy = Classify()
    word_lists = map(cfy.doc2words, contents)
    cfy.gen_dict(word_lists)
    for tokenid, docfreq in cfy.dict.dfs.items():
        word = cfy.dict.get(tokenid)
        print tokenid, docfreq, word

def test_doc2vector():
    contents = load_positive_contents()
    cfy = Classify()
    word_lists = map(cfy.doc2words, contents)
    cfy.gen_dict(word_lists)
    contents = load_positive_contents()
    matrix = []
    for i in range(10):
        doc = contents.next()
        matrix.append(cfy.doc2vector(doc))
    print(matrix)

def test_gen_matrix():
    contents = load_positive_contents()
    cfy = Classify()
    word_lists = map(cfy.doc2words, contents)
    cfy.gen_dict(word_lists)

    contents = load_positive_contents()
    wls = []
    for i in range(20):
        wls.append(cfy.doc2words(contents.next()))
    matrix = cfy.gen_matrix(wls)
    print matrix.toarray()

def test_predict():
    contents = load_positive_contents()
    cfy = Classify(feature_num=10)
    cfy.train(contents)

    contents = load_negative_contents()
    cs = [contents.next() for i in range(10)]
    r = cfy.predict(cs)
    print(r)

def test_save_load():
    contents = load_positive_contents()
    cfy = Classify(500, 0.99, 0.2, 0.05)
    cfy.train(contents)

    contents = load_negative_contents()
    cs = [contents.next() for i in range(10)]
    r = cfy.predict(cs)

    path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'save')
    cfy.save(path)

    cfy1 = load_cfy(path)
    r1 = cfy1.predict(cs)
    for i in range(10):
        if r[i] != r1[i]:
            print("save load error, got different svm")

def test_negative_contents():
    contents = load_positive_contents()
    cfy = Classify(500, 0.99, 0.2, 0.05)
    cfy.train(contents)

    contents = load_negative_contents()
    r = cfy.predict(contents)
    r = map(int, r)
    print(r.count(-1), r.count(1))

if __name__ =="__main__":
    test_save_load()
