<?php

use yii\db\Schema;
use yii\db\Migration;

class m141230_221742_add_key_for_table_stat_histroy extends Migration
{
    public function up()
    {
        $this->createIndex('sid', '{{%stat_history}}','sid',false);
        $this->createIndex('bid', '{{%stat_history}}','bid',false);
    }

    public function down()
    {
        $this->dropIndex('sid','{{%stat_history}}');
        $this->dropIndex('bid','{{%stat_history}}');
        return true;
    }
}
