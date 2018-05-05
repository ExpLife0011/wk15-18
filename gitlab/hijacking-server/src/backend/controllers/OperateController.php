<?php
namespace backend\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use common\models\Events;
use common\models\Server;
use common\models\Business;
use yii\helpers\ArrayHelper;
use backend\models\EventsForm;
use common\models\Comment;
use common\models\ViewPoint;
use backend\models\CommentForm;
use yii\web\UploadedFile;
use backend\models\ViewPointForm;
use backend\models\ResultForm;
use backend\models\CommentResultForm;
use backend\models\ServerEventsForm;
use backend\models\BusinessEventsForm;
use backend\models\MyArrayHelper;
use common\models\ServerBusiness;

class OperateController extends Controller
{
    public $layout = false;
    public $enableCsrfValidation;

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
                        'actions' => ['create', 'today', 'view', 'add-comment', 'comment-result', 'add-view', 'add-result', 'server', 'business'],
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

    public function actionCreate()
    {
        $model = new Events;
        $post = Yii::$app->request->post();
        if ($model->load($post) && $model->saveEvents()) {
            return $this->redirect(['today']);
        }
        
        $servers = Server::find()->all();
        $business = Business::find()->select('id, name')->where(['status'=>[Business::STATUS_ACTIVE,Business::STATUS_CLOSED]])->asArray()->all();
        
        //插入服务器id为0的对所有服务器操作
        $start_server = [];
        $start_server['id'] = 0;
        $start_server['name'] = '全部服务器';
        array_unshift($servers, $start_server);
        //插入业务id为0的软件操作
        $start_business = [];
        $start_business['id'] = 0;
        $start_business['name'] = '软件操作';
        array_unshift($business, $start_business);

        return $this->render('create', [
            'model' => $model,
            'serverList' => MyArrayHelper::map($servers, 'id','name'),
            'businessList' => MyArrayHelper::map($business, 'id','name'),
        ]);
    }

    public function actionToday()
    {
        $model = new EventsForm;
        $today = date("Y-m-d");
        $yesterday = date("Y-m-d",strtotime("-1 day"));
        $tomorrow = date("Y-m-d",strtotime("+1 day"));

        //按日期查询
        if ($model->load(Yii::$app->request->post())) {
            $datas = $model->events();
            $events = $model->getDatas($datas);

            return $this->render('today',[
                'model' => $model,
                'yesterday'=>$yesterday,'tomorrow'=>$tomorrow,
                'result'=>$events['result'],'server'=>$events['server'],'business'=>$events['business']
            ]);
        }

        //获取今日事件
        $beginToday = mktime(0,0,0,date('m'),date('d'),date('Y'));
        $endToday = mktime(0,0,0,date('m'),date('d')+1,date('Y'))-1;
        $ids_today = $model->getIds(date('Y-m-d'));
        $data_today = Events::find()->with(['viewPoint','user'])->where(['between', 'created_at', $beginToday, $endToday])->orWhere(['id'=>$ids_today])->asArray()->all();
        $events_today = $model->getDatas($data_today);

        //获取昨天事件
        $beginYesterday = mktime(0,0,0,date('m'),date('d')-1,date('Y'));
        $endYesterday = mktime(0,0,0,date('m'),date('d'),date('Y'))-1;
        $ids_yesterday = $model->getIds(date('Y-m-d', strtotime('-1 days')));
        $data_yesterday = Events::find()->with(['viewPoint','user'])->where(['between', 'created_at', $beginYesterday, $endYesterday])->orWhere(['id'=>$ids_yesterday])->asArray()->all();
        $events_yesterday = $model->getDatas($data_yesterday);

        $model->cdate = date("Y-m-d", time());
        return $this->render('today',[
            'model' => $model,
            'today'=>$today,'yesterday'=>$yesterday,'tomorrow'=>$tomorrow,
            'result_today'=>$events_today['result'],'server_today'=>$events_today['server'],'business_today'=>$events_today['business'],
            'result_yesterday'=>$events_yesterday['result'],'server_yesterday'=>$events_yesterday['server'],'business_yesterday'=>$events_yesterday['business']
        ]);
    }

    public function actionView($id)
    {
        $event = Events::findOne($id);
        return $this->render('view', [
            'model' => $event,
            'commentList' => $event->comment,
            'viewPointList' => $event->viewPoint,
        ]);
    }

    public function actionAddComment()
    {
        $model = new CommentForm;
        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post())) {
                // $model->imageFile = UploadedFile::getInstance($model, 'imageFile');
                if (!$model->validate()) {
                    foreach($model->getErrors() as $attribute => $errors) {
                        foreach ($errors as $err) {
                            $arr['request'] = 'fail';
                            $arr['msg'] = $err;
                        }
                    }
                }else {
                    $comment = $model->addComment();
                    if ($comment) {
                        $arr['request'] = 'success';
                    }else {
                        $arr['request'] = 'fail';
                        $arr['msg'] = 'dberror';
                    }
                }
            }
        }else {
            $arr['request'] = 'fail';
            $arr['msg'] = 'notpost';
        }

        return json_encode($arr);
    } 

    public function actionCommentResult()
    {
        $model = new CommentResultForm;
        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post())) {
                if (!$model->validate()) {
                    foreach($model->getErrors() as $attribute => $errors) {
                        foreach ($errors as $err) {
                            $arr['request'] = 'fail';
                            $arr['msg'] = $err;
                        }
                    }
                }else {
                    $comment = $model->addCommentResult();
                    if ($comment) {
                        $arr['request'] = 'success';
                    }else {
                        $arr['request'] = 'fail';
                        $arr['msg'] = 'dberror';
                    }
                }
            }
        }else {
            $arr['request'] = 'fail';
            $arr['msg'] = 'notpost';
        }

        return json_encode($arr);
    }

    public function actionAddView()
    {
        $model = new ViewPointForm;
        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post())) {
                if (!$model->validate()) {
                    foreach($model->getErrors() as $attribute => $errors) {
                        foreach ($errors as $err) {
                            $arr['request'] = 'fail';
                            $arr['msg'] = $err;
                        }
                    }
                }else {
                    $view_point = $model->addViewPoint();
                    if ($view_point) {
                        $arr['request'] = 'success';
                    }else {
                        $arr['request'] = 'fail';
                        $arr['msg'] = 'dberror';
                    }
                }
            }
        }else {
            $arr['request'] = 'fail';
            $arr['msg'] = 'notpost';
        }

        return json_encode($arr);
    }

    public function actionAddResult()
    {
        $model = new ResultForm;
        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post())) {
                if (!$model->validate()) {
                    foreach($model->getErrors() as $attribute => $errors) {
                        foreach ($errors as $err) {
                            $arr['request'] = 'fail';
                            $arr['msg'] = $err;
                        }
                    }
                }else {
                    $result = $model->addResult();
                    if ($result) {
                        $arr['request'] = 'success';
                    }else {
                        $arr['request'] = 'fail';
                        $arr['msg'] = 'dberror';
                    }
                }
            }
        }else {
            $arr['request'] = 'fail';
            $arr['msg'] = 'notpost';
        }

        return json_encode($arr);
    }

    public function actionServer()
    {
        $this->enableCsrfValidation = false;

        $servers = Server::find()->all();
        $start_server = [];
        $start_server['id'] = 0;
        $start_server['name'] = '全部服务器';
        array_unshift($servers, $start_server);

        $model = new ServerEventsForm;
        $today = date("Y-m-d");
        $date = date('Y-m-d', strtotime('-10 days'));
        if ($model->load(Yii::$app->request->post())) {
            $datas = $model->events();
            $events = $model->getServerDatas($datas);
            $server = $model->server();
            return $this->render('server',[
                'model' => $model,
                'serverList' => MyArrayHelper::map($servers, 'id','name'),
                'server' => $server,
                'result'=>$events['result'],'datelist'=>$events['datelist'],'business'=>$events['business'],
            ]);
        }
        
        //默认数据   
        $server = Server::find()->where(['status'=>1])->one();
        $ids = $model->getDefaultIds($date, $today);
        $datas = Events::find()->with(['viewPoint','user'])
                ->where(['sid'=>$server->id])
                ->andWhere(['between', 'cdate', $date, $today])
                ->orWhere(['id'=>$ids])->andWhere(['sid'=>$server->id])->andWhere(['between', 'cdate', $date, $today])
                ->orderBy('cdate desc')
                ->asArray()
                ->all();
        $events = $model->getServerDatas($datas);
        return $this->render('server',[
            'model' => $model,
            'serverList' => MyArrayHelper::map($servers, 'id','name'),
            'server' => $server,
            'result'=>$events['result'],'datelist'=>$events['datelist'],'business'=>$events['business'],
        ]);
    }

    public function actionBusiness()
    {
        $this->enableCsrfValidation = false;

        $businesses = Business::find()->where(['status'=>[Business::STATUS_ACTIVE,Business::STATUS_CLOSED]])->all();
        $start_business = [];
        $start_business['id'] = 0;
        $start_business['name'] = '软件操作';
        array_unshift($businesses, $start_business);

        $model = new BusinessEventsForm;
        $today = date("Y-m-d");
        $date = date('Y-m-d', strtotime('-10 days'));
        if ($model->load(Yii::$app->request->post())) {
            $datas = $model->events();
            $events = $model->getBusinessDatas($datas);
            $business = $model->business();
            return $this->render('business',[
                'model' => $model,
                'businessList' => MyArrayHelper::map($businesses, 'id','name'),
                'business' => $business,
                'result'=>$events['result'],'datelist'=>$events['datelist'],'server'=>$events['server'],
            ]);
        }
        
        //默认数据 
        $business = Business::find()->where(['status'=>Business::STATUS_ACTIVE])->one();
        $ids = $model->getDefaultIds($date, $today);
        $datas = Events::find()->with(['viewPoint','user'])
                ->where(['bid'=>$business->id])
                ->andWhere(['between', 'cdate', $date, $today])
                ->orWhere(['id'=>$ids])->andWhere(['bid'=>$business->id])->andWhere(['between', 'cdate', $date, $today])
                ->orderBy('cdate desc')
                ->asArray()
                ->all();
        $events = $model->getBusinessDatas($datas);
        return $this->render('business',[
            'model' => $model,
            'businessList' => MyArrayHelper::map($businesses, 'id','name'),
            'business' => $business,
            'result'=>$events['result'],'datelist'=>$events['datelist'],'server'=>$events['server'],
        ]);
    }
}
