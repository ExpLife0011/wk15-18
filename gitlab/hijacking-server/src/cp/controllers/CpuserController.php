<?php
namespace cp\controllers;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use common\models\Cpuser;
use common\models\CpServer;
use common\models\Server;
use common\models\ServerBusiness;
use common\models\ServerBusinessGroup;
use common\models\BusinessGroup;
use common\models\Business;
use yii\data\ActiveDataProvider;


class CpuserController extends Controller{
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
                        'actions' => ['create','update','view', 'admin','statistic','batch','server','serverview','showgroup'],
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

    public function actionAdmin()
    {
        $model = new Cpuser;
        $data = $model->getAllData();
        return $this->render('admin',['data'=>$data]);
    }

    public function actionCreate()
    {
        $model = new Cpuser;
        $model->setScenario('signup');
        if($model->load($_POST) && $model->save()){
            return $this->redirect("/manager/admin");
        }
        return $this->render('create',['model'=>$model]);
    }

    public function actionDelete(){
        $model = new Cpuser();
        $id = $_GET['id'];
        $model->deleteUser($id);
        return $this->redirect("/manager/admin");
    }

    public function actionUpdate(){
        $model = new Cpuser;
        $id = $_GET['id'];
        if($id){
            $model = $this->loadModel($id);
            if (!empty($_POST)) {
                if ($model->updateAttrs($_POST['Cpuser'])) {
                    Yii::$app->session->setFlash('success', '密码修改成功！');
                    // return $this->redirect(Yii::$app->request->getReferrer());
                    // return $this->redirect("/manager/admin");
                }
            }
        }
        return $this->render('create',['model'=>$model]);
    }
    /**
     * Returns the data model based on the primary key given in the GET variable.
     * If the data model is not found, an HTTP exception will be raised.
     * @param integer the ID of the model to be loaded
     */
    public function loadModel($id) {
        $model = Cpuser::findOne(['id'=>$id]);
        if ($model === null) { return false;}
        return $model;
    }

    public function actionServer(){
        $model = new CpServer;
        $dataProvider = $model->search();

        return $this->render('server', [
            'dataProvider' => $dataProvider,
            'model'=>$model,
        ]);        
    }

    public function actionServerview($id){
        return $this->render('server_view', [
            'model' => Server::findOne($id),
            'business'=>ServerBusiness::find()->joinWith(['business'=>function($query){
                    $query->andWhere(['shield'=>0,'cpid'=>Yii::$app->user->id]);
                }])->with(['srcurl','target'])->where(['sid'=>$id])->asArray()->all(),
            'businessGroup' => ServerBusinessGroup::find()->with(['groups'])->where(['sid'=>$id])->asArray()->all(),
        ]); 
    }

    public function actionShowgroup($id){
        return $this->render('show_group_business', [
            'model' => BusinessGroup::findOne($id),
            'business' =>Business::find()->with(['srcUrls','targets'])->where(['gid'=>$id])->andWhere(['shield'=>Business::STATUS_NOT_SHIELD])->asArray()->all(),
        ]);
    }
}
