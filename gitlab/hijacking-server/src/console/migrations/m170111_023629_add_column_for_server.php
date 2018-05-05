<?php

use yii\db\Schema;
use yii\db\Migration;

class m170111_023629_add_column_for_server extends Migration
{
    public function up()
    {
        $this->addColumn('{{%server}}', 'program_status', Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0');
        $this->addColumn('{{%server}}', 'program_time', Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0');
        $this->addColumn('{{%server}}', 'username', Schema::TYPE_STRING . ' NOT NULL DEFAULT ""');
        $this->addColumn('{{%server}}', 'password', Schema::TYPE_STRING . ' NOT NULL DEFAULT ""');
        $this->addColumn('{{%server}}', 'port', Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 22');
    }

    public function down()
    {
        $this->dropColumn('{{%server}}', 'program_status');
        $this->dropColumn('{{%server}}', 'program_time');
        $this->dropColumn('{{%server}}', 'username');
        $this->dropColumn('{{%server}}', 'password');
        $this->dropColumn('{{%server}}', 'port');
        return true;
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
