<?php

use yii\db\Schema;
use yii\db\Migration;

class m150725_024839_add_new_log extends Migration
{
    public function up()
    {
        $this->createIndex('t_s_p', '{{%log}}', ['timestamp', 'sid', 'pid'], false);

    }

    public function down()
    {
        $this->dropIndex('t_s_p', '{{%log}}');
    }
}
