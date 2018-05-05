<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use yii\web\UploadedFile;


/**
 * This is the model class for table "business".
 *
 * @property integer $id
 * @property string $name
 * @property integer $rate_limit
 * @property integer $pro
 * @property integer $end
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 */
class Business extends ActiveRecord
{
    const STATUS_DELETED = -1;
    const STATUS_CLOSED = 0;
    const STATUS_ACTIVE = 1;
    const STATUS_NOT_SHIELD = 0;
    const STATUS_SHIELD = 1;
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
        return 'business';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'rate_limit', 'pro', 'end', 'priority'], 'required'],
            [['gid', 'cpid'],'safe'],
            ['gid', 'default', 'value'=>0],
            // ['file_url','safe'],
            [['rate_limit', 'pro', 'status','shield', 'cpid'], 'integer'],
            [['name'], 'string', 'max' => 32],
            [['blackwords'], 'string', 'max' => 256],
            [['priority'], 'integer', 'min' => 1],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => '业务名称',
            'rate_limit' => '执行间隔',
            'pro' => '执行概率',
            'end' => '结束时间',
            'status' => '是否开启',
            'gid' => '业务分组',
            'blackwords' => '排除关键字',
            'shield' => '是否屏蔽',
            'priority' => '优先级',
            'created_at' => '创建时间',
            'cpid' => 'CP用户',
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

    public function getServers()
    {
        return $this->hasMany(Server::className(), ['id' => 'sid'])
            ->viaTable('server_business', ['bid' => 'id']);
    }

    public function getSrcUrls()
    {
        return $this->hasMany(SrcUrl::className(), ['bid' => 'id']);
    }

    public function getTargets()
    {
        return $this->hasMany(Target::className(), ['bid' => 'id']);
    }

    public function getRefers()
    {
        return $this->hasMany(Refer::className(), ['bid' => 'id']);
    }

    public function getGroup()
    {
        return $this->hasOne(BusinessGroup::className(), ['id' => 'gid']);
    }

    public function getCpName()
    {
        return function($data){
            if ($data->cpid){
                $cpuser = Cpuser::findOne($data->cpid);
                if($cpuser){
                    return $cpuser->username;
                }
            }
            return '';
        };
    }

    public function flushAllTasklist()
    {
        foreach($this->servers as $s) {
            $s->flushTasklist();
        }
    }

    /**
     *
     */
    public function saveSrcUrls($data)
    {
        // remove current urls not in data
        $url_del = '';
        foreach ($this->srcUrls as $s) {
            if (!array_key_exists($s->id, $data)) {
                //记录操作行为
                $url_del .= $s->url.'， ';

                $s->delete();
            }
        }
        $ret = [];
        $url_add = '';
        $url_update = '';
        foreach ($data as $key => $d) {
            if (strpos($key, 'n') === 0) {
                $srcUrl = new SrcUrl;
                $srcUrl->bid = $this->id;
                //记录操作行为
                if ($d['url']) {
                    $url_add .= $d['url'].'， ';
                }
            } else {
                $srcUrl = SrcUrl::findOne(['id' => $key, 'bid'=>$this->id]);
                if (empty($srcUrl)) {
                    continue;
                }
                //记录操作行为
                if ($srcUrl->url != $d['url']) {
                    $url_update .= '源地址'.$srcUrl->url.'更新为'.$d['url'].'， ';
                }
            }
            $srcUrl->setAttributes($d);
            if ($srcUrl->validate()) {
                $srcUrl->save(false);
            }
            $ret[$key] = $srcUrl;
        }

        return [$ret, $url_del, $url_add, $url_update];
    }

    /**
     *
     */
    public function saveTargets($data)
    {
        // remove current targets not in data
        $url_del = '';
        foreach ($this->targets as $t) {
            if (!array_key_exists($t->id, $data)) {
                //记录操作行为
                $url_del .= $t->url.'， ';

                $t->delete();
            }
        }
        $ret = [];
        $url_add = '';
        $url_update = '';
        foreach ($data as $key => $d) {
            if (strpos($key, 'n') === 0) {
                $target = new Target;
                $target->bid = $this->id;
                //记录操作行为
                if ($d['content']) {
                    $url_add .= $d['content'].'， ';
                }
            } else {
                $target = Target::findOne(['id' => $key, 'bid'=>$this->id]);
                if (empty($target)) {
                    continue;
                }
                //记录操作行为
                if ($target->content != $d['content']) {
                    $url_update .= '目标地址'.$target->content.'更新为'.$d['content'].'， ';
                }
            }
            $target->setAttributes($d);
            if ($target->validate()) {
                $target->save(false);
            }
            $ret[$key] = $target;
        }
        return [$ret, $url_del, $url_add, $url_update];
    }

    /**
     * 添加 refer
     */
    public function saveRefers($data)
    {
        // remove current refers not in data
        $url_del = '';
        foreach ($this->refers as $r) {
            if (!array_key_exists($r->id, $data)) {
                //记录操作行为
                $url_del .= $r->url.'， ';

                $r->delete();
            }
        }
        $ret = [];
        $url_add = '';
        $url_update = '';
        foreach ($data as $key => $d) {
            if (strpos($key, 'n') === 0) {
                $refer = new Refer;
                $refer->bid = $this->id;
                //记录操作行为
                if ($d['url']) {
                    $url_add .= $d['url'].'， ';
                }
            } else {
                $refer = Refer::findOne(['id' => $key, 'bid'=>$this->id]);
                if (empty($refer)) {
                    continue;
                }
                //记录操作行为
                if ($refer->url != $d['url']) {
                    $url_update .= 'Refer地址'.$refer->url.'更新为'.$d['url'].'， ';
                }
            }
            $refer->setAttributes($d);
            if ($refer->validate()) {
                $refer->save(false);
            }
            $ret[$key] = $refer;
        }

        return [$ret, $url_del, $url_add, $url_update];
    }

    public function uploadFile($file){
        $attachDir = Yii::$app->params['attachDir'];
        $dir = '/srcurl/day_'.date('ymd').'/';
        $save_path = $attachDir.$dir;
        if(!is_dir($save_path)){
            @mkdir($save_path,0777,true);
        }
        $file_path = $save_path.$file['name'];
        $real_path = $dir.$file['name'];
        $model = new UploadedFile;
        $model->tempName = $file['tmp_name'];
        if($model->saveAs($file_path)){
            // $business = self::findOne($this->id);
            // $business->file_url = $real_path;
            // $business->save(false);
            return $file_path;
        }
    }

    public function getSrcUrlsArray($file){
        $handle = @fopen($file,"r");
        $ret = [];
        if($handle){
            $i = 0;
            while (($buffer = fgets($handle,4096)) !== false) {
                $buffer = trim($buffer);
                $ret['n'.$i]['url']=$buffer;
                $i++;
            }
            // print_r($ret);exit;
            return $ret;
        }
        return $ret;
    }

    public function getFullname() {
        return $this->id . ". " . $this->name;
    }

    public function updateSrcUrls($urllist)
    {
        $list = [];
        $src_urls = $this->srcUrls;
        // 删除多余的源地址
        foreach ($src_urls as $src) {
            $list[] = trim($src->url);
            if (!in_array($src->url, $urllist)) {
                $src->delete();
            }
        }
        // 添加新的源地址
        foreach ($urllist as $url) {
            if (!in_array(trim($url), $list)) {
                $src_url = new SrcUrl;
                $src_url->bid = $this->id;
                $src_url->url = trim($url);
                $src_url->save(false);
            }
        }
    }

    public function getSrcUrlsString()
    {
        $arr = [];
        foreach ($this->srcUrls as $s) {
            array_push($arr, $s->url);
        }
        $string = implode(',', $arr);
        return $string;
    }

    public function getTargetsString()
    {
        $arr = [];
        foreach ($this->targets as $t) {
            array_push($arr, $t->url);
        }
        $string = implode(',', $arr);
        return $string;
    }

    public function getRefersString()
    {
        $arr = [];
        foreach ($this->refers as $r) {
            array_push($arr, $r->url);
        }
        $string = implode(',', $arr);
        return $string;
    }

    public function delSrcurl()
    {
        // remove current urls not in data
        $url_del = '';
        foreach ($this->srcUrls as $s) {
            //记录操作行为
            $url_del .= $s->url.'， ';

            $s->delete();
        }
        return $url_del;
    }

    public function delTarget()
    {
        // remove current targets not in data
        $url_del = '';
        foreach ($this->targets as $t) {
            //记录操作行为
            $url_del .= $t->url.'， ';

            $t->delete();
        }
        return $url_del;
    }
    
    public function delRefer()
    {
        // remove current refers not in data
        $url_del = '';
        foreach ($this->refers as $r) {
            //记录操作行为
            $url_del .= $r->url.'， ';

            $r->delete();
        }
        return $url_del;
    }
}
