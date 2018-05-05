<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-api',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'api\controllers',
    'components' => [
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
        ],
        'request' => [
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
                'application/gzipped' => 'api\components\GZipParser',
            ],
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                'POST /ping/<sid:\d+>' => 'ping/index',
                'GET /blacklist/<sid:\d+>' => 'blacklist/index',
                'GET /tasklist/<sid:\d+>' => 'task/index',
                'POST /log/<sid:\d+>' => 'log/index',
                'GET /server/<sid:\d+>' => 'server/index',
                'POST /apk' => 'apk/index',
                'POST /logg/<sid:\d+>' => 'log/new',
                'GET /pppoelist/<sid:\d+>' => 'pppoe/index',
                'POST /updateips/<sid:\d+>' => 'pppoe/update',
            ],
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
    ],
    'params' => $params,
];
