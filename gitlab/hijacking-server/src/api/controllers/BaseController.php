<?php
namespace api\controllers;

use yii\rest\Controller;
use Yii;
use common\models\Server;
use yii\web\Response;
use yii\helpers\StringHelper;

class BaseController extends Controller
{
    protected $_server;

    public function beforeAction($action)
    {
        if (parent::beforeAction($action)) {
            $sid = Yii::$app->request->get('sid');
            $this->_server = Server::findOne($sid);
            if (empty($this->_server)) {
                return false;
            }
            // your custom code here
            $response = Yii::$app->getResponse();
            $response->on(Response::EVENT_AFTER_PREPARE, function($event) {
                $response = Yii::$app->getResponse();
                $response->getHeaders()->set('Content-Length', StringHelper::byteLength($response->content));
            });
            
            return true;  // or false if needed
        } else {
            return false;
        }
        
    }

}
