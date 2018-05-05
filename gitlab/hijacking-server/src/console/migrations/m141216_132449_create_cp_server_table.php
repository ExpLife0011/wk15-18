<?php

use yii\db\Schema;
use yii\db\Migration;

class m141216_132449_create_cp_server_table extends Migration
{
    public function up()
    {
         $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%cp_server}}', [
            'id' => Schema::TYPE_PK,
            'cpid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable('cp_server');
        return false;
    }
}
