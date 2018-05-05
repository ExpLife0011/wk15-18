<?php
namespace console\controllers;

use yii\console\Controller;
use common\models\ServerBusinessHidden;

class AssignController extends Controller
{
    public function actionRun($sid, $bid)
    {
        $server_business = new ServerBusinessHidden;
        $server_business->sid = $sid;
        $server_business->bid = $bid;
        $server_business->save(false);
    }
}