FROM debian:latest
MAINTAINER sleepdragon@moofa.com

RUN printf 'deb http://mirrors.163.com/debian/ jessie main non-free contrib\ndeb http://mirrors.163.com/debian/ jessie-updates main non-free contrib\ndeb http://mirrors.163.com/debian/ jessie-backports main non-free contrib\ndeb-src http://mirrors.163.com/debian/ jessie main non-free contrib\ndeb-src http://mirrors.163.com/debian/ jessie-updates main non-free contrib\ndeb-src http://mirrors.163.com/debian/ jessie-backports main non-free contrib\ndeb http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib\ndeb-src http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib\n' > /etc/apt/sources.list

RUN set -xe \
    && apt-get update 

RUN set -xe \
    && apt-get install -y --no-install-recommends python-dev python-pip

RUN set -xe \
    && pip install dpkt 
