<?php
namespace backend\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\data\ActiveDataProvider;
use backend\models\ServerForm;
use common\models\Server;
use common\models\Config;
use yii\helpers\ArrayHelper;
use common\models\ServerBusiness;

class AutomateController extends Controller
{
    public $layout = false;

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['index', 'config', 'detail', 'start', 'restart', 'stop'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                    [
                        'allow' => false,
                    ],
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        $model = new ServerForm;
        $dataProvider = new ActiveDataProvider([
            'query' => $model->find()->where(['status'=>1])->orderBy(['id'=>SORT_ASC]),
        ]);

        return $this->render('index', [
            'dataProvider'=>$dataProvider,'model'=>$model
        ]);
    }

    public function actionConfig($id)
    {
        $server = Server::findOne($id);
        $config = $server->config;
        if ($config) {
            $config_id = $config->id;
            $model = Config::findOne($config_id);
        }else {
            $model = new Config;
            $config_id = null;
        }
        if ($model->load(Yii::$app->request->post()) && $model->saveConfig($id, $config_id)) {
            $server->program_status = Server::PRO_STATUS_CONFIG;
            $server->save(false);
            return $this->redirect(['index']);
        }
        
        $servers = Server::find()->where(['status'=>1])->all();
        return $this->render('config', [
            'model' => $model,
            'server' => $server,
            'serverList' => ArrayHelper::map($servers, 'id','name'),
        ]);
    }

    public function actionDetail($id)
    {
        $server = Server::find()->with(['config'])->where(['id'=>$id])->one();
        $business = ServerBusiness::find()->with(['business','srcurl','target'])->where(['sid'=>$id])->orderBy(['bid'=>SORT_ASC])->asArray()->all();
        return $this->render('detail', [
            'server' => $server,
            'business' => $business,
        ]);
    }

    public function actionStart($id)
    {
        $server = Server::findOne($id);
        $config = $server->config;
        $host = $server->ip;
        $user = $server->username;
        $password = $server->password;
        $port = $server->port;
        $sid = $config->config_sid;
        $mdev = $config->mdev;
        $odev = $config->odev;
        $worker = $config->worker;
        $server_url = $config->server_url;
        $gintval = $config->gintval;
        $cap = $config->cap;
        $pcache = $config->pcache;
        $log_batch = $config->log_batch;
        $log_intval = $config->log_intval;
        $ping = $config->ping;
        $vlan = $config->vlan;
        $path = Yii::$app->params['pythonPath'];
        $cmd = "python2 ".$path."php_tool.py --host ${host} --user ${user} --password ${password} --port ${port} -i ${sid} -m ${mdev} -o ${odev} -c ${worker} -u ${server_url} -g ${gintval} --cap ${cap} --ch ${pcache} --lb ${log_batch} --li ${log_intval} -p ${ping} --vlan ${vlan} -r start --path ${path}";
        $result = shell_exec($cmd);
        $server = Server::findOne($id);
        $server->program_time = time();
        $server->program_status = Server::PRO_STATUS_START;
        $server->save(false);
        return $this->redirect(['index']);
    }

    public function actionRestart($id)
    {
        $server = Server::findOne($id);
        $config = $server->config;
        $host = $server->ip;
        $user = $server->username;
        $password = $server->password;
        $port = $server->port;
        $sid = $config->config_sid;
        $mdev = $config->mdev;
        $odev = $config->odev;
        $worker = $config->worker;
        $server_url = $config->server_url;
        $gintval = $config->gintval;
        $cap = $config->cap;
        $pcache = $config->pcache;
        $log_batch = $config->log_batch;
        $log_intval = $config->log_intval;
        $ping = $config->ping;
        $vlan = $config->vlan;
        $path = Yii::$app->params['pythonPath'];
        $cmd = "python2 ".$path."php_tool.py --host ${host} --user ${user} --password ${password} --port ${port} -i ${sid} -m ${mdev} -o ${odev} -c ${worker} -u ${server_url} -g ${gintval} --cap ${cap} --ch ${pcache} --lb ${log_batch} --li ${log_intval} -p ${ping} --vlan ${vlan} -r restart --path ${path}";
        $result = shell_exec($cmd);
        $server = Server::findOne($id);
        $server->program_time = time();
        $server->program_status = Server::PRO_STATUS_RESTART;
        $server->save(false);
        return $this->redirect(['index']);
    }

    public function actionStop($id)
    {
        $server = Server::findOne($id);
        $config = $server->config;
        $host = $server->ip;
        $user = $server->username;
        $password = $server->password;
        $port = $server->port;
        $sid = $config->config_sid;
        $mdev = $config->mdev;
        $odev = $config->odev;
        $worker = $config->worker;
        $server_url = $config->server_url;
        $gintval = $config->gintval;
        $cap = $config->cap;
        $pcache = $config->pcache;
        $log_batch = $config->log_batch;
        $log_intval = $config->log_intval;
        $ping = $config->ping;
        $vlan = $config->vlan;
        $path = Yii::$app->params['pythonPath'];
        $cmd = "python2 ".$path."php_tool.py --host ${host} --user ${user} --password ${password} --port ${port} -i ${sid} -m ${mdev} -o ${odev} -c ${worker} -u ${server_url} -g ${gintval} --cap ${cap} --ch ${pcache} --lb ${log_batch} --li ${log_intval} -p ${ping} --vlan ${vlan} -r stop --path ${path}";
        $result = shell_exec($cmd);
        $server = Server::findOne($id);
        $server->program_time = time();
        $server->program_status = Server::PRO_STATUS_STOP;
        $server->save(false);
        return $this->redirect(['index']);
    }
}