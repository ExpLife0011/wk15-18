<?php
namespace backend\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use common\models\BehaviorRecord;
use yii\data\ActiveDataProvider;
use common\models\Business;
use common\models\Server;
use backend\models\MyArrayHelper;
use backend\models\RecordForm;
use common\models\BusinessGroup;
use backend\models\DownloadForm;

class BehaviorController extends Controller
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
                        'actions' => ['index', 'download', 'download-all'],
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
        $model = new RecordForm;
        $dataProvider = new ActiveDataProvider([
            'query' => $model->data(),
        ]);

        $servers = Server::find()->all();
        $businesses = Business::find()->where(['status'=>[Business::STATUS_ACTIVE,Business::STATUS_CLOSED]])->all();
        $groups = BusinessGroup::find()->where(['deleted'=>BusinessGroup::STATUS_ACTIVE])->all();
        if ($model->load(Yii::$app->request->get())) {
            $dataProvider = new ActiveDataProvider([
                'query' => $model->record(),
            ]);
        }
        
        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'model' => $model,
            'serverList' => MyArrayHelper::map($servers, 'id','name'),
            'businessList' => MyArrayHelper::map($businesses, 'id','name'),
            'groupList' => MyArrayHelper::map($groups, 'id','name'),
        ]);
    }

    public function actionDownload()
    {
        $model = new DownloadForm;
        $get = Yii::$app->request->get();
        if ($model->load($get) && $model->validate()) {
            $cdate_start = $get['DownloadForm']['cdate_start'];
            $cdate_end = $get['DownloadForm']['cdate_end'];
            $records = BehaviorRecord::find()->select('uid, role, behavior, created_at')->with(['user','cpuser'])->where(['between', 'cdate', $cdate_start, $cdate_end])->orderBy('created_at desc')->asArray()->all();
            $s = '操作时间              操作人    角色              操作行为'."\n";
            foreach ($records as $record) {
                if($record['role'] == BehaviorRecord::ROLE_MANAGER) {
                    $s .= date('Y-m-d H:i:s', $record['created_at']).'   '.$record['user']['username'].'   管理员   '.$record['behavior']."\n";
                }else {
                    $s .= date('Y-m-d H:i:s', $record['created_at']).'   '.$record['cpuser']['username'].'   CP用户   '.$record['behavior']."\n";
                }
            }
            return Yii::$app->response->sendContentAsFile($s,'log.txt');
        }
        return $this->render('download' ,['model' => $model]);
    }
    
}