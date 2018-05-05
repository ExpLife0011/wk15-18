<?php

class m141121_210841_add_index_to_log extends \yii\mongodb\Migration
{
    public function up()
    {
        $this->createIndex('log', ['timestamp','sid','pid']);
    }

    public function down()
    {
        $this->dropIndex('log', ['timestamp','sid','pid']);
        return true;
    }
}
