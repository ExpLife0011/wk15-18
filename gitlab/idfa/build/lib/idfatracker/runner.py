# -*- coding: utf-8 -*-

import multiprocessing
from multiprocessing import Process


def work(id, loader):
    from .new_worker import Worker
    print("create worker: ", id)
    worker = Worker(id, loader)
    worker.run()

def gevent_workers(ids, maxN):
    import gevent
    from gevent import monkey
    monkey.patch_all()
    from .loader import LogLoader
    loader = LogLoader(maxN=maxN)
    glets = []
    for id in ids:
        glets.append(gevent.spawn(work, id, loader))
    gevent.joinall(glets)

def run(concurrence):
    num_procs = multiprocessing.cpu_count()
    ps = []
    x = concurrence // num_procs
    y = concurrence % num_procs
    l = 0
    ids = list(range(0, concurrence))
    for i in range(0, num_procs):
        t = x + 1 if i < y else x
        if t > 0:
            p = Process(target=gevent_workers, args=(ids[l:l+t], concurrence))
            ps.append(p)
            p.start()
        l = l + t
    for p in ps:
        p.join()
