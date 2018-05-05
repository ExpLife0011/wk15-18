<?php 
namespace backend\models;

use Yii;
use yii\base\Model;
use common\models\ViewPoint;

class ViewPointForm extends Model
{
    public $id;
    public $content;
    public $planning_time;

    public function formName()
    {
        return '';
    }

    public function rules()
    {
        return [
            [['content', 'id', 'planning_time'], 'required'],
            ['content', 'string'],
            ['id', 'integer'],
        ];
    }

    public function addViewPoint()
    {
        if (!$this->validate()) {
            return null;
        }

        $view_point = new ViewPoint;
        $view_point->event_id = $this->id;
        $view_point->content = $this->content;
        $view_point->planning_time = $this->planning_time;
        $view_point->planning_cdate = date('Y-m-d', strtotime($this->planning_time));

        if ($view_point->save(false)) {
            return $view_point;
        }else {
            return false;
        }
    }

    
}