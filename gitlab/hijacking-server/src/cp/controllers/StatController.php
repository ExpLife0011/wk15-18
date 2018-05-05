<?php
namespace cp\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\data\ActiveDataProvider;
use cp\models\LogStatForm;
use common\models\Server;
use common\models\CpServer;
use common\models\Business;
use yii\helpers\ArrayHelper;
use yii\helpers\Json;

class StatController extends Controller
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
                        'actions' => ['index', 'business'],
                        'allow' =>true,
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
        $model = new LogStatForm();
        $params = Yii::$app->request->getQueryParams();
        $count = 0;
        if (!empty($params['LogStatForm'])) {
            if(!empty($params['LogStatForm']['sid'])){
                $model->load($params);
                $count = $model->stat();
            }
            else{
                Yii::$app->session->setFlash('warning', '请选择服务器!');
            }
        }
        $sids = CpServer::find()->select("sid")->where(['cpid'=>Yii::$app->user->id])->column();
        $servers = Server::find()->where(['id'=>$sids])->all();
        $businesses = $model->getBusinesses();
        
        return $this->render('stat', [
            'model' => $model,
            'count' => $count,
            'serverList' => ArrayHelper::map($servers, 'id','name'),
            'businessList' => ArrayHelper::map($businesses, 'id','name'),
        ]);
    }

    public function actionBusiness()
    {
        $out = [];
        $parents = $_POST['depdrop_parents'];
        if ($parents != null) {
            $sid = $parents[0];
            if (!empty($sid)) {
                $server = Server::findOne($sid);
                $bns = $server->cpBns;
            } else {
                $bns = Business::find()->where(['status'=>Business::STATUS_ACTIVE, 'cpid'=>Yii::$app->user->id])->all();
            }
            $out = ArrayHelper::toArray($bns, [
                'common\models\Business' => [
                    'id',
                    'name'
                ]]);
            echo Json::encode(['output'=>$out, 'selected'=>'']);
            return;
        }
        echo Json::encode(['output'=>$out, 'selected'=>'']);
        return;
    }


}
