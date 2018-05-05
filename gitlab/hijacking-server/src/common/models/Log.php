<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "log".
 *
 * @property integer $id
 * @property integer $sid
 * @property string $seq_num
 * @property string $ip
 * @property integer $timestamp
 * @property string $src_url
 * @property integer $pid
 * @property integer $tid
 * @property string $target_url
 * @property integer $created_at
 * @property integer $updated_at
 */
class Log extends \yii\db\ActiveRecord
{
    public $startTime;
    public $endTime;
    /**
     * @inheritdoc
     */
    /* public static function tableName() */
    /* { */
    /*     return 'log'; */
    /* } */

    public static function tableName()
    {
        return 'log';
    }


    /* public function attributes() */
    /* { */
    /*     return ['_id', 'sid', 'seq_num', 'ip', 'timestamp', 'src_url', 'pid', 'tid', 'target_url'];         */
    /* } */

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sid', 'seq_num', 'ip', 'timestamp', 'src_url', 'pid', 'tid', 'target_url', 'created_at', 'updated_at'], 'required'],
            [['sid', 'timestamp', 'pid', 'tid', 'created_at', 'updated_at'], 'integer'],
            [['seq_num', 'ip'], 'string', 'max' => 32],
            [['src_url', 'target_url'], 'string', 'max' => 255],
            [['startTime','endTime','sid','pid'],'required','on'=>'statistic'],
            // ['endTime', 'validateStartAndEnd','on'=>'statistic'],
        ];
    }

    public function validateStartAndEnd(){
        if (!$this->hasErrors()) {
            if (strtotime($this->startTime) > strtotime($this->endTime)) {
                $this->addError('endTime', '结束时间必须大于开始时间!');
            }
        }
    }
    public function scenarios()
    {
        return [
            'statistic' => ['startTime', 'endTime','sid','pid'],
        ];
    }
    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'sid' => 'Sid',
            'seq_num' => 'Seq Num',
            'ip' => 'Ip',
            'timestamp' => 'Timestamp',
            'src_url' => 'Src Url',
            'pid' => 'Pid',
            'tid' => 'Tid',
            'target_url' => 'Target Url',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    public static function countLog($startTime='',$endTime='',$sid='',$bid='')
    {
        $query = static::find();
        if (!empty($startTime)) {
            $query->andWhere('timestamp >= :startTime', [':startTime' => strtotime($startTime)]);
            /* $query->andWhere(['timestamp'=>['$gte' => strtotime($startTime)]]); */
        }
        if (!empty($endTime)) {
            $query->andWhere('timestamp < :endTime', [':endTime' => strtotime($endTime)]);
            /* $query->andWhere(['timestamp'=>['$lte' => strtotime($endTime)]]); */
        }
        if (!empty($sid)) {
            $query->andWhere(['sid' => intval($sid)]);
        }

        if (!empty($bid)) {
            $query->andWhere(['pid' => intval($bid)]);
        }

        return $query->count();
    }

    public function statisticLog($post){
        $startTime = strtotime($post['Log']['startTime']);
        $endTime = strtotime($post['Log']['endTime']);
        $sid = $post['Log']['sid'];
        $pid = $post['Log']['pid'];
        $query = static::find()->where("timestamp>=$startTime and timestamp<$endTime")->andWhere(['sid'=>$sid,'pid'=>$pid]);
        return $query->count();
    }

    public function getServers(){
        $rs = Server::find()->select("id,name")->asArray()->all();
        $data = [];
        if($rs){
            foreach ($rs as $v) {
                $data[$v['id']] = $v['name'];
            }
        }
        return $data;
    }

    public function getBusiness(){
        $rs = Business::find()->select("id,name")->asArray()->all();
        $data = [];
        if($rs){
            foreach ($rs as $v) {
                $data[$v['id']] = $v['name'];
            }
        }
        return $data;
    }

}
