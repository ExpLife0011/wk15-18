<?php
namespace api\controllers;

use common\models\Log;
use Yii;

class LogController extends BaseController
{
    public function actionIndex($sid)
    {
        $seq_num = Yii::$app->request->post('seq_num');
        if (true || !Log::find()->where(['seq_num' => $seq_num, 'sid' => $sid])->exists()) {
            $logs = Yii::$app->request->post('logs');
            $rows = [];
            foreach ($logs as $log) {
                $rows[] = [
                    'sid' => $sid,
                    'seq_num' => $seq_num,
                    'ip' => long2ip($this->parse_unsigned_int($log['ip'])),
                    'timestamp' => $log['timestamp'],
                    /* 'src_url' => $log['src_url'], */
                    'src_url' => '',
                    'pid' => $log['pid'],
                    'tid' => $log['tid'],
                    'target_url' => $log['target_url'],
                ];
            }
            $command = Log::getDb()->createCommand()
                ->batchInsert(Log::tableName(),
                ['sid', 'seq_num', 'ip', 'timestamp', 'src_url', 'pid', 'tid','target_url'],
                $rows)->execute();
            /* foreach ($logs as $key => &$l) { */
                /* $l['sid'] = intval($sid); */
                /* $l['seq_num'] = $seq_num; */
            /* } */
            /* Log::getCollection()->batchInsert($logs); */
        }
        echo "success";exit(0);
        
    }


    protected function parse_unsigned_int($string) {
        $x = (float)$string;
        if ($x > (float)2147483647)
            $x -= (float)"4294967296";
        return (int)$x;
    }

    public function actionNew($sid) 
    {
        $post = Yii::$app->request->post();
        $logs = explode("\n", trim($post)); 
        $rows = [];
        foreach ($logs as $log) {
            $log = explode(',', $log, 7);
            $rows[] = [
                'sid' => $sid,
                'timestamp' => $log[0],
                'ip' => long2ip($this->parse_unsigned_int($log[1])),
                'pid' => $log[2],
                'tid' => $log[3],
                'src_url' => $log[4], 
                'refer' => $log[5],
                'ua' => $log[6],
            ];
        }
        $command = Log::getDb()->createCommand()
            ->batchInsert(Log::tableName(),
            ['sid', 'timestamp', 'ip', 'pid', 'tid', 'src_url', 'refer', 'ua'],
            $rows)->execute();
        echo "success";exit(0);
    }
    
}
