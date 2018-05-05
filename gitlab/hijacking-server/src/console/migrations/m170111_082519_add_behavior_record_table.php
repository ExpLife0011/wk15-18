<?php

use yii\db\Schema;
use yii\db\Migration;

class m170111_082519_add_behavior_record_table extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%behavior_record}}', [
            'id' => Schema::TYPE_PK,
            'uid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'behavior' => Schema::TYPE_TEXT . ' NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'cdate' => Schema::TYPE_DATE . ' NOT NULL',
        ],$tableOptions);
    }

    public function down()
    {
        $this->dropTable('behavior_record');
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
