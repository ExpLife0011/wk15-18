<?php
return [
        'managers' => [
            'name' => '服务器',
            'route' => 'cpuser/server',
            'icon'=>'user',
            'style'=>'none',
            'subs' => [
                [
                    'name' => '服务器',
                    'route' => 'cpuser/server',
                ],
            ],
        ],
        'business' => [
            'name' => '业务',
            'route' => 'business/index',
            'icon' => 'tasks',
            'style' => '',
            'subs' => [
                [
                    'name' => '新建业务规则',
                    'route' => 'business/create',
                ],
                [
                    'name' => '新建批量业务规则',
                    'route' => 'business/batch',
                ],
                [
                    'name' => '业务规则列表',
                    'route' => 'business/index',
                ],
            ],
        ],
        'statistics' => [
            'name' => '统计',
            'route' => 'stat/index',
            'icon'=>'cloud',
            'style'=>'',
            'subs' => [
                [
                    'name' => '业务统计',
                    'route' => 'stat/index',
                ],
            ],
        ],
];