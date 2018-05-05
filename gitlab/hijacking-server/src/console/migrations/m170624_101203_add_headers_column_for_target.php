<?php

use yii\db\Schema;
use yii\db\Migration;

class m170624_101203_add_headers_column_for_target extends Migration
{
    public function up()
    {
        $this->addColumn('{{%target}}', 'headers', Schema::TYPE_STRING . " NOT NULL DEFAULT ''");
    }

    public function down()
    {
        $this->dropColumn('{{%target}}', 'headers');
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
