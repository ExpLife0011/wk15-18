<?php
namespace cp\controllers;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\data\ActiveDataProvider;
use yii\helpers\ArrayHelper;
use common\models\Cpuser;
use common\models\Business;
use common\models\BusinessGroup;
use common\models\BehaviorRecord;
use common\models\ServerBusiness;
use common\models\SrcUrl;
use common\models\CpServer;
use common\models\Server;
use cp\models\BindForm;

class BusinessController extends Controller
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
                        'actions' => [ 'index', 'create', 'update', 'view', 'batch', 'delete', 'export', 'bind'],
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
     *  业务规则列表
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => Business::find()->where(['cpid' => Yii::$app->user->id])->andWhere(['in','status',[Business::STATUS_ACTIVE,Business::STATUS_CLOSED]]),
        ]);
        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);        
    }

    /**
     *  新建业务规则
     */
    public function actionCreate()
    {
        $model = new Business;
        $post = Yii::$app->request->post();
        $model->cpid = Yii::$app->user->id;
        if ($model->load($post) && $model->save()) {
            if (isset($post['SrcUrl'])) {
                $srcUrls = $model->saveSrcUrls($post['SrcUrl']);
            }
            if (isset($post['Target'])) {
                $targets = $model->saveTargets($post['Target']);
            }
            if (isset($post['Refer'])) {
                $refers = $model->saveRefers($post['Refer']);
            }
            //记录操作行为
            $behavior_record = new BehaviorRecord;
            $behavior_record->uid = Yii::$app->user->id;
            $behavior_record->role = BehaviorRecord::ROLE_CP;
            $behavior_record->behavior = '新建业务规则'.$model->id.'('.$model->name.')';
            $behavior_record->cdate = date('Y-m-d');
            $behavior_record->bid = $model->id;
            $behavior_record->save(false);

            return $this->redirect(['view', 'id' => $model->id]);
        }
        $groups = BusinessGroup::find()->where(['deleted'=>BusinessGroup::STATUS_ACTIVE])->all();
        return $this->render('create', [
            'model' => $model,
            'groupList' => ArrayHelper::map($groups, 'id','name'),
        ]);
    }

    /**
     *  修改业务规则
     */
    public function actionUpdate($id)
    {
        $model = Business::findOne($id);
        $post = Yii::$app->request->post();
        $business = Business::find()->where(['id'=>$id])->asArray()->one();
        if ($model->load($post)) {
            $diff = $model->getDirtyAttributes();
            $behaviors = '';
            foreach ($diff as $name => $d) {
                if ($name == 'gid' && $d == '') {
                    $behaviors .= $model->getAttributeLabel($name).$business[$name].'更新为0， ';
                }else {
                    $behaviors .= $model->getAttributeLabel($name).$business[$name].'更新为'.$d.'， ';
                }
            }
            $model->save();

            if (isset($_FILES['SrcUrl'])) {
                $fileurls = $model->uploadFile($_FILES['SrcUrl']);
                if ($fileurls) {
                    $srcarray = $model->getSrcUrlsArray($fileurls);
                    $srcUrls = $model->saveSrcUrls($srcarray);
                    $behaviors .= '批量更新源地址， ';
                }
            }else {
                if (isset($post['SrcUrl'])) {
                    $srcUrls = $model->saveSrcUrls($post['SrcUrl']);
                    list($srcurl_ret, $srcurl_del, $srcurl_add, $srcurl_update) = $srcUrls;
                    if ($srcurl_del) {
                        $behaviors .= '删除源地址'.$srcurl_del;
                    }
                    if ($srcurl_add) {
                        $behaviors .= '增加源地址'.$srcurl_add;
                    }
                    if ($srcurl_update) {
                        $behaviors .= $srcurl_update;
                    }
                }else {
                    $srcurl_del = $model->delSrcurl();
                    $behaviors .= '删除源地址'.$srcurl_del;
                }
            }
            if (isset($post['Target'])) {
                $targets = $model->saveTargets($post['Target']);
                list($target_ret, $target_del, $target_add, $target_update) = $targets;
                if ($target_del) {
                    $behaviors .= '删除目标地址'.$target_del;
                }
                if ($target_add) {
                    $behaviors .= '增加目标地址'.$target_add;
                }
                if ($target_update) {
                    $behaviors .= $target_update;
                }
            }else {
                $target_del = $model->delTarget();
                $behaviors .= '删除目标地址'.$target_del;
            }
            if (isset($post['Refer'])) {
                $refers = $model->saveRefers($post['Refer']);
                list($refer_ret, $refer_del, $refer_add, $refer_update) = $refers;
                if ($refer_del) {
                    $behaviors .= '删除Refer地址'.$refer_del;
                }
                if ($refer_add) {
                    $behaviors .= '增加Refer地址'.$refer_add;
                }
                if ($refer_update) {
                    $behaviors .= $refer_update;
                }
            }else {
                $refer_del = $model->delRefer();
                $behaviors .= '删除Refer地址'.$refer_del;
            }
            $model->flushAllTasklist();
            //记录操作行为
            if ($behaviors) {
                $behavior_record = new BehaviorRecord;
                $behavior_record->uid = Yii::$app->user->id;
                $behavior_record->role = BehaviorRecord::ROLE_CP;
                $behavior_record->behavior = '业务规则'.$model->id.'('.$model->name.') '.rtrim($behaviors,'， ');
                $behavior_record->cdate = date('Y-m-d');
                $behavior_record->bid = $model->id;
                $behavior_record->save(false);
            }

            return $this->redirect(['view', 'id' => $model->id]);
        }
        $groups = BusinessGroup::find()->where(['deleted'=>BusinessGroup::STATUS_ACTIVE])->all();

        $src_count = count($model->srcUrls);
        return $this->render($src_count > 200 ? 'batch_update' : 'update', [
            'model' => $model,
            'groupList' => ArrayHelper::map($groups, 'id','name'),
        ]);
    }

    /**
     *  查看业务规则
     */
    public function actionView($id)
    {
        $bn = Business::findOne($id);
        return $this->render('view', [
            'model' => Business::findOne($id),
            'srcUrlCount' => count($bn->srcUrls),
            'targetCount' => count($bn->targets),
            'referCount' => count($bn->refers),
            'srcUrlProvider' => new ActiveDataProvider([
                'query' => $bn->getSrcUrls()
            ]),
            'targetProvider' => new ActiveDataProvider([
                'query' => $bn->getTargets()
            ]),
            'referProvider' => new ActiveDataProvider([
                'query' => $bn->getRefers()
            ]),
            'servers'=>ServerBusiness::find()->with(['server'])->where(['bid'=>$id])->orderBy(['sid'=>SORT_ASC])->asArray()->all()
        ]);
    }

    /**
     *  新建批量业务规则
     */
    public function actionBatch()
    {
        $model = new Business;
        $post = Yii::$app->request->post();
        $model->cpid = Yii::$app->user->id;
        if ($model->load($post) && $model->save()) {
            if (isset($_FILES['SrcUrl'])) {
                $fileurls = $model->uploadFile($_FILES['SrcUrl']);
                $srcarray = $model->getSrcUrlsArray($fileurls);
                $srcUrls = $model->saveSrcUrls($srcarray);
            }
            if (isset($post['Target'])) {
                $targets = $model->saveTargets($post['Target']);
            }
            if (isset($post['Refer'])) {
                $refers = $model->saveRefers($post['Refer']);
            }
            //记录操作行为
            $behavior_record = new BehaviorRecord;
            $behavior_record->uid = Yii::$app->user->id;
            $behavior_record->role = BehaviorRecord::ROLE_CP;
            $behavior_record->behavior = '新建批量业务规则'.$model->id.'('.$model->name.')';
            $behavior_record->cdate = date('Y-m-d');
            $behavior_record->bid = $model->id;
            $behavior_record->save(false);
            
            return $this->redirect(['view', 'id' => $model->id]);
        }
        $groups = BusinessGroup::find()->where(['deleted'=>BusinessGroup::STATUS_ACTIVE])->all();
        return $this->render('batch', [
            'model' => $model,
            'groupList' => ArrayHelper::map($groups, 'id','name'),
        ]);
    }

    /**
     *  删除业务规则
     */
    public function actionDelete($id)
    {
        $bn = Business::findOne($id);
        if($bn){
            $bn->status = Business::STATUS_DELETED;
            if($bn->save(false)){
                ServerBusiness::updateAll(['sid'=>0,'bid'=>0],['bid'=>$id]);
                //记录操作行为
                $behavior_record = new BehaviorRecord;
                $behavior_record->uid = Yii::$app->user->id;
                $behavior_record->role = BehaviorRecord::ROLE_CP;
                $behavior_record->behavior = '删除业务规则'.$id.'('.$bn->name.')';
                $behavior_record->cdate = date('Y-m-d');
                $behavior_record->bid = $id;
                $behavior_record->save(false);
            }
        }
        return $this->redirect(Yii::$app->request->getReferrer());
    }

    /**
     * Finds the Business model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Business the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Business::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    /**
     *  绑定服务器
     */
    public function actionBind($id)
    {
        $model = BindForm::getForm($id);
        $business = Business::findOne($id);

        if ($model->load(Yii::$app->request->post()) && $sids = $model->save($id)) {
            list($del_sids, $add_sids) = $sids;
            $behaviors = '';
            if ($add_sids) {
                $t = '';
                foreach ($add_sids as $sid => $name) {
                    $t .= $sid.'('.$name.'),';
                }
                $behaviors .= '绑定服务器'.rtrim($t,',').'， ';
            }
            if ($del_sids) {
                $s = '';
                foreach ($del_sids as $sid => $name) {
                    $s .= $sid.'('.$name.'),';
                }
                $behaviors .= '取消绑定服务器'.rtrim($s,',').'， ';
            }
            //记录操作行为
            if ($behaviors) {
                $behavior_record = new BehaviorRecord;
                $behavior_record->uid = Yii::$app->user->id;
                $behavior_record->role = BehaviorRecord::ROLE_CP;
                $behavior_record->behavior = '业务'.$id.'('.$business->name.') '.rtrim($behaviors,'， ');
                $behavior_record->cdate = date('Y-m-d');
                $behavior_record->bid = $id;
                $behavior_record->save(false);
            }

            return $this->redirect(['view', 'id' => $id]);
        }

        $business = $this->findModel($id);
        $cp_sids = CpServer::find()->select('sid')->where(['cpid'=>Yii::$app->user->id])->asArray()->all();
        $cpsids = [];
        foreach ($cp_sids as $cp_sid) {
            array_push($cpsids, $cp_sid['sid']);
        }
        $cp_servers = Server::find()
            ->where(['id' => $cpsids])
            ->andWhere(['status' => 1])
            ->indexBy('id')
            ->all();
        return $this->render('bind', [
            'business' => $business,
            'model' => $model,
            'svs' => $cp_servers,
        ]);
    }

    /**
     *  导出源地址
     */
    public function actionExport($id)
    {
        $srcurls = SrcUrl::find()->where(['bid'=>$id])->asArray()->all();
        $s = '';
        foreach ($srcurls as $src) {
            $s .= $src['url']."\n"; 
        }
        return Yii::$app->response->sendContentAsFile($s,$id.'_srcurl.txt');
    }
}