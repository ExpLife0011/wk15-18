<?php

use yii\db\Schema;

class m140907_091435_add_body_to_target extends \yii\db\Migration
{
    public function up()
    {
        $this->update('{{%target}}', ['type' => 302], 'type = 0');
        $this->addColumn('{{%target}}', 'body', Schema::TYPE_TEXT . " NOT NULL DEFAULT ''");
    }

    public function down()
    {
        $this->dropColumn('{{%target}}', 'body');

        return true;
    }
}
