#!/usr/bin/env bash
#link mysql config
sudo rm /etc/my.cnf
sudo ln -s /vagrant/srv/dev/my.cnf /etc/my.cnf

#link php config
sudo rm /etc/php.ini
sudo ln -s /vagrant/srv/dev/php.ini /etc/php.ini
sudo rm /usr/local/php/etc/php-fpm.conf
sudo ln -s /vagrant/srv/dev/php-fpm.conf /usr/local/php/etc/php-fpm.conf

# link nginx config
sudo rm /usr/local/nginx/conf/nginx.conf
sudo ln -s /vagrant/srv/dev/nginx.conf /usr/local/nginx/conf/nginx.conf

#start servers
sudo /etc/init.d/mysqld start
sudo /etc/init.d/php-fpm start
sudo /usr/local/nginx/sbin/nginx
sudo service mongod restart


# set mysql privileges
mysql -u root -e "GRANT ALL PRIVILEGES ON *.* TO root@'192.168.88.%' IDENTIFIED BY ''; "

#create databases
mysql -u root -e "CREATE DATABASE IF NOT EXISTS hijacking"

