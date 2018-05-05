<?php 
namespace backend\models;

use Yii;
use yii\base\Model;
use common\models\ViewPoint;

class ResultForm extends Model
{
    public $id;
    public $result;

    public function formName()
    {
        return '';
    }

    public function rules()
    {
        return [
            [['result', 'id'], 'required'],
            ['result', 'string'],
            ['id', 'integer'],
        ];
    }

    public function addResult()
    {
        if (!$this->validate()) {
            return null;
        }
        $view_point = ViewPoint::findOne($this->id);
        $view_point->result = $this->result;

        if ($view_point->save(false)) {
            return $view_point;
        }else {
            return false;
        }
    }

}