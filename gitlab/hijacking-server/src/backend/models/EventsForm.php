<?php
namespace backend\models;

use yii\base\Model;
use common\models\Events;
use common\models\Server;
use common\models\Business;
use common\models\ViewPoint;

class EventsForm extends Model
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

    public function events()
    {
        if ($this->validate()) {
            $ids = $this->getIds($this->cdate);
            $events = Events::find()
                    ->with(['viewPoint','user'])
                    ->where(['cdate'=>$this->cdate])
                    ->orWhere(['id'=>$ids])
                    ->asArray()
                    ->all();
            return $events;
        }
    }

    public function getIds($date)
    {
        $eventids = ViewPoint::find()
                    ->select('event_id')
                    ->where(['planning_cdate'=>$date])
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

    public function getDatas($datas)
    {
        $sids = []; 
        $bids = []; 
        $result = [];
        if ($datas) {
            foreach($datas as $key=> $data) {
                $sid = $data['sid']; 
                $bid = $data['bid']; 
                if (!in_array($sid, $sids)) { 
                    array_push($sids, $sid); 
                } 
                if (!in_array($bid, $bids)) { 
                    array_push($bids, $bid); 
                }
                $result[$sid][$bid][$key] = $data;
            }
        }            
        $servers = Server::find()->where(['id'=>$sids])->indexBy('id')->all(); 
        $businesses = Business::find()->select('id, name')->where(['id'=>$bids,'status'=>[Business::STATUS_ACTIVE,Business::STATUS_CLOSED]])->asArray()->indexBy('id')->all();
        if (in_array(0, $bids)) {
            $start_business = [];
            $start_business['id'] = 0;
            $start_business['name'] = '软件操作';
            array_unshift($businesses, $start_business);
        }
        if (in_array(0, $sids)) {
            $start_server = [];
            $start_server['id'] = 0;
            $start_server['name'] = '全部服务器';
            array_unshift($servers, $start_server);
        }

        return [
            'result' => $result, 
            'server' => $servers, 
            'business' => $businesses,
        ];
    }
}