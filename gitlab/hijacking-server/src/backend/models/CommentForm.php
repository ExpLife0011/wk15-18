<?php 
namespace backend\models;

use Yii;
use yii\base\Model;
use common\models\Comment;

class CommentForm extends Model
{
    public $id;
    public $content;
    // public $imageFile;

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
            // ['imageFile', 'safe'],
            // ['imageFile', 'file', 'mimeTypes' => ['image/png', 'image/jpeg', 'image/gif']],
        ];
    }

    public function addComment()
    {
        if (!$this->validate()) {
            return null;
        }

        // if ($this->imageFile) {
        //     $re = $this->fileExists(Yii::$app->params['fileUrl']);//文件上传路径
        //     if(!$re){
        //         $this->addError('imageFile', 'Failed to create directory');
        //         return false;
        //     }
        //     $name = uniqid() . '.' . $this->imageFile->extension;
        //     $save_re = $this->imageFile->saveAs(Yii::$app->params['fileUrl'] . $name);
        //     if($save_re){
        //         return true;
        //     }else{
        //         switch ($this->imageFile->error){
        //             case 1:
        //             $error_msg = 'The file size exceeds the limit';
        //             break;
        //             case 2:
        //             $error_msg = 'The file size exceeds the limit';
        //             break;
        //             case 3:
        //             $error_msg = 'The file was only partially uploaded';
        //             break;
        //             case 4:
        //             $error_msg = 'No file was uploaded';
        //             break;
        //             case 6:
        //             $error_msg = 'Missing a temporary folder';
        //             break;
        //             case 7:
        //             $error_msg = 'Failed to write file to disk';
        //             break;
        //         }
        //         $this->addError('imageFile', $error_msg);
        //         return false;
        //     }
        // }
        $comment = new Comment;
        $comment->uid = Yii::$app->user->id;
        $comment->event_id = $this->id;
        $comment->content = $this->content;
        // $comment->image_url = $name;

        if ($comment->save(false)) {
            return $comment;
        }else {
            return false;
        }
    }

    public function fileExists($uploadpath)
    {
        if(!file_exists($uploadpath)){
            if(mkdir($uploadpath, 0755, true)){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
}