<?php
namespace backend\models;

use yii\base\Model;
use common\models\Events;
use common\models\Server;
use common\models\Business;
use common\models\ViewPoint;

class BusinessEventsForm extends Model
{
    public $cdate_start;
    public $cdate_end;
    public $bid;

    public function rules()
    {
        return [
            ['bid','required'],
            [['cdate_start', 'cdate_end'], 'safe'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'cdate_start' => '选择日期',
            'cdate_end' => '至',
            'bid' => '选择业务',
        ];
    }

    public function events()
    {
        if ($this->validate()) {
            $ids = $this->getIds();
            $query = Events::find()->with(['viewPoint','user'])->where(['bid'=>$this->bid])->orWhere(['id'=>$ids]);
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

    public function business()
    {
        return Business::findOne($this->bid);
    }

    public function getBusinessDatas($datas)
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
                $result[$date][$sid][$key] = $data;
            }
        }   
         
        $servers = Server::find()->select('id, name')->where(['id'=>$sids])->asArray()->indexBy('id')->all();
        if (in_array(0, $sids)) {
            $start_server = [];
            $start_server['id'] = 0;
            $start_server['name'] = '全部服务器';
            array_unshift($servers, $start_server);
        }
        
        return [
            'result' => $result, 
            'datelist' => $dates, 
            'server' => $servers,
        ];
    }
}