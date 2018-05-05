<?php
namespace backend\models;

use Yii;
use yii\base\Model;
use common\models\Business;
use common\models\Server;
use common\models\Cpuser;
use common\models\BusinessGroup;
use common\models\ServerBusiness;
use yii\helpers\ArrayHelper;

class AssignForm extends Model
{
    public $bids;
    public $sids;
    public $gids;

    public static function getForm($sid) {
        $model = new static;
        $server = Server::findOne($sid);
        $model->bids = ArrayHelper::getColumn($server->allBusinesses, 'id');
        return $model;
    }

    public static function getServerForm($id){
        $model = new static;
        $cp = Cpuser::findOne($id);
        $model->sids = ArrayHelper::getColumn($cp->servers, 'id');
        return $model;
    }

    public static function getGroupForm($sid) {
        $model = new static;
        $server = Server::findOne($sid);
        $model->gids = ArrayHelper::getColumn($server->groups, 'id');
        return $model;
    }

    public function rules()
    {
        return [
            [['bids'], 'required'],
            [['sids'], 'safe'],
             [['gids'], 'safe'], 
        ];
    }

    /**
     *
     */
    
    public function attributeLabels()
    {
        return [
            'bids' => '选择业务',
            'sids' => '选择服务',
            'gids' => '选择业务分组',
        ];
    }

    public function save($sid) {
        $del_bids = [];
        $server = Server::findOne($sid);
        foreach ($server->allBusinesses as $bn) {
            if (!in_array($bn->id, $this->bids)) {
                $del_bids[$bn->id] = $bn->name;
                $server->unlink('businesses', $bn);
            } else {
                $this->bids = array_diff($this->bids, [$bn->id]);
            }
        }
        
        $add_bids = [];
        foreach($this->bids as $bid) {
            $bn = Business::findOne($bid);
            $server->link('businesses', $bn, ['created_at'=>time(),'updated_at'=>time()]);
            $add_bids[$bid] = $bn->name;
        }
        $server->flushTasklist();
        return [$del_bids, $add_bids];
    }

    public function saveGroup($sid) {
        $del_bids = [];
        $server = Server::findOne($sid);
        foreach ($server->groups as $gn) {
            if (!in_array($gn->id, $this->gids)) {
                array_push($del_bids, $gn->id);
                $server->unlink('groups', $gn);
                // $bids = Business::find()->where(['gid'=>$gn->id])->asArray()->all();
                // if($bids){
                //     foreach($bids as $bid){
                //         $server_business = ServerBusiness::findOne(['bid'=>$bid['id']]);
                //         if($server_business){
                //             $server_business->sid = 0;
                //             $server_business->bid = 0;
                //             $server_business->save(false);
                //         }
                //     }
                // }
            } else {
                $this->gids = array_diff($this->gids, [$gn->id]);
            }
        }
        
        foreach($this->gids as $gid) {
            $gn = BusinessGroup::findOne($gid);
            $server->link('groups', $gn);
            // $bids = Business::find()->where(['gid'=>$gn->id])->asArray()->all();
            // if($bids){
            //     foreach($bids as $bid){
            //         $server_business = ServerBusiness::findOne(['bid'=>$bid['id']]);
            //         if(!$server_business){
            //             $server_business = new ServerBusiness;
            //             $server_business->sid = $sid;
            //             $server_business->bid = $bid['id'];
            //             $server_business->save(false);
            //         }
            //     }
            // }
        }
        $server->flushTasklist();
        return [$del_bids, $this->gids];
    }

    public function saveServer($cpid) {
        $del_sids = [];
        $server = Cpuser::findOne($cpid);
        foreach ($server->servers as $bn) {
            if (empty($this->sids)) {
                $this->sids = [];
            }
            if (!in_array($bn->id, $this->sids)) {
                $del_sids[$bn->id] = $bn->name;
                $server->unlink('servers', $bn);
            } else {
                $this->sids = array_diff($this->sids, [$bn->id]);
            }
        }

        $add_sids = [];
        if(!empty($this->sids)) {
            foreach($this->sids as $sid) {
                $bn = Server::findOne($sid);
                $server->link('servers', $bn);
                $add_sids[$sid] = $bn->name;
            }
        }
        // $server->flushTasklist();
        return [$del_sids, $add_sids];
    }

}
