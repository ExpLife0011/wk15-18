<?php

namespace common\models;

use Yii;
use yii\data\ActiveDataProvider;
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
class CpServer extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'cp_server';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sid', 'cpid', 'created_at', 'updated_at'], 'required'],
            [['sid', 'cpid', 'status', 'created_at', 'updated_at'], 'integer']
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
            'cpid' => 'Cpid',
            'status' => 'Status',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    public function search(){
        $query = self::find()->where(['cpid'=>Yii::$app->user->id]);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        return $dataProvider;
    }
    public function getServer()
    {
        return $this->hasOne(Server::className(), ['id' => 'sid']);
    }

    public function getServerName(){
        return function($data){
            $server = Server::findOne($data->sid);
            if($server){
                return $server->name;
            }
            return false;
        };
    }

    public function getAllBusinesses(){
        return function($data){
            $bids = ServerBusiness::find()->select("bid")->where(['sid'=>$data->sid])->column();
            $html = '';
            if($bids){
                $business = Business::find()->where(['id'=>$bids])->andWhere(['shield'=>Business::STATUS_NOT_SHIELD, 'cpid'=>Yii::$app->user->id])->asArray()->all();
                if($business){
                    foreach($business as $v){
                        $html .= $v['name'].',';
                    }

                    return $html;
                }
            }
            return $html;
        };
    }
}
