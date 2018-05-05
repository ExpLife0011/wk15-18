<?php
namespace cp\models;

use Yii;
use yii\base\Model;
use common\models\Business;
use common\models\Server;
use common\models\Cpuser;
use common\models\BusinessGroup;
use common\models\ServerBusiness;
use yii\helpers\ArrayHelper;

class BindForm extends Model
{
    public $bids;
    public $sids;
    public $gids;

    public static function getForm($bid) {
        $model = new static;
        $business = Business::findOne($bid);
        $model->sids = ArrayHelper::getColumn($business->servers, 'id');
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
            'sids' => '选择服务器',
            'gids' => '选择业务分组',
        ];
    }

    public function save($bid) {
        $del_sids = [];
        $business = Business::findOne($bid);
        foreach ($business->servers as $sv) {
            if (empty($this->sids)) {
                $this->sids = [];
            }
            if (!in_array($sv->id, $this->sids)) {
                $del_sids[$sv->id] = $sv->name;
                $business->unlink('servers', $sv);
            } else {
                $this->sids = array_diff($this->sids, [$sv->id]);
            }
        }
        
        $add_sids = [];
        if(!empty($this->sids)) {
            foreach($this->sids as $sid) {
                $sv = Server::findOne($sid);
                $business->link('servers', $sv, ['created_at'=>time(),'updated_at'=>time()]);
                $add_sids[$sid] = $sv->name;
            }
        }
        $business->flushAllTasklist();
        return [$del_sids, $add_sids];
    }

}
