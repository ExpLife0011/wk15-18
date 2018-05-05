<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "ping".
 *
 * @property integer $id
 * @property integer $sid
 * @property string $load
 * @property string $cpu
 * @property string $mem
 * @property string $net_in
 * @property string $net_out
 * @property integer $created_at
 * @property integer $updated_at
 */
class Ping extends ActiveRecord
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
        return 'ping';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sid', 'load', 'cpu', 'mem', 'net_in', 'net_out', 'created_at', 'updated_at'], 'required'],
            [['sid', 'created_at', 'updated_at'], 'integer'],
            [['load', 'cpu', 'mem'], 'string', 'max' => 8],
            [['net_in', 'net_out'], 'string', 'max' => 32]
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
            'load' => 'Load',
            'cpu' => 'Cpu',
            'mem' => 'Mem',
            'net_in' => 'Net In',
            'net_out' => 'Net Out',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
