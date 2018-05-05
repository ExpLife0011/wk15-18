<?php

use yii\db\Schema;
use yii\db\Migration;

class m170111_023725_add_config_table extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%config}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'worker' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 3',
            'cap' => Schema::TYPE_STRING . ' NOT NULL DEFAULT "libpcap"',
            'pcache' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 100',
            'gintval' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 10',
            'config_sid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'log_batch' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 10',
            'log_intval' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 30',
            'mdev' => Schema::TYPE_STRING . ' NOT NULL DEFAULT "eth1"',
            'odev' => Schema::TYPE_STRING . ' NOT NULL DEFAULT "eth0"',
            'ping' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 60',
            'server_url' => Schema::TYPE_STRING . ' NOT NULL DEFAULT ""',
            'vlan' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
        ],$tableOptions);
    }

    public function down()
    {
        $this->dropTable('config');
    }
    
    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }
    
    public function safeDown()
    {
    }
    */
}
