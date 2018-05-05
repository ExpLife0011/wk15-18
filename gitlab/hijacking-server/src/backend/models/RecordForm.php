<?php
namespace backend\models;

use yii\base\Model;
use common\models\BehaviorRecord;

class RecordForm extends BehaviorRecord
{
    public $sid;
    public $bid;
    public $gid;
    public $cdate_start;
    public $cdate_end;

    public function rules()
    {
        return [
            [['sid', 'bid', 'gid', 'cdate_start', 'cdate_end'], 'safe'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'sid' => '选择服务器',
            'bid' => '选择业务',
            'gid' => '选择业务分组',
            'cdate_start' => '选择日期',
            'cdate_end' => '至',
        ];
    }

    public function data()
    {
        return BehaviorRecord::find()->orderBy(['created_at'=>SORT_DESC]);
    }

    public function record()
    {
        if ($this->validate()) {
            $query = BehaviorRecord::find();
            if ($this->sid) {
                $query->where(['sid'=>$this->sid]);
            }
            if ($this->bid) {
                $query->orWhere(['bid'=>$this->bid]);
            }
            if ($this->gid) {
                $query->orWhere(['gid'=>$this->gid]);
            }
            if ($this->cdate_start && $this->cdate_end) {
                $query->orWhere(['between', 'cdate', $this->cdate_start, $this->cdate_end]);
            }
            return $query->orderBy('created_at desc');
        }
    }

}