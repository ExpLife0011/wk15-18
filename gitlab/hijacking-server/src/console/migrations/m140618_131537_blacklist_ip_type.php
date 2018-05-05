<?php

use yii\db\Schema;

class m140618_131537_blacklist_ip_type extends \yii\db\Migration
{
    public function up()
    {
        $this->alterColumn('{{%blacklist}}', 'ip_s', Schema::TYPE_STRING . '(32) NOT NULL');
        $this->alterColumn('{{%blacklist}}', 'ip_e', Schema::TYPE_STRING . '(32) NOT NULL');

    }

    public function down()
    {
        $this->alterColumn('{{%blacklist}}', 'ip_s', Schema::TYPE_BIGINT . ' NOT NULL');
        $this->alterColumn('{{%blacklist}}', 'ip_e', Schema::TYPE_BIGINT . ' NOT NULL');
        return true;
    }
}
