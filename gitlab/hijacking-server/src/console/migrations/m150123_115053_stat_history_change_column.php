<?php

use yii\db\Schema;
use yii\db\Migration;

class m150123_115053_stat_history_change_column extends Migration
{
    public function up()
    {
         $this->renameColumn('{{%stat_history}}', 'created', 'cdate');
         $this->alterColumn('{{%stat_history}}', 'cdate', Schema::TYPE_DATE . ' NOT NULL');
    }

    public function down()
    {

        return false;
    }
}
