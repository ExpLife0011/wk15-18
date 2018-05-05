<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use yii\web\UploadedFile;


/**
 * This is the model class for table "events".
 *
 * @property integer $id
 * @property integer $uid
 * @property integer $sid
 * @property integer $bid
 * @property string $title
 * @property text $description
 * @property integer $status
 * @property integer $operation_time
 * @property integer $created_at
 * @property integer $updated_at
 */
class Events extends ActiveRecord
{
    const STATUS_ACTIVE = 0; //未完结事件
    const STATUS_END = 1; //完结事件

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
        return 'events';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sid', 'bid', 'title', 'description', 'operation_time'], 'required'],
            [['sid', 'bid'], 'integer'],
            [['title', 'description'], 'string'],
            // ['bid', 'validateServerBusiness'],
        ];
    }

    public function validateServerBusiness($attribute, $params)
    {
        if (!$this->hasErrors()) {
            if ($this->bid == 0) {
                return;
            }
            $server_business = ServerBusiness::find()->where(['sid'=>$this->sid,'bid'=>$this->bid])->one();
            if (!$server_business) {
                $this->addError($attribute, '服务器和业务没有绑定关系');
            }
        }
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'sid' => '服务器',
            'bid' => '业务',
            'title' => '主题',
            'description' => '事件描述',
            'operation_time' => '操作时间',
        ];
    }

    public function saveEvents()
    {
        foreach ($this->sid as $sid) {
            foreach ($this->bid as $bid) {
                $events = new static;
                $events->sid = $sid;
                $events->bid = $bid;
                $events->title = $this->title;
                $events->description = $this->description;
                $events->operation_time = $this->operation_time;
                $events->uid = Yii::$app->user->id;
                $events->cdate = date("Y-m-d", time());
                $events->save(false);
            }
        }
        return true;
    }


    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'uid']);
    }

    public function getServer()
    {
        return $this->hasOne(Server::className(), ['id' => 'sid']);
    }

    public function getBusiness()
    {
        return $this->hasOne(Business::className(), ['id' => 'bid']);
    }

    public function getComment()
    {
        return $this->hasMany(Comment::className(), ['event_id' => 'id'])->orderBy('updated_at desc');
    }

    public function getViewPoint()
    {
        return $this->hasMany(ViewPoint::className(), ['event_id' => 'id'])->orderBy('updated_at desc');
    }
}
