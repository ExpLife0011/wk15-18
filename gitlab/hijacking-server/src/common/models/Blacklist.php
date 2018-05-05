<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use yii\helpers\ArrayHelper;
/**
 * This is the model class for table "blacklist".
 *
 * @property integer $id
 * @property integer $sid
 * @property string $ip_s
 * @property string $ip_e
 * @property string $name
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class Blacklist extends ActiveRecord
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
        return 'blacklist';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sid', 'ip_s', 'ip_e', 'name'], 'required'],
            [[ 'ip_s', 'ip_e'], 'string'],
            [['sid','status'],'integer'],
            [['name'], 'string', 'max' => 255]
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
            'ip_s' => '起始IP',
            'ip_e' => '结束IP',
            'name' => '名称',
            'status' => '状态',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    public function getServer()
    {
        return $this->hasOne(Server::className, ['id' => 'sid']);
    }

    public static function getBlack($sid) {
        $model = new static;
        $model->sid = $sid;
        return $model;
    }

    public function updateBlack($id){
        $model = static::findOne($id);
        $model->sid = $model->sid;
        $post = Yii::$app->request->post();
        if ($model->load($post) && $model->save()) {
            return true;
        }
        return false;
    }
}
