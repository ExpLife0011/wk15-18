<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;


/**
 * This is the model class for table "view_point".
 *
 * @property integer $id
 * @property integer $event_id
 * @property string $content
 * @property integer $planning_time
 * @property string $result
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class ViewPoint extends ActiveRecord
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
        return 'view_point';
    }


}
