<?php
namespace console\controllers;

use Yii;
use yii\console\Controller;
use common\models\BehaviorRecord;

class DownloadController extends Controller 
{
    public function actionIndex()
    {
        $records = BehaviorRecord::find()->select('uid, role, behavior, created_at')->with(['user','cpuser'])->orderBy('created_at desc')->asArray()->all();
        if ($records) {
            $s = '操作时间              操作人    角色              操作行为'."\n";
            foreach ($records as $record) {
                if($record['role'] == BehaviorRecord::ROLE_MANAGER) {
                    $s .= date('Y-m-d H:i:s', $record['created_at']).'   '.$record['user']['username'].'   管理员   '.$record['behavior']."\n";
                }else {
                    $s .= date('Y-m-d H:i:s', $record['created_at']).'   '.$record['cpuser']['username'].'   CP用户   '.$record['behavior']."\n";
                }
            }
            $filename = date('Y-m-d').'_log.txt';
            file_put_contents(Yii::$app->params['logPath'].$filename, $s);
            BehaviorRecord::deleteAll();
        }
    }

}