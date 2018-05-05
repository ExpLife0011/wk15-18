<?php

use yii\db\Schema;
use yii\db\Migration;

class m141225_083537_add_stat_history_table extends Migration
{
    public function up()
    {
         $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%stat_history}}', [
            'id' => Schema::TYPE_PK,
            'sid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'bid' => Schema::TYPE_INTEGER . ' NOT NULL',
            'nums' => Schema::TYPE_INTEGER . ' NOT NULL',
            'created' => Schema::TYPE_DATETIME . ' NOT NULL',
        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable('stat_history');
        return true;
    }
}
