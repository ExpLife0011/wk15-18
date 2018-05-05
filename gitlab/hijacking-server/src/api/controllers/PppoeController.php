<?php
namespace api\controllers;

use Yii;
use common\models\Pppoe;
use common\models\PppoeBlacklist;

class PppoeController extends BaseController
{
    public function actionIndex($sid)
    {
        $pppoelist = $this->_server->pppoelist;
        $list = [];
        foreach ($pppoelist as $p) {
            $list[] = $p->account;
        }
        return $list;
    }

    public function actionUpdate($sid)
    {
        $update_ips = Yii::$app->request->post('ips');

        $pppoe_blacklist = $this->_server->pppoeblacklist;
        if ($pppoe_blacklist) {
            PppoeBlacklist::deleteAll('sid='.$sid);
        }
        foreach ($update_ips as $ip) {
            $model = PppoeBlacklist::getPppoeblack($sid);
            $model->ip_s = long2ip($this->parse_unsigned_int($ip));
            $model->ip_e = long2ip($this->parse_unsigned_int($ip));
            $model->save();
        }
        echo "success";exit(0);
    }

    protected function parse_unsigned_int($string) {
        $x = (float)$string;
        if ($x > (float)2147483647)
            $x -= (float)"4294967296";
        return (int)$x;
    }
}
