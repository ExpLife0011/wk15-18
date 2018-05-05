FROM debian:jessie
MAINTAINER lilei739770232@gmail.com

RUN printf 'deb http://mirrors.163.com/debian/ jessie main non-free contrib\ndeb http://mirrors.163.com/debian/ jessie-updates main non-free contrib\ndeb http://mirrors.163.com/debian/ jessie-backports main non-free contrib\ndeb-src http://mirrors.163.com/debian/ jessie main non-free contrib\ndeb-src http://mirrors.163.com/debian/ jessie-updates main non-free contrib\ndeb-src http://mirrors.163.com/debian/ jessie-backports main non-free contrib\ndeb http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib\ndeb-src http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib\n' > /etc/apt/sources.list

RUN set -xe \
    && apt-get purge python*

RUN set -xe \
    && apt-get update \
    && apt-get install -y --no-install-recommends python3 python3-pip 

RUN set -xe \
    && pip3 install --upgrade pip \
    && pip3 install psycopg2~=2.6 \
    && pip3 install gevent \
    && pip3 install rq \
    && pip3 install redis \
    && pip3 install click \
    && pip3 install psycopg2-binary \
    && pip3 install requests \
    && pip3 install rq_scheduler

ENV LANG C.UTF-8
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
 
COPY ./idfa/ /idfa/
RUN set -xe \
    && cd /idfa/src/idfatracker \
    && python3 setup.py install

#ENTRYPOINT "it initdb --db='host=db port=5432 user=postgres password=password dbname=idfa' --url='redis://rd:6379/0'"

#COPY entrypoint.sh /sbin/entrypoint.sh
#RUN chmod 755 /sbin/entrypoint.sh
#ENTRYPOINT "/sbin/entrypoint.sh"