<?php

use yii\db\Schema;
use yii\db\Migration;

class m161229_110916_add_business_hidden_table extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%business_hidden}}', [
            'id' => Schema::TYPE_PK,
            'name' => Schema::TYPE_STRING . '(32) NOT NULL ',
            'rate_limit' => Schema::TYPE_INTEGER . ' NOT NULL',
            'pro' => Schema::TYPE_SMALLINT . ' NOT NULL',
            'end' => 'datetime NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'gid' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0 ',
            'blackwords' => Schema::TYPE_STRING . " NOT NULL DEFAULT ''",
            'shield' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'priority' => Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 1',
        ],$tableOptions);
    }

    public function down()
    {
        $this->dropTable('business_hidden');
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
