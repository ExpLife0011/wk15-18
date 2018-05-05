<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\captcha\Captcha;
/**
 * @var yii\web\View $this
 * @var yii\widgets\ActiveForm $form
 * @var app\models\LoginForm $model
 */
$this->title = '后台管理';
?>
<div class="site-login" style="align:center">

    <div class="row">
        <div class="col-lg-5">
            <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>
                <?= $form->field($model, 'username') ?>
                <?= $form->field($model, 'password')->passwordInput() ?>
                <!--?= $form->field($model, 'rememberMe')->checkbox() ?-->
                <?= $form->field($model, 'verifyCode')->widget(Captcha::className(), [
                'template' => '<div class="row"><div class="col-lg-3">{image}</div></div><div class="row"><div class="col-lg-6">{input}</div></div>',
                ]) ?>
                <div class="form-group">
                    <?= Html::submitButton('Login', ['class' => 'btn btn-primary']) ?>
                </div>
            <?php ActiveForm::end(); ?>
        </div>
    </div>
</div>
