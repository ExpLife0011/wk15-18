<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-backend',
    'language' => 'en_US',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap' => ['log'],
    'modules' => [],
    'aliases' => [
        '@view' => '@backend/views'
    ],
    'components' => [
        'request' => [
            'cookieValidationKey' => 'WUO43HwVrvfLn2ZdrxSW1LGchu01-Bn5',
        ],
        'view' => [
            'defaultExtension' => 'twig',
            'renderers' => [
                'twig' => [
                    'class' => 'yii\twig\ViewRenderer',
                    // set cachePath to false in order to disable template caching
                    'cachePath' => '@runtime/Twig/cache',
                    //'options' => [], /*  Array of twig options */
                    // ... see ViewRenderer for more options
                    'extensions' => [
                        'common\extensions\HTwigExtension',
                    ],
                    'globals' => [
                        'appasset' => 'backend\assets\AppAsset',
                        'ActiveForm' => 'kartik\widgets\ActiveForm',
                        'JSON' => 'yii\helpers\Json',
                        'Url' => 'yii\helpers\Url',
                        'HTML' => 'yii\helpers\Html',
                        'ArrayHelper' => 'yii\helpers\ArrayHelper',
                    ]
                ],
            ],
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
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
