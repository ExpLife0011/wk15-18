<?php

use yii\db\Schema;
use yii\db\Migration;

class m170302_041506_add_column_log extends Migration
{
    public function up()
    {
        $this->addColumn('{{%log}}', 'refer', Schema::TYPE_STRING . " NOT NULL DEFAULT ''");
        $this->addColumn('{{%log}}', 'ua', Schema::TYPE_STRING . " NOT NULL DEFAULT ''");
    }

    public function down()
    {
        $this->dropColumn('{{%log}}', 'refer');
        $this->dropColumn('{{%log}}', 'ua');
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
