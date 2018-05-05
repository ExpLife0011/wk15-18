# -*- coding: utf-8 -*-
"""
idfatracker command line tool
"""

from functools import update_wrapper
import click

from idfatracker import models
from idfatracker.models import baseModel
from idfatracker import __version__ as version
from idfatracker import redis_conn

click.disable_unicode_literals_warning = True


shared_options = [
    click.option('--db',
                 envvar='IT_DATABASE_URL',
                 help="postgresql database connect string"),
    click.option('--url', '-u',
                 envvar='RQ_REDIS_URL',
                 help='URL describing Redis connection details.'),
]


def pass_cli_config(func):
    # add all the shared options to the command
    for option in shared_options:
        func = option(func)

    # pass the cli config object into the command
    def wrapper(*args, **kwargs):
        ctx = click.get_current_context()
        baseModel.set_db(kwargs['db'])
        redis_conn.REDIS_CONN_STR = kwargs['url']
        return ctx.invoke(func, *args[1:], **kwargs)

    return update_wrapper(wrapper, func)


@click.group()
@click.version_option(version)
def main():
    """
    IT command line tool.
    """
    pass


@main.command()
@pass_cli_config
def initdb(**options):
    ms = ["Network", "User", "Active", "ActiveSlice", "NetworkUser", "MergeLog"]
    for model in ms:
        m = getattr(models, model)
        m.create_table()


@main.command()
@pass_cli_config
def merge(**options):
    from rq import Worker
    import redis
    conn = redis.StrictRedis.from_url(options['url'])
    if conn:
        w = Worker("merge", connection=conn)
        w.work()



""" @main.command()
@click.argument('queues', nargs=-1)
@pass_cli_config
def worker(queues, **options):
    from idfatracker.worker import GeventWorker
    import redis

    conn = redis.StrictRedis.from_url(options['url'])
    if conn:
        w = GeventWorker(list(queues), connection=conn)
        w.work()
 """

@main.command()
@click.option('--concurrence', '-c',
    envvar="WORKER_NUM", default=32,
    help="concurrance worker num")
@pass_cli_config
def worker(**options):
    from idfatracker.runner import run
    run(options['concurrence'])
