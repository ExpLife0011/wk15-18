<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace common\extensions;

use Yii;
use yii\helpers\Html;
use yii\grid\ActionColumn;
use backend\models\ServerForm;

/**
 * ActionColumn is a column for the [[GridView]] widget that displays buttons for viewing and manipulating the items.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class GridActionColumn extends ActionColumn
{
    /**
     * Initializes the default button rendering callbacks
     */
    protected function initDefaultButtons()
    {
        if (!isset($this->buttons['group'])) {
            $this->buttons['group'] = function ($url, $model) {
                return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
                    'title' => Yii::t('yii', 'update group info'),
                ]);
            };
        }
        if (!isset($this->buttons['groupdelete'])) {
            $this->buttons['groupdelete'] = function ($url, $model, $key) {
                $options = array_merge([
                    'title' => Yii::t('yii', 'Delete Group'),
                    'aria-label' => Yii::t('yii', 'Delete Group'),
                    'data-confirm' => Yii::t('yii', 'Are you sure you want to delete this item?'),
                    'data-method' => 'post',
                    'data-pjax' => '0',
                ], $this->buttonOptions);
                return Html::a('<span class="glyphicon glyphicon-trash"></span>', $url, $options);
            };
        }
        if (!isset($this->buttons['server-view'])) {
            $this->buttons['server-view'] = function ($url, $model) {
                return Html::a('<span class="glyphicon glyphicon-eye-open"></span>', "/cpuser/serverview/".$model->sid, [
                    'title' => Yii::t('yii', 'server view'),
                ]);
            };
        }
        if (!isset($this->buttons['assign-server'])) {
            $this->buttons['assign-server'] = function ($url, $model) {
                return Html::a('<span class="glyphicon glyphicon-cog"></span>', $url, [
                    'title' => Yii::t('yii', 'assign server'),
                ]);
            };
        }
        if (!isset($this->buttons['switch'])) {
            $this->buttons['switch'] = function ($url, $model) {
                return Html::a('<span class="glyphicon glyphicon-off"></span>', $url, [
                    'title' => Yii::t('yii', 'switch server'),
                ]);
            };
        }
        if (!isset($this->buttons['updateblack'])) {
            $this->buttons['updateblack'] = function ($url, $model) {
                return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
                    'title' => Yii::t('yii', 'update black info'),
                ]);
            };
        }
        if (!isset($this->buttons['start'])) {
            $this->buttons['start'] = function ($url, $model) {
                if (!$model->getActive($model->id) && ($model->program_status == ServerForm::PRO_STATUS_CONFIG || $model->program_status == ServerForm::PRO_STATUS_STOP)) {
                    return Html::a('启动', $url, [
                        'title' => Yii::t('yii', 'start'),
                    ]);
                }
            };
        }
        if (!isset($this->buttons['restart'])) {
            $this->buttons['restart'] = function ($url, $model) {
                if ($model->getActive($model->id)) {
                    return Html::a('重启', $url, [
                        'title' => Yii::t('yii', 'restart'),
                    ]);
                }
            };
        }
        if (!isset($this->buttons['config'])) {
            $this->buttons['config'] = function ($url, $model) {
                return Html::a('配置', $url, [
                    'title' => Yii::t('yii', 'config'),
                ]);
            };
        }
        if (!isset($this->buttons['stop'])) {
            $this->buttons['stop'] = function ($url, $model) {
                if ($model->getActive($model->id)) {
                    return Html::a('停止', $url, [
                        'title' => Yii::t('yii', 'stop'),
                    ]);
                }
            };
        }
        if (!isset($this->buttons['detail'])) {
            $this->buttons['detail'] = function ($url, $model) {
                return Html::a('详情', $url, [
                    'title' => Yii::t('yii', 'detail'),
                ]);
            };
        }
        if (!isset($this->buttons['refresh'])) {
            $this->buttons['refresh'] = function ($url, $model) {
                return Html::a('<span class="glyphicon glyphicon-refresh"></span>', $url, [
                    'title' => Yii::t('yii', 'Refresh tasklist time'),
                ]);
            };
        }

        //删除PPPOE帐号
        if (!isset($this->buttons['delpppoe'])) {
            $this->buttons['delpppoe'] = function ($url, $model, $key) {
                $options = array_merge([
                    'title' => Yii::t('yii', 'Delete'),
                    'data-confirm' => Yii::t('yii', 'Are you sure you want to delete this item?'),
                    'data-method' => 'post',
                    'data-pjax' => '0',
                ], $this->buttonOptions);
                return Html::a('<span class="glyphicon glyphicon-trash"></span>', $url, $options);
            };
        }
        //修改PPPOE帐号
        if (!isset($this->buttons['updatepppoe'])) {
            $this->buttons['updatepppoe'] = function ($url, $model) {
                return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
                    'title' => Yii::t('yii', 'update pppoe info'),
                ]);
            };
        }

        /* 快递配置按钮结束 */

        parent::initDefaultButtons();
        
    }
}
