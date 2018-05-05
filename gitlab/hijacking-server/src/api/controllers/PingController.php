<?php
namespace api\controllers;

use common\models\Ping;
use Yii;

class PingController extends BaseController
{
    public function actionIndex($sid)
    {
        $request = Yii::$app->request;
        $p = new Ping;
        $p->sid = $this->_server->id;
        $p->load = $request->post('load') ?: 0;
        $p->cpu = $request->post('cpu') ?: 0;
        $p->mem = $request->post('mem') ?: 0;
        $p->net_in = $request->post('net_input') ?: 0;
        $p->net_out = $request->post('net_output') ?: 0;
        $p->save(false);

        //response
        return [
            'work' => intval(!$this->_server->status),
            'blacklist' => intval($this->_server->last_blacklist),
            'tasklist' => intval($this->_server->last_tasklist),
        ];
    }
}
