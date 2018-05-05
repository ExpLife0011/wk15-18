<?php

use yii\db\Schema;
use yii\db\Migration;

class m170817_062644_add_role_column_for_behavior_record extends Migration
{
    public function up()
    {
        $this->addColumn('{{%behavior_record}}', 'cpid', Schema::TYPE_INTEGER . " NOT NULL DEFAULT 0");
        $this->addColumn('{{%behavior_record}}', 'role', Schema::TYPE_INTEGER . " NOT NULL DEFAULT 0");
    }

    public function down()
    {
        $this->dropColumn('{{%behavior_record}}', 'role');
        $this->dropColumn('{{%behavior_record}}', 'cpid');
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
