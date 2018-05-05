<?php
namespace api\controllers;

class ServerController extends BaseController
{
    public function actionIndex($sid)
    {
        return [
            'active' => $this->_server->getLastActive(),
            'status' => $this->_server->status,
        ];
    }
}
