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
    'controllerNamespace' => 'cp\controllers',
    'layout' => 'base',
    'bootstrap' => ['log'],
    'modules' => [],
    'aliases' => [
        '@view' => '@cp/views'
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
                    'options'=>[
                        'cache'=>false,
                    ],
                    // set cachePath to false in order to disable template caching
                    'cachePath' => '@runtime/Twig/cache',
                    //'options' => [], /*  Array of twig options */
                    // ... see ViewRenderer for more options
                    'extensions' => [
                        'common\extensions\HTwigExtension',
                    ],
                    'globals' => [
                        'appasset' => 'cp\assets\AppAsset',
                        'ActiveForm' => 'kartik\widgets\ActiveForm',
                        // 'ActiveForm' => '\yii\bootstrap\ActiveForm',
                        'JSON' => 'yii\helpers\Json',
                        'Url' => 'yii\helpers\Url',
                        'HTML' => 'yii\helpers\Html',
                        'ArrayHelper' => 'yii\helpers\ArrayHelper',
                    ]
                ],
            ],
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                '<module:\w+>/<controller:\w+>/<action:\w+>' => '<module>/<controller>/<action>',
            ]
        ],
        'user' => [
            'class' => 'cp\components\CpUser',
            'identityClass' => 'common\models\Cpuser',
            'enableAutoLogin' => true,
        ],
        'RoleMenu' => [
            'class' => 'cp\components\RoleMenu',
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
