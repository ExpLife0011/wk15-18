<?php
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=192.168.88.200;dbname=hijacking',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
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
