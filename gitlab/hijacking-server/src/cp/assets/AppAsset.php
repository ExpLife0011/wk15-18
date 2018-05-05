<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace cp\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = ['css/site.css','css/themes.css'];
    public $js = [];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];

    // public function init() 
    // {
        // parent::init();
        /* $this->css[] = YII_DEBUG ? 'metis/lib/font-awesome/css/font-awesome.css' : 'metis/lib/font-awesome/css/font-awesome.min.css'; */
        /* $this->css[] = YII_DEBUG ? 'metis/css/main.css' : 'metis/css/main.min.css'; */
        /* $this->css[] = 'metis/lib/magic/magic.css'; */

        /* $this->css[] = 'metis/css/theme.css'; */
        
    // }

}
