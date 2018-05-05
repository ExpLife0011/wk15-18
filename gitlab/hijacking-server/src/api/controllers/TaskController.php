<?php
namespace api\controllers;

use common\models\Server;
use Yii;

class TaskController extends BaseController
{
    public function actionIndex($sid)
    {
        $server = $this->_server;

        return [
            'update'=> $server->last_tasklist,
            'tasks'=> $server->getTaskList(),
        ];
    }
}
