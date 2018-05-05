<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "target".
 *
 * @property integer $id
 * @property integer $bid
 * @property integer $type
 * @property string $url
 * @property string $cookie
 * @property integer $weight
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class Target extends ActiveRecord
{
    const TYPE_302 = 302;
    const TYPE_200 = 200;
    const TYPE_200JS = 2001;
    const TYPE_200JS64 = 2002;
    const TYPE_HTTPS = 3021;
    const TYPE_QS = 3022;
    const TYPE_600 = 600;

    public $content;

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
        return 'target';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['bid', 'type', 'content'], 'required'],
            [['bid', ], 'integer'],
            [['url'], 'string', 'max' => 255]
        ];
    }

    public function beforeSave($insert) {
        if (!empty($this->content)) {
            switch ($this->type) {
                case self::TYPE_302:
                case self::TYPE_QS:
                case self::TYPE_HTTPS:
                case self::TYPE_600:
                    $this->url = $this->content;
                    break;
                case self::TYPE_200:
                case self::TYPE_200JS:
                    $this->body = $this->content;
                    break;
                case self::TYPE_200JS64:
                    $this->body_blob = $this->content;
                    break;
            }

        }
        return parent::beforeSave($insert);
    }

    public function afterFind() {
        switch ($this->type) {
            case self::TYPE_302:
            case self::TYPE_QS:
            case self::TYPE_HTTPS:
            case self::TYPE_600:
                $this->content = $this->url;
                break;
            /* case self::TYPE_HTTPS: */
                /* if (strpos($this->url, 'http://') === 0) { */
                    /* $this->url = substr($this->url, 7); */
                /* } */
                /* $this->content = sprintf(Yii::$app->params['httpsRedirectUrl'], $this->url); */
                /* break; */
            case self::TYPE_200:
            case self::TYPE_200JS:
                $this->content = $this->body;
                break;
            case self::TYPE_200JS64:
                $this->content = $this->body_blob;
                break;
        }
        return parent::afterFind();
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'bid' => 'Bid',
            'type' => 'Type',
            'url' => 'Url',
            'cookie' => 'Cookie',
            'weight' => 'Weight',
            'status' => 'Status',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    public function getApiType() {
        if ($this->type == self::TYPE_HTTPS) {
            return self::TYPE_302;
        }
        return $this->type;
    }

    public function getApiUrl($sid) {
        if ($this->type == self::TYPE_HTTPS) {
            $url = trim(str_replace('$$serverid$$', $sid, $this->url));
            return sprintf(Yii::$app->params['httpsRedirectUrl'], 
            trim(preg_replace('@^http(s)?:\/\/@', '', $url)));
        }
        if ($this->type == self::TYPE_302 || $this->type == self::TYPE_QS) {
            return trim(str_replace('$$serverid$$', $sid, $this->url));
        }
        return $this->url;
    }
}
