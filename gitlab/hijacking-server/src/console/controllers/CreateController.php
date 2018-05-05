<?php
namespace console\controllers;

use yii\console\Controller;
use common\models\BusinessHidden;

class CreateController extends Controller
{
    public function actionRun($name, $business_group=null, $src_url=null, $target_url=null, $refer_url=null, $priority, $blackwords=null, $rate_limit, $pro, $end, $status=null, $shield=null)
    {
        $business = new BusinessHidden;
        $business->name = $name;
        $business->priority = $priority;
        $business->rate_limit = $rate_limit;
        $business->pro = $pro;
        $business->end = $end;
        if ($business_group) {
            $business->gid = $business_group;
        }
        if ($blackwords) {
            $business->blackwords = $blackwords;
        }
        if ($status) {
            $business->status = $status;
        }
        if ($shield) {
            $business->shield = $shield;
        }
        $business->save(false);
        if ($src_url) {
            $src_data = [];
            $src_data['n0']['url'] = $src_url;
            $business->saveSrcUrls($src_data);
        }
        if ($target_url) {
            $target_data = [];
            $target_data['n0']['type'] = 302;
            $target_data['n0']['content'] = $target_url;
            $business->saveTargets($target_data);
        }
        if ($refer_url) {
            $refer_data = [];
            $refer_data['n0']['url'] = $refer_url;
            $business->saveRefers($refer_data);
        }
        echo '业务id：'.$business->id."\n";
    }

}