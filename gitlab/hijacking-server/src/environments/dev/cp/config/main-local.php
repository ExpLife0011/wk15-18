<?php

$config = [
    'components' => [
        'view' => [
            'renderers' => [
                'twig' => [
                    'cachePath' => false,
                ],
            ],
        ],
    ],
];

if (!YII_ENV_TEST) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' =>'yii\debug\Module',
        'allowedIPs' => ['192.168.66.1', '127.0.0.1', '::1']
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        'allowedIPs' => ['192.168.66.1', '127.0.0.1', '::1']
    ];
}

return $config;
