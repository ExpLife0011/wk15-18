<?php

use yii\db\Schema;
use yii\db\Migration;

class m150104_144019_add_column_shield_for_table_business extends Migration
{
    public function up()
    {
        $this->addColumn('{{%business}}', 'shield', Schema::TYPE_SMALLINT . ' NOT NULL DEFAULT 0');
    }

    public function down()
    {
        $this->dropColumn('{{%business}}', 'shield');
        return true;
    }
}
