<?php

use yii\db\Schema;
use yii\db\Migration;

class m160420_120907_add_column_priority_for_table_business extends Migration
{
    public function up()
    {
        $this->addColumn('{{%business}}', 'priority', Schema::TYPE_INTEGER . ' NOT NULL DEFAULT 1');
    }

    public function down()
    {
        $this->dropColumn('{{%business}}', 'priority');
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
