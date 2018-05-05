<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "server_business".
 *
 * @property integer $id
 * @property integer $sid
 * @property integer $bid
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class ServerBusinessGroup extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'server_business_group';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sid', 'gid', 'created_at', 'updated_at'], 'required'],
            [['sid', 'gid', 'status', 'created_at', 'updated_at'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'sid' => 'Sid',
            'gid' => 'Gid',
            'status' => 'Status',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    public function getGroups()
    {
        return $this->hasOne(BusinessGroup::className(), ['id' => 'gid']);
    }
}
