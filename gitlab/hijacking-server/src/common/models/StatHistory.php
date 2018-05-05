<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

class StatHistory extends ActiveRecord
{

    public static function tableName()
    {
        return 'stat_history';
    }

    public static function getServers(){
        $rs = Server::find()->select("id,name")->asArray()->all();
        return $rs;
    }

    public static function statDayNums($day){
        $count = self::find()->count();
        if($count >0){
            // self::getDayServerBusinessCount($day);
            self::getCount($day);
        }else{
            self::getAllHistoryData();
        }
    }

    public static function getAllHistoryData(){
            $now = time();
            $startDate = Log::find()->select(['timestamp'])->orderBy(['timestamp'=>SORT_ASC])->limit(1)->one();
            if($startDate){
                $daytime = date("Y-m-d 00:00:00",$startDate['timestamp']);
                while ($now > strtotime($daytime)) {
                     self::getDayServerBusinessCount(date("Y-m-d", $now));
                    $now -= 86400;
                } 
                return true;      
            }
    }

    public static function getDayServerBusinessCount($day){
        $servers =  self::getServers();
        if($servers){
            foreach($servers as $k=>$v){
                $businesses = ServerBusiness::find()->where(['sid'=>$v['id']])->asArray()->all();
                if($businesses){
                    foreach ($businesses as $key => $value) {
                        $startTime = strtotime($day);
                        $endTime = strtotime($day." 23:59:59");
                        $query = Log::find();
                        $query->andWhere(['>=','timestamp',$startTime]);
                        $query->andWhere(['<','timestamp',$endTime]);
                        $query->andWhere(['sid' => intval($v['id'])]);
                        $query->andWhere(['pid' => intval($value['bid'])]);
                        $nums = $query->count();
                        self::saveHistory($v['id'],$value['bid'],$nums,$day);
                    }
                }
            }
        }
    }

    public static function getFirstLog($startTime)
    {
        $log_first = Log::find()->select('id')->where(['timestamp'=>$startTime])->limit(1)->orderBy('id asc')->one();
        if (!$log_first) {
            $startTime += 1;
            $log_first = self::getFirstLog($startTime);
        }
        return $log_first;
    }

    public static function getLastLog($endTime)
    {
        $log_last = Log::find()->select('id')->where(['timestamp'=>$endTime])->limit(1)->orderBy('id desc')->one();
        if (!$log_last) {
            $endTime -= 1;
            $log_last = self::getLastLog($endTime);
        }

        return $log_last;
    }

    public static function getCount($day)
    {
        $startTime = strtotime($day);
        $endTime = strtotime($day." 23:59:59");
        $rows = [];

        $log_first = self::getFirstLog($startTime);
        $log_last = self::getLastLog($endTime);
        for ($i = $log_first->id; $i <= $log_last->id; $i+=1000) { 
            Log::getDb()->open();
            $logs = Log::find()->select('id,sid,pid,timestamp')->where(['>=','id',$i])->limit(1000)->orderBy('id asc')->asArray()->all();
            Log::getDb()->close();
            if($logs) {
                foreach ($logs as $log) {
                    if($log['id'] < ($i + 1000) && $log['id'] <= $log_last->id) {
                        $key = $log['sid'].','.$log['pid'];
                        if (!isset($rows[$key])) {
                            $rows[$key] = [
                                'sid' => $log['sid'],
                                'bid' => $log['pid'],
                                'nums' => 0,
                                'cdate' => $day,
                            ];
                        }
                        $rows[$key]['nums'] += 1;
                    }
                }
            }
        }
        if ($rows) {
            self::getDb()->createCommand()->batchInsert(self::tableName(),
                ['sid', 'bid', 'nums', 'cdate'], $rows)->execute();
        }
        
        return true;
    }


    public static function saveHistory($sid,$bid,$nums,$day){
        if($nums>0){
            $data = static::find()
                        ->where("FROM_UNIXTIME(unix_timestamp(cdate),'%Y-%m-%d') = '{$day}'")
                        ->andWhere(['sid'=>$sid,'bid'=>$bid])
                        ->one();
            if($data){
                $data->nums = $nums;
                $data->save(false);
            }else{
                $data = new self;
                $data->sid = $sid;
                $data->bid = $bid;
                $data->nums = $nums;
                $data->cdate = $day;
                $data->save(false);
            }
        }
    }

}
