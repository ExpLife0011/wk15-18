<?php
namespace common\extensions;

use Yii;

class HTwigExtension extends \Twig_Extension
{
    /**
     * @inheritdoc
     */
    public function getName()
    {
        return 'gTwigExtension';
    }
    
    /**
    * {@inheritdoc}
    */
    public function getFunctions()
    {
        return array(
            "widget" => new \Twig_Function_Method($this, 'widget', array('is_safe'=>['html'])),
        );
    }
    
    public function widget($viewName, array $config) 
    {
        return $viewName::widget($config);
    }

    public function getGlobals()
    {
        if(Yii::$app->id == "app-console"){
            return array(
                // 'ActiveForm'=>\yii\widgets\ActiveForm,
                'App' =>Yii::$app,
                /* 'staticUrl'=>Yii::$app->params['targetDomain'], */
                 // 'u' => Yii::$app->user->isGuest ? null : \common\components\UserInfo::factory(Yii::$app->user->id),
            );
        }
        return array(
            // 'ActiveForm'=>\yii\widgets\ActiveForm,
            'App' =>Yii::$app,
            /* 'staticUrl'=>Yii::$app->params['targetDomain'], */
             // 'u' => Yii::$app->user->isGuest ? null : \common\components\UserInfo::factory(Yii::$app->user->id),
        );
    }

}
