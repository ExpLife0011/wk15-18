<?php
namespace backend\models;

use yii\base\Model;
use common\models\Server;

class ServerForm extends Server
{

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => '业务机名称',
            'ip' => 'IP地址',
            'active' => '业务程序状态',
            'program_time' => '上次启动/停止时间',
        ];
    }

    public function showTime()
    {
        return function($data) {
            if ($data->program_time == 0) {
                return '';
            }else {
                return date('Y-m-d H:i:s', $data->program_time);
            }
        };
    }
}