<?php
namespace backend\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\data\ActiveDataProvider;
use backend\models\LogStatForm;
use backend\models\LogListForm;
use common\models\Server;
use common\models\Business;
use yii\helpers\ArrayHelper;
use yii\helpers\Json;
use common\models\StatHistory;
use common\models\ServerBusiness;

class LogController extends Controller
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
                        'actions' => ['stat', 'business','list','server-business'],
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

    public function actionStat()
    {
        $model = new LogStatForm();
        $params = Yii::$app->request->getQueryParams();
        $count = 0;
        if (!empty($params['LogStatForm'])) {
            $model->load($params);
            $count = $model->stat();
        }
        
        $servers = Server::find()->all();
        $rs = [];
        if($servers){
            foreach($servers as $key=>$v){
                $rs[$key]['id'] = $v['id'];
                $rs[$key]['name'] = $v['id'].'-'.$v['name'];
            }
        }
        $businesses = $model->getBusinesses();
        
        return $this->render('stat', [
            'model' => $model,
            'count' => $count,
            'serverList' => ArrayHelper::map($rs, 'id','name'),
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
                $bns = $server->businesses;
            } else {
                $bns = Business::find()->all();
            }
            $rs = [];
            if($bns){
                foreach($bns as $key=>$v){
                    $rs[$key]['id'] = $v['id'];
                    $rs[$key]['name'] = $v['id'].'-'.$v['name'];
                }
            }
            $out = ArrayHelper::toArray($rs, [
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

    public function actionList()
    {
        $model = new LogListForm;
        $yesterday = date("Y-m-d",strtotime("-1 day"));
        $preday = date("Y-m-d",strtotime("-2 day"));
        if ($model->load(Yii::$app->request->post())){
            $datas = $model->loglist();
            list($sids, $bids, $result, $presult, $total_sids, $pretotal) = $datas;

            $servers = Server::find()->where(['id'=>$sids])->indexBy('id')->all(); 
            $businesses = Business::find()->where(['id'=>$bids])->indexBy('id')->all();

            return $this->render('list',['model'=>$model,'result'=>$result,'presult'=>$presult,'server'=>$servers,'business'=>$businesses,'yesterday'=>$yesterday,'preday'=>$preday,'total'=>$total_sids,'pretotal'=>$pretotal]);
        }else {
            $model->cdate = date("Y-m-d",time());
            return $this->render('list',['model'=>$model,'yesterday'=>$yesterday,'preday'=>$preday]);
        }
    }

    public function actionServerBusiness()
    {
        $datas = ServerBusiness::find()->with(['business'])->asArray()->all();
        $sids = []; 
        $bids = []; 
        $result = [];
        $time = [];
        if ($datas) {
            foreach($datas as $log) {
                $sid = $log['sid']; 
                $bid = $log['bid']; 
                if (!in_array($sid, $sids)) { 
                    array_push($sids, $sid); 
                } 
                if (!in_array($bid, $bids)) { 
                    array_push($bids, $bid); 
                } 
                $result[$sid][$bid] = $log['business']['status'];
                $time[$sid][$bid] = $log['created_at'];
            }
        }            
        $servers = Server::find()->where(['id'=>$sids,'status'=>1])->indexBy('id')->all(); 
        $businesses = Business::find()->where(['id'=>$bids,'status'=>Business::STATUS_ACTIVE])->indexBy('id')->all();
        
        return $this->render('server-business',['result'=>$result,'time'=>$time,'server'=>$servers,'business'=>$businesses]);
    }
}
