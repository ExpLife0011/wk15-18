<?php

use yii\db\Schema;
use yii\db\Migration;

class m170104_035006_add_comment_table extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%comment}}', [
            'id' => Schema::TYPE_PK,
            'uid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'event_id' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'content' => Schema::TYPE_TEXT . ' NOT NULL',
            'image_url' => Schema::TYPE_STRING . ' NOT NULL DEFAULT ""',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
        ],$tableOptions);
    }

    public function down()
    {
        $this->dropTable('comment');
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
