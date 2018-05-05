<?php
namespace console\controllers;

use Yii;
use yii\console\Controller;
use common\models\Server;

class AutoRestartController extends Controller 
{
    public $defaultAction = 'run';

    protected $count = 0;

    protected $max = 100;

    protected $time = 1800;

    // protected $from_email = 'm18234149284@163.com';

    // protected $to_email = '18234827782@163.com';

    public function actionRun()
    {
        while(true) {
            $servers = $this->getServers();
            foreach($servers as $server) {
                //判断业务程序是意外离线，不是由后台停止
                if ($server->program_status == Server::PRO_STATUS_START || $server->program_status == Server::PRO_STATUS_RESTART) {
                    sleep($this->time);
                    //重启业务程序
                    $host = $server->ip;
                    $user = $server->username;
                    $password = $server->password;
                    $port = $server->port;
                    $sid = $server->config->config_sid;
                    $mdev = $server->config->mdev;
                    $odev = $server->config->odev;
                    $worker = $server->config->worker;
                    $server_url = $server->config->server_url;
                    $gintval = $server->config->gintval;
                    $cap = $server->config->cap;
                    $pcache = $server->config->pcache;
                    $log_batch = $server->config->log_batch;
                    $log_intval = $server->config->log_intval;
                    $ping = $server->config->ping;
                    $vlan = $server->config->vlan;
                    $path = Yii::$app->params['pythonPath'];
                    $cmd = "python2 ".$path."php_tool.py --host ${host} --user ${user} --password ${password} --port ${port} -i ${sid} -m ${mdev} -o ${odev} -c ${worker} -u ${server_url} -g ${gintval} --cap ${cap} --ch ${pcache} --lb ${log_batch} --li ${log_intval} -p ${ping} --vlan ${vlan} -r restart --path ${path}";
                    $result = shell_exec($cmd);
                    
                    $server->program_time = time();
                    $server->program_status = Server::PRO_STATUS_RESTART;
                    $server->save(false);

                    $this->time = 0;
                }
                $this->count++;
            }

            if ($this->count >= $this->max) {
                break;
            }
        }
    }

    public function getServers() {
        $list = [];
        $servers = Server::find()->with('config')->where(['status'=>1])->all();
        foreach ($servers as $server) {
            if (!$server->getActive($server->id)) {
                array_push($list, $server);
            }
        }
        return $list;
    }

    public function actionNotice()
    {
        $servers = $this->getServers();
        foreach($servers as $server) {
            sleep($this->time);
            $mail= Yii::$app->mailer->compose();   
            $mail->setTo(Yii::$app->params['toEmail']);  
            $mail->setSubject("业务程序离线通知");
            $mail->setHtmlBody("<br>您好！<br/>现通知您，".$server->id.".".$server->name." 业务程序意外离线！");
            $this->time = 0; 
            
            if (!$mail->send()) {
                Yii::error($server->id.".".$server->name.' 业务程序离线通知邮件发送失败!');
            }
        }
    }
}