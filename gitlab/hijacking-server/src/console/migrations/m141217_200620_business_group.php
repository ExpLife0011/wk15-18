<?php

use yii\db\Schema;
use yii\db\Migration;

class m141217_200620_business_group extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%business_group}}', [
            'id' => Schema::TYPE_PK,
            'name' => Schema::TYPE_STRING . ' NOT NULL',
            'deleted' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
        ], $tableOptions);

        $this->createTable('{{%server_business_group}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'gid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'status' => Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0',
            'created_at' => Schema::TYPE_INTEGER . ' NOT NULL',
            'updated_at' => Schema::TYPE_INTEGER . ' NOT NULL',
        ], $tableOptions);
        
        $this->addColumn('{{%business}}', 'gid', Schema::TYPE_INTEGER . " NOT NULL DEFAULT 0 ");
    }

    public function down()
    {
        $this->dropTable('{{%server_business_group}}');
        $this->dropTable('{{%business_group}}');
        $this->dropColumn('{{%business}}', 'gid');
        return true;
    }
}
