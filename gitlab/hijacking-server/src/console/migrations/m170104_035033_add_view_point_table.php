<?php

use yii\db\Schema;
use yii\db\Migration;

class m170104_035033_add_view_point_table extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%view_point}}', [
            'id' => Schema::TYPE_PK,
            'event_id' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'content' => Schema::TYPE_TEXT . ' NOT NULL',
            'result' => Schema::TYPE_STRING . ' NOT NULL DEFAULT ""',
            'planning_time' => 'datetime NOT NULL',
            'image_url' => Schema::TYPE_STRING . ' NOT NULL DEFAULT ""',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0',
            'planning_cdate' => Schema::TYPE_DATE . ' NOT NULL',
        ],$tableOptions);
    }

    public function down()
    {
        $this->dropTable('view_point');
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
