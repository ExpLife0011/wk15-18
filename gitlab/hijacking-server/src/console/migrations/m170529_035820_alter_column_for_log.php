<?php

use yii\db\Schema;
use yii\db\Migration;

class m170529_035820_alter_column_for_log extends Migration
{
    public function up()
    {
        $sql = "alter table log modify column id bigint not null auto_increment;";
        $this->execute($sql);
    }

    public function down()
    {
        $sql = "alter table log modify column id int not null auto_increment;";
        $this->execute($sql);
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
