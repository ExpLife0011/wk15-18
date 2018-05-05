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
class ServerBusiness extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'server_business';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sid', 'bid', 'created_at', 'updated_at'], 'required'],
            [['sid', 'bid', 'status', 'created_at', 'updated_at'], 'integer']
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
            'bid' => 'Bid',
            'status' => 'Status',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
    // public function getBusinesses($sid){
    //     $query = ServerBusiness::find()->with("business")->where(['sid'=>$sid]);
    //     return $query;
    //     // $rs = ServerBusiness::find()->with("business")->where(['sid'=>$sid])->asArray()->all();
    //     // $data = [];
    //     // if($rs){
    //     //     foreach ($rs as $v) {
    //     //         $data[$v['business']['id']] = $v['business']['name'];
    //     //     }
    //     // }
    //     // return $data;
    // }

    public function getBusiness()
    {
        return $this->hasOne(Business::className(), ['id' => 'bid']);
    }

    public function getSrcurl()
    {
        return $this->hasMany(SrcUrl::className(), ['bid' => 'bid']);
    }

    public function getTarget()
    {
        return $this->hasMany(Target::className(), ['bid' => 'bid']);
    }

    public function getServer()
    {
        return $this->hasOne(Server::className(), ['id' => 'sid']);
    }
}
