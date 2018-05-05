create database if not exists `apk` default charset=utf8;

create table if not exists `url`(
       id int(11) NOT NULL AUTO_INCREMENT,
       url varchar(255) NOT NULL,
       package_name varchar(40) NOT NULL DEFAULT '',
       app_name varchar(40) NOT NULL DEFAULT '',
       version varchar(40) NOT NULL DEFAULT '',
       addtime datetime NOT NULL,
       PRIMARY KEY (`id`),
       UNIQUE KEY (`url`)
       )ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table if not exists `down_log`(
       id int(11) NOT NULL AUTO_INCREMENT,
	   url_id int(11) NOT NULL ,
	   down_time datetime NOT NULL,
       success tinyint(1) NOT NULL DEFAULT 1,
       PRIMARY KEY (`id`),
       KEY (`url_id`)
	   )ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table if not exists `unpack_log`(
       id int(11) NOT NULL AUTO_INCREMENT,
       url_id int(11) NOT NULL,
       unpack_time datetime,
       success tinyint(1) DEFAULT 1,
       method tinyint(1) DEFAULT 1,
       PRIMARY KEY (`id`),
       KEY (`url_id`)
       )ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table if not exists `log_urls`(
       id int(11) NOT NULL AUTO_INCREMENT,
       url_id int(11) NOT NULL , 
       url_count int(8) NOT NULL DEFAULT 1,
       start_time datetime NOT NULL,
       end_time datetime NOT NULL,
       PRIMARY KEY (`id`),
       KEY (`url_id`)
       )ENGINE=InnoDB DEFAULT CHARSET=utf8;
