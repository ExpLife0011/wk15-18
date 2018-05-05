#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
from models import ContentsDefinite
from doc_classify.machine import Classify

def main(pth):
    mc = Classify(500, 0.99, 0.2, 0.05)
    contents = ContentsDefinite(pth)
    mc.train(contents)
    mc.save(pth)
    print('up date')

if __name__ == "__main__":
    main(sys.argv[1])
