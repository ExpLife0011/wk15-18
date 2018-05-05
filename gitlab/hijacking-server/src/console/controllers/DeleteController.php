<?php
namespace console\controllers;

use yii\console\Controller;
use common\models\SrcUrl;

class DeleteController extends Controller
{
    public function actionRun($bid, $url)
    {
        $src_url = SrcUrl::find()->where(['bid'=>$bid,'url'=>$url])->one();
        if ($src_url) {
            $src_url->delete();
        }else {
            echo "not found corresponding ".$url;
        }
    }
}