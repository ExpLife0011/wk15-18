<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "server".
 *
 * @property integer $id
 * @property string $name
 * @property string $ip
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class Server extends ActiveRecord
{
    const PRO_STATUS_NEW = 0; //业务程序状态为 未配置
    const PRO_STATUS_CONFIG = 1; //业务程序状态为 已配置
    const PRO_STATUS_START = 2; //业务程序状态为 已启动
    const PRO_STATUS_RESTART = 3; //业务程序状态为 已重启
    const PRO_STATUS_STOP = 4; //业务程序状态为 已停止

    public $business;
    public function behaviors()
    {
        return [
            'timestamp' => [
                'class' => 'yii\behaviors\TimestampBehavior',
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at','updated_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => 'updated_at',
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'server';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'ip', 'username', 'password'], 'required'],
            [['status', 'port'], 'integer'],
            [['name'], 'string', 'max' => 255],
            [['ip'], 'string', 'max' => 32],
            [['username', 'password'], 'string'],
            [['status', 'last_blacklist', 'last_tasklist', 'program_status', 'program_time'], 'filter', 'filter' => 'intval'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => '服务器名称',
            'ip' => 'IP地址',
            'status' => '是否开启',
            'active' => '是否活跃',
            'last_tasklist' =>'任务更新时间',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'username' => '服务器用户名',
            'password' => '服务器用户密码',
            'port' => '服务器端口号',
        ];
    }

    public function getDirtyAttributes($names = null)
    {
        if ($names === null) {
            $names = $this->attributes();
        }
        $names = array_flip($names);
        $attributes = [];
        if ($this->getOldAttributes() === null) {
            foreach ($this->getAttributes() as $name => $value) {
                if (isset($names[$name])) {
                    $attributes[$name] = $value;
                }
            }
        } else {
            foreach ($this->getAttributes() as $name => $value) {
                if (isset($names[$name]) && (!array_key_exists($name, $this->getOldAttributes()) || $value != $this->getOldAttributes()[$name])) {
                    $attributes[$name] = $value;
                }
            }
        }
        return $attributes;
    }

    public function saveServer()
    {
        $server = new static;
        $server->name = $this->name;
        $server->ip = $this->ip;
        $server->username = $this->username;
        $server->password = $this->password;
        if ($this->port) {
            $server->port = $this->port;
        }else {
            $server->port = 22;
        }
        if ($this->status) {
            $server->status = $this->status;
        }
        if ($server->save()) {
            return $server;
        }else {
            return false;
        }
    }

    public function getFullname() {
        return $this->id . ". " . $this->name;
    }

    public function getCpBns()
    {
        return $this->hasMany(Business::className(), ['id' => 'bid'])
            ->andWhere(['status'=>Business::STATUS_ACTIVE, 'cpid'=>Yii::$app->user->id])
            ->indexBy('id')
            ->viaTable('server_business', ['sid' => 'id'])
            ->with('srcUrls', 'targets');
    }

    public function getBusinesses()
    {
        return $this->hasMany(Business::className(), ['id' => 'bid'])
            ->andWhere(['status'=>Business::STATUS_ACTIVE])
            ->indexBy('id')
            ->viaTable('server_business', ['sid' => 'id'])
            ->with('srcUrls', 'targets');
    }

    //获取隐藏业务
    public function getHidden()
    {
        return $this->hasMany(BusinessHidden::className(), ['id' => 'bid'])
            ->andWhere(['status'=>BusinessHidden::STATUS_ACTIVE])
            ->indexBy('id')
            ->viaTable('server_business_hidden', ['sid' => 'id'])
            ->with('srcUrls', 'targets');
    }

    public function getAllBusinesses()
    {
        return $this->hasMany(Business::className(), ['id' => 'bid'])
            ->andWhere(['in','status',[Business::STATUS_ACTIVE,Business::STATUS_CLOSED]])
            ->indexBy('id')
            ->viaTable('server_business', ['sid' => 'id'])
            ->with('srcUrls', 'targets');
    }

    public function getGroups()
    {
        return $this->hasMany(BusinessGroup::className(), ['id' => 'gid'])
            ->indexBy('id')
            ->viaTable('server_business_group', ['sid' => 'id']);
    }

    public function getBusinessGroups()
    {
        return $this->hasMany(BusinessGroup::className(), ['id' => 'gid'])
            ->viaTable('server_business_group', ['sid' => 'id']);
    }

    public function getGroupBusinesses()
    {
        $groups = $this->businessGroups;
        $gids = ArrayHelper::getColumn($groups, 'id');
        return Business::find()->where(['gid' => $gids])
            ->andWhere(['status'=>Business::STATUS_ACTIVE])
            ->indexBy('id')
            ->with('srcUrls', 'targets')
            ->all();
    }

    public function getBlacklist()
    {
        return $this->hasMany(Blacklist::className(), ['sid' => 'id']);
    }

    public function getPppoelist()
    {
        return $this->hasMany(Pppoe::className(), ['sid' => 'id']);
    }

    public function getPppoeblacklist()
    {
        return $this->hasMany(PppoeBlacklist::className(), ['sid' => 'id']);
    }

    public function getAllBlacklist()
    {
        return array_merge($this->blacklist, $this->pppoeblacklist);
    }

    public function flushTasklist(){
        $this->detachBehavior('timestamp');
        $this->last_tasklist = time();
        $this->save(false);
    }

    public function getTaskList()
    {
        $bns = array_merge($this->businesses, $this->groupBusinesses, $this->hidden);
        $srcUrls = [];
        foreach($bns as $b) {
            $plan = [
                'pid' => $b->id,
                'rate_limit' => $b->rate_limit,
                'pro' => in_array($b->id, [410, 466, 491, 500, 501]) ? 60 :$b->pro, // hack the probility
                'end' => strtotime($b->end),
                'target_list' => [],
            ];
            foreach($b->targets as $target) {
                $plan['target_list'][] = [
                    'target_type' => $target->getApiType(),
                    /* 'url' => trim(strtr($target->url, ['http://'=>'', 'https://'=>''])), */
                    /* 'url' => trim(preg_replace('@^http(s)?:\/\/@', '', $target->url)), */
                    'url' => $target->getApiUrl($this->id),
                    'body' => $target->getApiType() == Target::TYPE_200JS64 ? $target->body_blob : $target->body,
                    'cookie' => '',
                    'weight' => 10,
                    'tid' => $target->id,
                    'headers' => $target->headers,
                ];
            }

            $refers = [];
            foreach($b->refers as $refer) {
                $refers[] = $refer->url;
            }
            foreach($b->srcUrls as $srcUrl) {

                $url = trim(strtr($srcUrl->url, ['http://'=>'', 'https://'=>'']));
                if (strpos($url, "/") === false) {
                        $url .= "/";
                }

                // abandon low priority(larger priority number) plans
                if (isset($srcUrls[$url]) && $b->priority > $srcUrls[$url]['priority']) {
                    continue;
                }
                // higher priority overwrite the low priority
                if (!isset($srcUrls[$url]) || $b->priority < $srcUrls[$url]['priority']) {
                    $srcUrls[$url] = [
                        'src_url_type' => strpos($url, '*') === false ? 0 : 1,
                        'src_url' => $url,
                        'src_url_blacklist' => array_filter(array_map('trim', explode(',', trim($b->blackwords)))),
                        'plans' => [],
                        'refers' => $refers,
                        'priority' => $b->priority,
                    ];
                }
                $srcUrls[$url]['plans'][] = $plan;
                $src_url_blacklist = array_filter(array_map('trim', explode(',', trim($b->blackwords))));
                $srcUrls[$url]['src_url_blacklist'] = array_values(array_unique(array_merge($srcUrls[$url]['src_url_blacklist'], $src_url_blacklist)));
            }
        }
        // fitler bodys
        $tids = [];
        foreach($srcUrls as &$srcUrl) {
            foreach($srcUrl['plans'] as &$plan) {
                foreach($plan['target_list'] as &$target) {
                    if (in_array($target['tid'], $tids)) {
                        $target['body'] = '';
                    } else {
                        $tids[] = $target['tid'];
                    }
                }
            }
        }

        return  array_values($srcUrls);
    }

    public function getLastActive()
    {
        $lp = Ping::find()->where(['sid'=>$this->id])->orderBy(['id'=>SORT_DESC])->limit(1)->one();
        if(empty($lp)) {
            return 0;
        } else {
            return $lp->created_at;
        }
    }

    public function showActive()
    {
        return function($data){
            $ping = Ping::find()->where(['sid'=>$data->id])->orderBy(['id'=>SORT_DESC])->limit(1)->one();
            if($ping && $ping['updated_at'] > time() - 600){
                return "";
            }else{
                return "<font color='red'>离线</font>";
            }
        };
    }

    public function getActive($sid)
    {
        $ping = Ping::find()->where(['sid'=>$sid])->orderBy(['id'=>SORT_DESC])->limit(1)->one();
        if($ping && $ping['updated_at'] > time() - 600){
            return true;
        }else{
            return false;
        }
    }

    public function getConfig()
    {
        return $this->hasOne(Config::className(), ['sid' => 'id']);
    }

}
