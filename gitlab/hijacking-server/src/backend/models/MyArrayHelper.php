<?php
namespace backend\models;

use yii\helpers\ArrayHelper;

class MyArrayHelper extends ArrayHelper
{
    public static function map($array, $from, $to, $group = null)
    {
        $result = [];
        foreach ($array as $element) {
            $key = static::getValue($element, $from);
            $value = static::getValue($element, $to);
            if ($group !== null) {
                $result[static::getValue($element, $group)][$key] = $value;
            } else {
                $result[$key] = $key.'.'.$value;
            }
        }

        return $result;
    }
}
