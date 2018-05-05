<?php

use yii\db\Schema;
use yii\db\Migration;

class m170109_081358_alter_business_hidden extends Migration
{
    public function up()
    {
        $sql = "ALTER TABLE `business_hidden` DEFAULT CHARACTER SET utf8 AUTO_INCREMENT=1000000";
        $this->execute($sql);
    }

    public function down()
    {
        echo "m170109_081358_alter_business_hidden cannot be reverted.\n";

        return false;
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
