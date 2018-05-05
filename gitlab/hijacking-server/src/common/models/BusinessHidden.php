<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

class BusinessHidden extends Business
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'business_hidden';
    }
}