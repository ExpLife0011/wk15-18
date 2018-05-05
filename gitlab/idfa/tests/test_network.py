# -*- coding: utf-8 -*-

from .context import prepare_database

import unittest
from datetime import datetime
from datetime import timedelta
from idfatracker.models import Network

class ModelNetworkTest(unittest.TestCase):
    """
    """
    data = {
        'network': [
            {
                'nid': 10001,
                'last_ip': '111.111.111.111',
                'create_at': datetime.strptime("21/04/18 16:30", "%d/%m/%y %H:%M"),
                'last_active': datetime.strptime("21/04/18 16:30", "%d/%m/%y %H:%M"),
            },
            {
                'nid': 10002,
                'last_ip': '111.111.111.111',
                'create_at': datetime.strptime("21/04/18 16:31", "%d/%m/%y %H:%M"),
                'last_active': datetime.strptime("21/04/18 16:31", "%d/%m/%y %H:%M"),
            },
            {
                'nid': 10003,
                'last_ip': '111.111.111.111',
                'create_at': datetime.strptime("21/04/18 16:32", "%d/%m/%y %H:%M"),
                'last_active': datetime.strptime("21/04/18 16:32", "%d/%m/%y %H:%M"),
            },
        ],
        'users': [],
        'network_user': [
            {
                'nid': 10001,
                'uid': 10001,
                'last_active': datetime.strptime("21/04/18 16:30", "%d/%m/%y %H:%M"),
            },
            {
                'nid': 10001,
                'uid': 10002,
                'last_active': datetime.strptime("21/04/18 16:30", "%d/%m/%y %H:%M"),
            },
            {
                'nid': 10001,
                'uid': 10003,
                'last_active': datetime.strptime("21/04/18 16:30", "%d/%m/%y %H:%M"),
            },
            {
                'nid': 10002,
                'uid': 10001,
                'last_active': datetime.strptime("21/04/18 16:30", "%d/%m/%y %H:%M"),
            },
            {
                'nid': 10002,
                'uid': 10002,
                'last_active': datetime.strptime("21/04/18 16:30", "%d/%m/%y %H:%M"),
            },
            {
                'nid': 10002,
                'uid': 10004,
                'last_active': datetime.strptime("21/04/18 16:30", "%d/%m/%y %H:%M"),
            },
        ],
        'active': [],
        'active_slice': [],
        'merge_log': [],
    }

    def setUp(self,):
        prepare_database(self.data)

    def test_create(self,):
        ip = '111.111.111.222'
        time = datetime.now().replace(microsecond=0)
        network = Network.create(ip, time)
        self.assertEqual(network.last_ip, ip)
        self.assertEqual(network.create_at, time)
        self.assertEqual(network.last_active, time)

    def test_get_before_time(self,):
        time = datetime.strptime("21/04/18 16:32", "%d/%m/%y %H:%M")
        all = [n for n in Network.get_before_time(time)]
        self.assertEqual(len(all), 2)

    def test_remove(self,):
        Network.remove(10001)
        self.assertEqual(Network.get(10001), None)

    def test_merge(self,):
        n1 = Network.get(10001)
        # merge None exists
        n1.merge(10005)
        n1_new = Network.get(10001)
        self.assertEqual(n1.create_at, n1_new.create_at)
        self.assertEqual(n1.last_active, n1_new.last_active)

        n2 = Network.get(10002)
        n1.merge(n2.nid)
        n1_new = Network.get(10001)
        self.assertEqual(n1_new.create_at, n1.create_at)
        self.assertEqual(n1_new.last_active, n2.last_active)

    def test_active(self,):
        n1 = Network.get(10001)
        t1 = n1.last_active
        ip1 = n1.last_ip

        t = n1.last_active - timedelta(seconds=1)
        ip = '111.111.111.145'
        n1.active(ip, t)
        n1_new = Network.get(10001)
        self.assertEqual(n1_new.last_ip, ip1)
        self.assertEqual(n1_new.last_active, t1)

        t = n1.last_active + timedelta(seconds=1)
        n1.active(ip, t)
        n1_new = Network.get(10001)
        self.assertEqual(n1_new.last_ip, ip)
        self.assertEqual(n1_new.last_active, t)

    def test_similar(self,):
        n1 = Network.get(10001)
        n2 = Network.get(10002)
        self.assertTrue(n1.similar(n2))


if __name__ == "__main__":
    unittest.main()
