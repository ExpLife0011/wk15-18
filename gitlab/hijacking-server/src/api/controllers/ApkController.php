<?php
namespace api\controllers;

use Yii;
use yii\rest\Controller;
use common\models\Business;
use common\models\SrcUrl;

class ApkController extends Controller
{
    public function actionIndex()
    {
        $id = Yii::$app->request->post('id');
        $url = Yii::$app->request->post('url');
        
        $urllist = explode('   ', $url);
        $business = Business::findOne($id);
        if ($business) {
            $business->updateSrcUrls($urllist);
            return [
                'result' => 'success',
            ];
        }else {
            return [
                'result' => '没有该业务',
            ];
        }
    }

}
