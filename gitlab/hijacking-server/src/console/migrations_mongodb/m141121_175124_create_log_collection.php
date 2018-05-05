<?php

class m141121_175124_create_log_collection extends \yii\mongodb\Migration
{
    public function up()
    {
        $this->createCollection('log', [
            'capped' => true,
            'size' => YII_DEBUG ? 1024*1024*10 : 10737418240, // 10G
        ]);
    }

    public function down()
    {
        $this->dropCollection('log');
        return true;
    }
}
