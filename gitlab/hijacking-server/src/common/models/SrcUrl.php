<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "src_url".
 *
 * @property integer $id
 * @property integer $bid
 * @property integer $type
 * @property string $url
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class SrcUrl extends ActiveRecord
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
        return 'src_url';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['bid', 'url'], 'required'],
            [['bid', 'type', 'status'], 'integer'],
            [['url'], 'string', 'max' => 255]
        ];
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
            'status' => 'Status',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
