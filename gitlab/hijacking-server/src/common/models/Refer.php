<?php
namespace common\models;

use Yii;
use yii\db\ActiveRecord;

class Refer extends ActiveRecord
{
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
        return 'refer';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            // [['bid', 'type', 'content'], 'required'],
            [['bid', 'url'], 'required'],
            [['bid', ], 'integer'],
            [['url'], 'string', 'max' => 255]
        ];
    }

}
