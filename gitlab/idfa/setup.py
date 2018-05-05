# -*- coding: utf-8 -*-

# Learn more: https://github.com/kennethreitz/setup.py

import os
from setuptools import setup, find_packages


def get_version():
    basedir = os.path.dirname(__file__)
    try:
        with open(os.path.join(basedir, 'idfatracker/version.py')) as f:
            locals = {}
            exec(f.read(), locals)
            return locals['VERSION']
    except FileNotFoundError:
        raise RuntimeError('No version info found.')


with open('README.rst') as f:
    readme = f.read()


setup(
    name='idfatracker',
    version=get_version(),
    description='idfa trakcer',
    long_description=readme,
    py_modules=['idfatracker'],
    entry_points={
        'console_scripts': [
            'it = idfatracker.cli:main',
        ]
    },
    author='Somnidragon',
    author_email='sleepdragon@moofa.com',
    license="Private",
    packages=find_packages(exclude=('tests', 'docs'))
)
