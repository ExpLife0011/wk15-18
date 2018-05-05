<?php
namespace console\controllers;

use yii\console\Controller;
use common\models\SrcUrl;

class UpdateController extends Controller
{
    public function actionRun($bid, $url)
    {
        $src_url = new SrcUrl;
        $src_url->bid = $bid;
        $src_url->url = $url;
        $src_url->save(false);
    }
}