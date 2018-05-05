<?php

use yii\db\Schema;

class m140607_050706_base_tables extends \yii\db\Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        // create table server
        $this->createTable('{{%server}}', [
            'id' => Schema::TYPE_PK,
            'name' => Schema::TYPE_STRING . ' NOT NULL',
            'ip' => Schema::TYPE_STRING . '(32) NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ],$tableOptions);

        // create table blacklist
        $this->createTable('{{%blacklist}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'ip_s' => Schema::TYPE_BIGINT . ' NOT NULL',
            'ip_e' => Schema::TYPE_BIGINT . ' NOT NULL',
            'name' => Schema::TYPE_STRING . ' NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ],$tableOptions);

        // create table business
        $this->createTable('{{%business}}', [
            'id' => Schema::TYPE_PK,
            'name' => Schema::TYPE_STRING . '(32) NOT NULL ',
            'rate_limit' => Schema::TYPE_INTEGER . ' NOT NULL',
            'pro' => Schema::TYPE_SMALLINT . ' NOT NULL',
            'end' => 'datetime NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ],$tableOptions);

        // create table src_url
        $this->createTable('{{%src_url}}', [
            'id' => Schema::TYPE_PK,
            'bid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'type' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'url' => Schema::TYPE_STRING . ' NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ],$tableOptions);

        // create table target
        $this->createTable('{{%target}}', [
            'id' => Schema::TYPE_PK,
            'bid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'type' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'url' => Schema::TYPE_STRING . ' NOT NULL',
            'cookie' => Schema::TYPE_STRING . ' NOT NULL DEFAULT \'\' ',
            'weight' => Schema::TYPE_SMALLINT . ' NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ],$tableOptions);

        // create table src_url
        $this->createTable('{{%server_business}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'bid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ],$tableOptions);

        // create table target
        $this->createTable('{{%ping}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'load' => Schema::TYPE_STRING . '(8) NOT NULL',
            'cpu' => Schema::TYPE_STRING . '(8) NOT NULL',
            'mem' => Schema::TYPE_STRING . '(8) NOT NULL',
            'net_in' => Schema::TYPE_STRING . '(32) NOT NULL',
            'net_out' => Schema::TYPE_STRING . '(32) NOT NULL',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ],$tableOptions);

        // create table log
        $this->createTable('{{%log}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'seq_num' => Schema::TYPE_STRING . '(32) NOT NULL',
            'ip' => Schema::TYPE_STRING . '(32) NOT NULL',
            'timestamp' => Schema::TYPE_INTEGER . ' NOT NULL',
            'src_url' => Schema::TYPE_STRING . ' NOT NULL',
            'pid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'tid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'target_url' => Schema::TYPE_STRING . ' NOT NULL',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ],$tableOptions);
    }

    public function down()
    {

        $this->dropTable('server');
        $this->dropTable('blacklist');
        $this->dropTable('business');
        $this->dropTable('src_url');
        $this->dropTable('target');
        $this->dropTable('server_business');
        $this->dropTable('ping');
        $this->dropTable('log');

        return true;
    }
}
