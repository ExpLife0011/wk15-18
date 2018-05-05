<?php

use yii\db\Schema;
use yii\db\Migration;

class m170418_061338_add_column_for_target extends Migration
{
    public function up()
    {
        $sql = "ALTER TABLE target ADD COLUMN body_blob MediumBlob NOT NULL DEFAULT '';";
        $this->execute($sql);
    }

    public function down()
    {
        $this->dropColumn('{{%target}}', 'body_blob');
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
