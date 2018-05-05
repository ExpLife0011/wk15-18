<?php

use yii\db\Schema;
use yii\db\Migration;

class m170207_095051_add_column_for_behavior_record extends Migration
{
    public function up()
    {
        $this->addColumn('{{%behavior_record}}', 'sid', Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0');
        $this->addColumn('{{%behavior_record}}', 'bid', Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0');
        $this->addColumn('{{%behavior_record}}', 'gid', Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 0');
    }

    public function down()
    {
        $this->dropColumn('{{%behavior_record}}', 'sid');
        $this->dropColumn('{{%behavior_record}}', 'bid');
        $this->dropColumn('{{%behavior_record}}', 'gid');
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
