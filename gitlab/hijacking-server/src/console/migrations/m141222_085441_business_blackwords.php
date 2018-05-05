<?php

use yii\db\Schema;
use yii\db\Migration;

class m141222_085441_business_blackwords extends Migration
{
    public function up()
    {
        $this->addColumn('{{%business}}', 'blackwords', Schema::TYPE_STRING . " NOT NULL DEFAULT ''");
    }

    public function down()
    {
        $this->dropColumn('{{%business}}', 'blackwords');
        return true;
    }
}
