<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use common\models\Server;
use common\models\Business;
use backend\models\AssignForm;
use common\models\Blacklist;
use common\models\ServerBusiness;
use common\models\BusinessGroup;
use common\models\ServerBusinessGroup;
use common\models\BehaviorRecord;
use common\models\Pppoe;

class ServerController extends Controller
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
                        'actions' => ['create','update','view', 'index', 'assign','blacklist','updateblack','delete','switch','group','showgroup', 'refresh', 'pppoe', 'delpppoe', 'updatepppoe'],
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

    /**
     * Lists all Server models.
     * @return mixed
     */
    public function actionIndex()
    {
        $model = new Server;
        $dataProvider = new ActiveDataProvider([
            'query' => $model->find()->orderBy(['status'=>SORT_DESC]),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,'model'=>$model
        ]);
    }

    public function actionCreate()
    {
        $model = new Server;
        if ($model->load(Yii::$app->request->post()) && $server = $model->saveServer()) {
            //记录操作行为
            $behavior_record = new BehaviorRecord;
            $behavior_record->uid = Yii::$app->user->id;
            $behavior_record->behavior = '添加服务器'.$server->id.'('.$server->name.')';
            $behavior_record->cdate = date('Y-m-d');
            $behavior_record->sid = $server->id;
            $behavior_record->save(false);

            return $this->redirect(['view', 'id' => $server->id]);
        }
        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Displays a single Server model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        $business = ServerBusiness::find()->with(['business','srcurl','target'])->where(['sid'=>$id])->orderBy(['bid'=>SORT_ASC])->asArray()->all();
         $groups = ServerBusinessGroup::find()->with(['groups'])->where(['sid'=>$id])->asArray()->all();
        return $this->render('view', [
            'model' => $this->findModel($id),
            'business'=>$business,
            'businessGroup'=>$groups,
            // 'businessProvider' => new ActiveDataProvider([
            //     'query' => ServerBusiness::find()->with(['business','srcurl','target'])->where(['sid'=>$id])
            // ]),
        ]);
    }

    public function actionShowgroup($id){
        return $this->render('show_group_business', [
            'model' => BusinessGroup::findOne($id),
            'businessProvider' => new ActiveDataProvider([
                'query' => Business::find()->with(['srcUrls','targets'])->where(['gid'=>$id,'status'=>Business::STATUS_ACTIVE])
            ]),
        ]);
    }

    /**
     * Updates an existing Server model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $model->password = '';
        $server = Server::find()->where(['id'=>$id])->asArray()->one();
        if ($model->load(Yii::$app->request->post())) {
            $diff = $model->getDirtyAttributes();
            $behaviors = '';
            foreach ($diff as $name => $d) {
                if ($name != 'password') {
                    $behaviors .= $model->getAttributeLabel($name).$server[$name].'更新为'.$d.'， ';
                }
            }
            $model->save();

            //记录操作行为
            if ($behaviors) {
                $behavior_record = new BehaviorRecord;
                $behavior_record->uid = Yii::$app->user->id;
                $behavior_record->behavior = '服务器'.$model->id.'('.$model->name.') '.rtrim($behaviors,'， ');
                $behavior_record->cdate = date('Y-m-d');
                $behavior_record->sid = $model->id;
                $behavior_record->save(false);
            }

            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Finds the Server model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Server the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Server::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    public function actionAssign($id)
    {
        $model = AssignForm::getForm($id);
        $server = Server::findOne($id);

        if ($model->load(Yii::$app->request->post()) && $bids = $model->save($id)) {
            list($del_bids, $add_bids) = $bids;
            $behaviors = '';
            if ($add_bids) {
                $t = '';
                foreach ($add_bids as $bid => $name) {
                    $t .= $bid.'('.$name.'),';
                }
                $behaviors .= '添加分配业务'.rtrim($t,',').'， ';
            }
            if ($del_bids) {
                $s = '';
                foreach ($del_bids as $bid => $name) {
                    $s .= $bid.'('.$name.'),';
                }
                $behaviors .= '取消分配业务'.rtrim($s,',').'， ';
            }
            //记录操作行为
            if ($behaviors) {
                $behavior_record = new BehaviorRecord;
                $behavior_record->uid = Yii::$app->user->id;
                $behavior_record->behavior = '服务器'.$id.'('.$server->name.') '.rtrim($behaviors,'， ');
                $behavior_record->cdate = date('Y-m-d');
                $behavior_record->sid = $id;
                $behavior_record->save(false);
            }

            return $this->redirect(['view', 'id' => $id]);
        }

        $server = $this->findModel($id);
        $all_businesses = Business::find()
            ->where(['gid' =>  0])->andWhere(['in','status',[Business::STATUS_ACTIVE,Business::STATUS_CLOSED]])
            ->indexBy('id')
            ->all();
        return $this->render('assign', [
            'server' => $server,
            'model' => $model,
            'bns' => $all_businesses,
        ]);
    }

    public function actionGroup($id)
    {
        $model = AssignForm::getGroupForm($id);
        $server = Server::findOne($id);

        $posts = Yii::$app->request->post();
        if ($model->load($posts)) {
            if (empty($posts['AssignForm']['gids'])) {
                $model->gids = [];
            }
            if ($bids = $model->saveGroup($id)) {
                list($del_bids, $add_bids) = $bids;
                $behaviors = '';
                if ($add_bids) {
                    $behaviors .= '添加分配业务组'.implode(',', $add_bids).'， ';
                }
                if ($del_bids) {
                    $behaviors .= '取消分配业务组'.implode(',', $del_bids).'， ';
                }
                //记录操作行为
                if ($behaviors) {
                    $behavior_record = new BehaviorRecord;
                    $behavior_record->uid = Yii::$app->user->id;
                    $behavior_record->behavior = '服务器'.$id.'('.$server->name.') '.rtrim($behaviors,'， ');
                    $behavior_record->cdate = date('Y-m-d');
                    $behavior_record->sid = $id;
                    $behavior_record->save(false);
                }

                return $this->redirect(['view', 'id' => $id]);
            }
        }

        $server = $this->findModel($id);
        $all_groups = BusinessGroup::find()
            ->where(['deleted' =>  BusinessGroup::STATUS_ACTIVE])
            ->indexBy('id')
            ->all();
        return $this->render('group', [
            'server' => $server,
            'model' => $model,
            'groups' => $all_groups,
        ]);
    }

    public function actionBlacklist($id){
        $model = Blacklist::getBlack($id);
        $post = Yii::$app->request->post();
        if ($model->load($post) && $model->save()) {
            return $this->redirect(["blacklist",'id'=>$id]);
        }
        $dataProvider = new ActiveDataProvider([
            'query' => Blacklist::find()->where(['sid'=>$id]),
        ]);

        return $this->render('blacklist', ['model'=>$model,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionDelete($id){
        $model = Blacklist::findOne($id);
        $sid = $model->sid;
        $model->delete();
        return $this->redirect(["blacklist",'id'=>$sid]);
    }

    public function actionUpdateblack($id){
        $post = Blacklist::findOne($id);
        if (!$post) {
            throw new NotFoundHttpException();
        }
        if($post->updateBlack($id)){
            return $this->redirect(["blacklist",'id'=>$post->sid]);
        }
        $dataProvider = new ActiveDataProvider([
            'query' => Blacklist::find()->where(['sid'=>$post->sid]),
        ]);
        return $this->render('blacklist', ['model' => $post,'dataProvider' => $dataProvider]);
    }

    public function actionSwitch($id){
        $model = Server::findOne($id);
        if($model->status == 0){
            $model->status = 1;
        }else{
            $model->status = 0;
        }
        if ($model->save(false)) {
            //记录操作行为
            $behavior_record = new BehaviorRecord;
            $behavior_record->uid = Yii::$app->user->id;
            $behavior_record->behavior = $model->status ? '开启服务器'.$model->id.'('.$model->name.')' : '关闭服务器'.$model->id.'('.$model->name.')';
            $behavior_record->cdate = date('Y-m-d');
            $behavior_record->sid = $id;
            $behavior_record->save(false);
        }else {
            Yii::error('switch server failed !');
        }

        return $this->redirect(Yii::$app->request->getReferrer());
    }

    public function actionRefresh($id)
    {
        $server = Server::findOne($id);
        $server->last_tasklist = time();
        if (!$server->save(false)) {
            Yii::error('更新任务时间失败!');
        }
        return $this->redirect(Yii::$app->request->getReferrer());
    }

    //PPPOE帐号管理
    public function actionPppoe($id)
    {
        $model = Pppoe::getPppoe($id);
        $post = Yii::$app->request->post();
        if ($model->load($post) && $model->save()) {
            return $this->redirect(["pppoe",'id'=>$id]);
        }
        $dataProvider = new ActiveDataProvider([
            'query' => Pppoe::find()->where(['sid'=>$id]),
        ]);

        return $this->render('pppoe', ['model'=>$model,
            'dataProvider' => $dataProvider,
        ]);
    }

    //删除PPPOE帐号
    public function actionDelpppoe($id)
    {
        $model = Pppoe::findOne($id);
        $sid = $model->sid;
        $model->delete();
        return $this->redirect(["pppoe",'id'=>$sid]);
    }

    //修改PPPOE帐号
    public function actionUpdatepppoe($id){
        $post = Pppoe::findOne($id);
        if (!$post) {
            throw new NotFoundHttpException();
        }
        if($post->updatePppoe($id)){
            return $this->redirect(["pppoe",'id'=>$post->sid]);
        }
        $dataProvider = new ActiveDataProvider([
            'query' => Pppoe::find()->where(['sid'=>$post->sid]),
        ]);
        return $this->render('pppoe', ['model' => $post,'dataProvider' => $dataProvider]);
    }

}
