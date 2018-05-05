<?php
namespace backend\models;

use yii\base\Model;
use common\models\StatHistory;
use yii\helpers\Json;

class LogListForm extends Model
{
    public $cdate;

    public function rules()
    {
        return [
            ['cdate','required'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'cdate' => '日期',
        ];
    }

    public function loglist()
    {
        if ($this->validate()) {
            $datas = StatHistory::find()->where(['cdate'=>$this->cdate])->orWhere(['cdate'=>date("Y-m-d",strtotime("$this->cdate -1 days"))])->asArray()->all();
            $sids = []; 
            $bids = []; 
            $result = []; 
            $presult = [];
            if ($datas) {
                foreach($datas as $log) {
                    $sid = $log['sid']; 
                    $bid = $log['bid']; 
                    if (!in_array($sid, $sids)) { 
                        array_push($sids, $sid); 
                    } 
                    if (!in_array($bid, $bids)) { 
                        array_push($bids, $bid); 
                    } 
                    // if (!isset($result[$sid])) { 
                    //       $result[$sid] = []; 
                    // }
                    if ($log['cdate'] == $this->cdate) {
                        $result[$sid][$bid] = $log['nums']; 
                    }else {
                        $presult[$sid][$bid] = $log['nums'];
                    }
                }
            }
            //统计业务在各个服务器的下发量的总和 
            $total_sids = [];
            $pretotal = [];
            foreach ($result as $s => $res) {
                foreach ($res as $b => $r) {
                    if(!isset($total_sids[$b])) {
                        $total_sids[$b] = 0;
                    }
                    $total_sids[$b] += $r;
                }
            }
            foreach ($presult as $s => $res) {
                foreach ($res as $b => $r) {
                    if(!isset($pretotal[$b])) {
                        $pretotal[$b] = 0;
                    }
                    $pretotal[$b] += $r;
                }
            }

            return [$sids, $bids, $result, $presult, $total_sids, $pretotal];
        }
    }
}