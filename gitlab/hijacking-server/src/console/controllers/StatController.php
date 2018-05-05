<?php
namespace console\controllers;

use yii\console\Controller;
use common\models\Log;
use common\models\StatHistory;
use frontend\models\SignupForm;

class StatController extends Controller
{
    public function actionRun()
    {
        $day = date("Y-m-d",strtotime("-1 day"));
        StatHistory::statDayNums($day);
    }

}
