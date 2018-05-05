# -*- coding: utf-8 -*-

from .context import prepare_database

import unittest
from idfatracker.models import ActiveSlice

class ModelActiveSliceTest(unittest.TestCase):
    """
    """
    data = {
        'network': [],
        'users': [],
        'network_user': [],
        'active': [],
        'active_slice': [],
        'merge_log': [],
    }

    def setUp(self,):
        prepare_database(self.data)


if __name__ == "__main__":
    unittest.main()
