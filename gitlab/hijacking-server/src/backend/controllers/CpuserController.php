<?php
namespace backend\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use common\models\Cpuser;
use common\models\Server;
use backend\models\AssignForm;
use yii\data\ActiveDataProvider;
use common\models\BehaviorRecord;

class CpuserController extends Controller
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
                        'actions' => ['create','update','assign-server', 'index','assign'],
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
        $model = new Cpuser;
        $model->setScenario('signup');
        $post = Yii::$app->request->post();
        if ($model->load($post) && $model->save()) {
            return $this->redirect(['index']);
        }
        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionIndex(){
        $dataProvider = new ActiveDataProvider([
            'query' => Cpuser::find(),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);        
    }


    public function actionUpdate(){
        $model = new Cpuser;
        $id = $_GET['id'];
        if($id){
            $model = $this->loadModel($id);
            if (!empty($_POST)) {
                if ($model->updateAttrs($_POST['Cpuser'])) {
                    // Yii::$app->session->setFlash('success', '密码修改成功！');
                    // return $this->redirect(Yii::$app->request->getReferrer());
                    return $this->redirect(['index']);
                }
            }
        }
        return $this->render('create',['model'=>$model]);
    }

    public function actionAssignServer($id)
    {
        $model = AssignForm::getServerForm($id);
        $cpuser = Cpuser::findOne($id);

        if ($model->load(Yii::$app->request->post()) && $sids = $model->saveServer($id)) {
            list($del_sids, $add_sids) = $sids;
            $behaviors = '';
            if ($add_sids) {
                $t = '';
                foreach ($add_sids as $sid => $name) {
                    $t .= $sid.'('.$name.'),';
                }
                $behaviors .= '添加分配服务器'.rtrim($t,',').'， ';
            }
            if ($del_sids) {
                $s = '';
                foreach ($del_sids as $sid => $name) {
                    $s .= $sid.'('.$name.'),';
                }
                $behaviors .= '取消分配服务器'.rtrim($s,',').'， ';
            }
            //记录操作行为
            if ($behaviors) {
                $behavior_record = new BehaviorRecord;
                $behavior_record->uid = Yii::$app->user->id;
                $behavior_record->behavior = 'CP用户'.$id.'('.$cpuser->username.') '.rtrim($behaviors,'， ');
                $behavior_record->cdate = date('Y-m-d');
                $behavior_record->cpid = $id;
                $behavior_record->save(false);
            }
            return $this->redirect(['index']);
        }

        $manager = $this->findModel($id);
        $all_servers = Server::find()
            ->where(['status'=>1])
            ->indexBy('id')
            ->all();
        return $this->render('assign', [
            'manager' => $manager,
            'model' => $model,
            'sers' => $all_servers,
        ]);
    }

    protected function findModel($id)
    {
        if (($model = Cpuser::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    public function loadModel($id) {
        $model = Cpuser::findOne(['id'=>$id]);
        if ($model === null) { return false;}
        return $model;
    }

    
}
