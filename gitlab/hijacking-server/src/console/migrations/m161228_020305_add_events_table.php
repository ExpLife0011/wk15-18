<?php

use yii\db\Schema;
use yii\db\Migration;

class m161228_020305_add_events_table extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%events}}', [
            'id' => Schema::TYPE_PK,
            'uid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'bid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'title' => Schema::TYPE_STRING . ' NOT NULL DEFAULT ""',
            'description' => Schema::TYPE_TEXT. ' NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'operation_time' => 'datetime NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'cdate' => Schema::TYPE_DATE . ' NOT NULL',
        ],$tableOptions);
    }

    public function down()
    {
        $this->dropTable('events');
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
