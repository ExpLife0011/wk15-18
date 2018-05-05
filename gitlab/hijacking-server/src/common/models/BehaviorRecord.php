<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

class BehaviorRecord extends ActiveRecord
{
    const ROLE_MANAGER = 0;
    const ROLE_CP = 1;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'behavior_record';
    }

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
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'uid' => '操作人',
            'behavior' => '操作行为',
            'created_at' => '操作时间',
            'updated_at' => '更新时间',
            'role' => '角色',
        ];
    }

    public function showUsername()
    {
        return function($data) {
            if ($data->role == self::ROLE_MANAGER) {
                $user = User::findOne($data->uid);
                if ($user) {
                    return $user->username;
                }else {
                    return '';
                }
            }else {
                $cpuser = Cpuser::findOne($data->uid);
                if ($cpuser) {
                    return $cpuser->username;
                }else {
                    return '';
                }
            }
        };
    }

    public function getUserRole()
    {
        return function($data) {
            if($data->role == self::ROLE_MANAGER) {
                return '管理员';
            }else {
                return 'CP用户';
            }
        };
    }

    //针对 User 表新建的 hasOneUser()关联查询
    public function hasOneUser($class, $link)
    {
        /* @var $class ActiveRecordInterface */
        /* @var $query ActiveQuery */
        $query = $class::find()->select('id, username');
        $query->primaryModel = $this;
        $query->link = $link;
        $query->multiple = false;
        return $query;
    }

    public function getUser()
    {
        return $this->hasOneUser(User::className(), ['id' => 'uid']);
    }

    //针对 Cpuser 表新建的 hasOneCpuser()关联查询
    public function hasOneCpuser($class, $link)
    {
        /* @var $class ActiveRecordInterface */
        /* @var $query ActiveQuery */
        $query = $class::find()->select('id, username');
        $query->primaryModel = $this;
        $query->link = $link;
        $query->multiple = false;
        return $query;
    }

    public function getCpuser()
    {
        return $this->hasOneCpuser(Cpuser::className(), ['id' => 'uid']);
    }
}
