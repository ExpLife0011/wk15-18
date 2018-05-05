<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "config".
 *
 * @property integer $id
 * @property integer $sid
 * @property integer $worker
 * @property string $cap
 * @property integer $pcache
 * @property integer $gintval
 * @property integer $config_sid
 * @property integer $log_batch
 * @property integer $log_intval
 * @property string $mdev
 * @property string $odev
 * @property integer $ping
 * @property string $server_url
 * @property integer $vlan
 * @property integer $created_at
 * @property integer $updated_at
 */
class Config extends ActiveRecord
{
    
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
        return 'config';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['mdev', 'odev', 'server_url', 'config_sid', 'worker', 'gintval'], 'required'],
            [['worker', 'pcache', 'gintval', 'config_sid', 'log_batch', 'log_intval', 'ping', 'vlan'], 'integer'],
            [['cap', 'mdev', 'odev', 'server_url'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'worker' => '并发线程数(-c) *',
            'cap' => '引擎(-cap)',
            'pcache' => '包缓存大小(-ch)',
            'gintval' => '全局执行间隔(-g)  *',
            'config_sid' => '业务源(-i)  *',
            'log_batch' => '批量上传日志数(-lb)',
            'log_intval' => '日志上传时间(-li)',
            'mdev' => '入口网卡(-m)  *',
            'odev' => '出口网卡(-o)  *',
            'ping' => 'Ping服务器时间(-p)',
            'server_url' => '接口地址(-u)  *',
            'vlan' => '发送包数量(-vlan)',
        ];
    }

    public function saveConfig($id, $config_id)
    {
        if ($config_id) {
            $config = static::findOne($config_id);
        }else {
            $config = new static;
        }
        $config->sid = $id;
        $config->mdev = $this->mdev;
        $config->odev = $this->odev;
        $config->server_url = $this->server_url;
        $config->config_sid = $this->config_sid;
        $config->worker = $this->worker;
        $config->gintval = $this->gintval;
        if ($this->pcache) {
            $config->pcache = $this->pcache;
        }
        if ($this->log_batch) {
            $config->log_batch = $this->log_batch;
        }
        if ($this->log_intval) {
            $config->log_intval = $this->log_intval;
        }
        if ($this->ping) {
            $config->ping = $this->ping;
        }
        if ($this->vlan) {
            $config->vlan = $this->vlan;
        }
        if ($this->cap) {
            $config->cap = $this->cap;
        }

        if ($config->save()) {
            return $config;
        }else {
            return false;
        }
    }

    public function getServer()
    {
        return $this->hasOne(Server::className(), ['id' => 'sid']);
    }
}
