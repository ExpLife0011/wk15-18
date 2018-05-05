<?php

use yii\db\Schema;

class m140616_150406_list_timestamp extends \yii\db\Migration
{
    public function up()
    {
        $this->addColumn('{{%server}}', 'last_blacklist', Schema::TYPE_INTEGER . ' NOT NULL');
        $this->addColumn('{{%server}}', 'last_tasklist', Schema::TYPE_INTEGER . ' NOT NULL');
    }

    public function down()
    {
        $this->dropColumn('{{%server}}', 'last_blacklist');
        $this->dropColumn('{{%server}}', 'last_tasklist');
        return true;
    }
}
