<?php
namespace backend\models;

use Yii;
use yii\base\Model;
use common\models\BehaviorRecord;

class DownloadForm extends Model
{
    public $cdate_start;
    public $cdate_end;

    public function rules()
    {
        return [
            [['cdate_start', 'cdate_end'], 'required'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'cdate_start' => '选择日期',
            'cdate_end' => '至',
        ];
    }

}