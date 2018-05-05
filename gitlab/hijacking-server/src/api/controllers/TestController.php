<?php
namespace api\controllers;

class TestController extends \yii\rest\Controller
{
    public function actionPing($sid)
    {
        return [
            'work'=> 0,
            'blacklist' => 1401475861,
            'tasklist' => 1401475861,
        ];
    }

    public function actionBlacklist($sid)
    {
        return [
            'ips' => [],
            'update' => 1401475861,
        ];
    }

    public function actionTasklist($sid)
    {
        return [
            'update' => 1401475861,
            'tasks' => [
                [
                    'src_url_type' => 1,
                    'src_url' => 'http://www.3600.com/*',
                    'plans' => [
                        [
                            'pid' => 100000001,
                            'rate_limit' => 180,
                            'pro' => 100,
                            'end' => strtotime('2015-01-01'),
                            'target_list' => [
                                [
                                    'target_type' => '302',
                                    'url' => '203.195.196.55/cd360.html',
                                    'cookie' => '',
                                    'weight' => 10,
                                    'tid' => 1000001,
                                ]
                            ]
                        ]
                    ],
                ],
                [
                    'src_url_type' => 1,
                    'src_url' => 'http://www.3600.com/?src=lm&ls=*',
                    'plans' => [
                        [
                            'pid' => 100000001,
                            'rate_limit' => 180,
                            'pro' => 100,
                            'end' => strtotime('2015-01-01'),
                            'target_list' => [
                                [
                                    'target_type' => '302',
                                    'url' => '203.195.196.55/cd360.html',
                                    'cookie' => '',
                                    'weight' => 10,
                                    'tid' => 1000001,
                                ]
                            ]
                        ]
                    ],
                ],
            ],
        ];
    }

    public function actionLog($sid)
    {
        echo "success";
        exit(0);
    }

    
}
