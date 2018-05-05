<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use yii\helpers\ArrayHelper;
/**
 * This is the model class for table "pppoe".
 *
 * @property integer $id
 * @property integer $sid
 * @property string $account
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class Pppoe extends ActiveRecord
{
    public function behaviors()
    {
        return [
            'timestamp' => [
                'class' => 'yii\behaviors\TimestampBehavior',
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at','updated_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => 'updated_at',
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'pppoe';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sid', 'account'], 'required'],
            ['account', 'string'],
            [['sid','status'],'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'sid' => '服务器ID',
            'account' => 'PPPOE帐号',
            'status' => '状态',
            'created_at' => '创建时间',
            'updated_at' => '更新时间',
        ];
    }

    public static function getPppoe($sid) {
        $model = new static;
        $model->sid = $sid;
        return $model;
    }

    public function updatePppoe($id){
        $model = static::findOne($id);
        $model->sid = $model->sid;
        $post = Yii::$app->request->post();
        if ($model->load($post) && $model->save()) {
            return true;
        }
        return false;
    }
}
