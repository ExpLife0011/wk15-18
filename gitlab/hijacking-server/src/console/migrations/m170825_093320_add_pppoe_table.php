<?php

use yii\db\Schema;
use yii\db\Migration;

class m170825_093320_add_pppoe_table extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        // create table pppoe
        $this->createTable('{{%pppoe}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'account' => Schema::TYPE_STRING . ' NOT NULL DEFAULT ""',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
        ],$tableOptions);

        // create table pppoe_blacklist
        $this->createTable('{{%pppoe_blacklist}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'ip_s' => Schema::TYPE_STRING . '(32) NOT NULL DEFAULT ""',
            'ip_e' => Schema::TYPE_STRING . '(32) NOT NULL DEFAULT ""',
            'name' => Schema::TYPE_STRING . ' NOT NULL DEFAULT ""',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
        ],$tableOptions);

    }

    public function down()
    {
        $this->dropTable('pppoe');
        $this->dropTable('pppoe_blacklist');
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
