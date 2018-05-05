<?php
namespace backend\models;

use yii\base\Model;
use common\models\Events;
use common\models\Server;
use common\models\Business;
use common\models\ViewPoint;

class ServerEventsForm extends Model
{
    public $cdate_start;
    public $cdate_end;
    public $sid;

    public function rules()
    {
        return [
            ['sid','required'],
            [['cdate_start', 'cdate_end'], 'safe'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'cdate_start' => '选择日期',
            'cdate_end' => '至',
            'sid' => '选择服务器',
        ];
    }

    public function events()
    {
        if ($this->validate()) {
            $ids = $this->getIds();
            $query = Events::find()->with(['viewPoint','user'])->where(['sid'=>$this->sid])->orWhere(['id'=>$ids]);
            if ($this->cdate_start && $this->cdate_end) {
                return $query->andWhere(['between', 'cdate', $this->cdate_start, $this->cdate_end])->orderBy('cdate desc')->asArray()->all();
            }
            return $query->orderBy('cdate desc')->asArray()->all();
        }
    }

    public function getIds()
    {
        $eventids = ViewPoint::find()
                    ->select('event_id')
                    ->where(['between', 'planning_cdate', $this->cdate_start, $this->cdate_end])
                    ->asArray()
                    ->all();
        $ids = [];
        foreach ($eventids as $id) {
            if (!in_array($id['event_id'], $ids)) {
                array_push($ids, $id['event_id']);
            }
        }
        return $ids;
    }

    public function getDefaultIds($date, $today)
    {
        $eventids = ViewPoint::find()
                    ->select('event_id')
                    ->where(['between', 'planning_cdate', $date, $today])
                    ->asArray()
                    ->all();
        $ids = [];
        foreach ($eventids as $id) {
            if (!in_array($id['event_id'], $ids)) {
                array_push($ids, $id['event_id']);
            }
        }
        return $ids;
    }

    public function server()
    {
        return Server::findOne($this->sid);
    }

    public function getServerDatas($datas)
    {
        $dates = []; 
        $sids = [];
        $bids = []; 
        $result = [];
        if ($datas) {
            foreach($datas as $key => $data) {
                $date = $data['cdate']; 
                $sid = $data['sid'];
                $bid = $data['bid']; 
                if (!in_array($date, $dates)) { 
                    array_push($dates, $date); 
                } 
                if (!in_array($sid, $sids)) { 
                    array_push($sids, $sid); 
                } 
                if (!in_array($bid, $bids)) { 
                    array_push($bids, $bid); 
                } 
                $result[$date][$bid][$key] = $data;
            }
        }   

        $businesses = Business::find()->select('id, name')->where(['id'=>$bids,'status'=>[Business::STATUS_ACTIVE,Business::STATUS_CLOSED]])->asArray()->indexBy('id')->all();
        if (in_array(0, $bids)) {
            $start_business = [];
            $start_business['id'] = 0;
            $start_business['name'] = '软件操作';
            array_unshift($businesses, $start_business);
        }

        return [
            'result' => $result, 
            'datelist' => $dates, 
            'business' => $businesses,
        ];
    }
}