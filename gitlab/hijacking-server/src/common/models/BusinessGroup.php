<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

class BusinessGroup extends ActiveRecord
{
    const STATUS_DELETED = -1;
    const STATUS_ACTIVE = 0;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'business_group';
    }

    public function rules(){
        return [
            ['name','required'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name'=>'分组名',
        ];
    }

    public function getBusinesses()
    {
        return $this->hasMany(Business::className(), ['gid' => 'id']);
    }
    
}
