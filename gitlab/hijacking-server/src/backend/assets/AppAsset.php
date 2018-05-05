<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace backend\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        
    ];
    public $js = [
        'metis/lib/modernizr/modernizr.min.js',
        'metis/lib/bootstrap/js/bootstrap.min.js',
        'metis/lib/screenfull/screenfull.js',
        'metis/js/main.min.js'
        
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];

    public function init() 
    {
        parent::init();
        /* $this->css[] = YII_DEBUG ? 'metis/lib/font-awesome/css/font-awesome.css' : 'metis/lib/font-awesome/css/font-awesome.min.css'; */
        /* $this->css[] = YII_DEBUG ? 'metis/css/main.css' : 'metis/css/main.min.css'; */
        /* $this->css[] = 'metis/lib/magic/magic.css'; */

        /* $this->css[] = 'metis/css/theme.css'; */
        
    }

}
