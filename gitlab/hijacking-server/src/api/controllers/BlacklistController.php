<?php
namespace api\controllers;

use common\models\Blacklist;

class BlacklistController extends BaseController
{
    public function actionIndex($sid)
    {
        $blacklist = $this->_server->allBlacklist;
        $ips = [];
        foreach ($blacklist as $b) {
            if ($this->checkIp($b->ip_s) && $this->checkIp($b->ip_e)) {
                $ips[] = [ip2long($b->ip_s), ip2long($b->ip_e)];
            }
        }
        return [
            'update' => $this->_server->last_blacklist,
            'ips' => $ips,
        ];
    }

    public function checkIp($str)
    {
        if(preg_match("/[\d]{2,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}/", $str))
          return true;
        return false;
    }
}
