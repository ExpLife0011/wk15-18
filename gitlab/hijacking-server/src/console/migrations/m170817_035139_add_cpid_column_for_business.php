<?php

use yii\db\Schema;
use yii\db\Migration;

class m170817_035139_add_cpid_column_for_business extends Migration
{
    public function up()
    {
        $this->addColumn('{{%business}}', 'cpid', Schema::TYPE_INTEGER . " NOT NULL DEFAULT 0");
    }

    public function down()
    {
        $this->dropColumn('{{%business}}', 'cpid');
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
