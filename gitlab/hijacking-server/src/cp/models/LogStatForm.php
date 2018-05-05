<?php
namespace cp\models;

use Yii;
use yii\base\Model;
use common\models\Log;
use common\models\Business;
use common\models\Server;

class LogStatForm extends Model
{
    public $start_time;
    public $end_time;

    public $sid;
    public $bid;

    public function rules()
    {
        return [
            [['start_time','end_time','sid'],'required'],
        ];
    }

    public function safeAttributes() {
        return ['start_time', 'end_time','sid','bid'];
    }

    public function attributeLabels()
    {
        return [
            'start_time' => '起始时间',
            'end_time' => '结束时间',
            'sid' => '服务器',
            'bid' => '业务',
        ];
    }

    public function getBusinesses()
    {
        if (empty($this->sid)) {
            $bs = Business::find()->where(['status'=>Business::STATUS_ACTIVE, 'cpid'=>Yii::$app->user->id])->all();
            $rs = [];
            if($bs){
                foreach($bs as $key=>$v){
                    $rs[$key]['id'] = $v['id'];
                    $rs[$key]['name'] = $v['id'].'-'.$v['name'];
                }
            }
            return $rs;
        } else {
            $rs = Server::findOne($this->sid)->businesses;
            return $rs;
        }
    }

    public function stat()
    {
        if ($this->validate()) {
            return Log::countLog($this->start_time,$this->end_time,$this->sid,$this->bid);
        } else {
            return 0;
        }
    }

}
