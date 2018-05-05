<?php 
namespace backend\models;

use Yii;
use yii\base\Model;
use common\models\Comment;
use common\models\Events;

class CommentResultForm extends Model
{
    public $id;
    public $content;

    public function formName()
    {
        return '';
    }

    public function rules()
    {
        return [
            [['content', 'id'], 'required'],
            ['content', 'string'],
            ['id', 'integer'],
        ];
    }

    public function addCommentResult()
    {
        if (!$this->validate()) {
            return null;
        }

        $comment = new Comment;
        $comment->uid = Yii::$app->user->id;
        $comment->event_id = $this->id;
        $comment->content = $this->content;

        $event = Events::findOne($this->id);
        $event->status = Events::STATUS_END;
        $event->save(false);

        if ($comment->save(false)) {
            return $comment;
        }else {
            return false;
        }
    }

}