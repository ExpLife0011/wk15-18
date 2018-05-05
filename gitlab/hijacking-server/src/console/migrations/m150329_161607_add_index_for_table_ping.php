<?php

use yii\db\Schema;
use yii\db\Migration;

class m150329_161607_add_index_for_table_ping extends Migration
{
    public function up()
    {
        $this->createIndex('sid', '{{%ping}}','sid',false);
    }

    public function down()
    {
        $this->dropIndex('sid','{{%ping}}');
        return false;
    }
}
