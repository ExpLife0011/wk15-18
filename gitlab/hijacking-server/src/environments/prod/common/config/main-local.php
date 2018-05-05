<?php
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=127.0.0.1;dbname=hijacking_gy',
            'username' => 'root',
            'password' => 'password',
            'charset' => 'utf8',
        ],
        'mongodb' => [
            'dsn' => 'mongodb://127.0.0.1:27017/hijacking_log_gy',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',  
            'useFileTransport' =>false,
            'transport' => [  
               'class' => 'Swift_SmtpTransport',  
               'host' => 'smtp.139.com',  
               'username' => '18234827782@139.com',  
               'password' => '739770232',  
               'port' => '25',  
               'encryption' => 'tls',           
            ],   
            'messageConfig'=>[  
                'charset'=>'UTF-8',  
                'from'=>['18234827782@139.com'=>'admin']  
            ],  
        ],
    ],
];
