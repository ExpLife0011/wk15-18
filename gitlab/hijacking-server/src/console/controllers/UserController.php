<?php
namespace console\controllers;

use yii\console\Controller;
use common\models\User;
use frontend\models\SignupForm;

class UserController extends Controller
{
    public function actionCreate($username, $email, $password)
    {
        $model = new SignupForm();
        $model->username = $username;
        $model->email = $email;
        $model->password = $password;
        if ($model->signup()) {
            echo "success add user: ".$username;
        } else {
            print_r($model->errors);
        }
        
    }
}
