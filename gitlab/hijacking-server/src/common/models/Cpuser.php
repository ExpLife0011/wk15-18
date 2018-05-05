<?php
namespace common\models;

use Yii;
use yii\base\NotSupportedException;
use yii\db\ActiveRecord;
use yii\web\IdentityInterface;
use yii\data\ActiveDataProvider;
// use yii\helpers\Security;
/**
 * User model
 *
 * @property integer $id
 * @property string $username
 * @property string $password_hash
 * @property string $password_reset_token
 * @property string $email
 * @property string $auth_key
 * @property integer $role
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 * @property string $password write-only password
 */
class Cpuser extends ActiveRecord implements IdentityInterface
{
    public $password;
    const STATUS_DELETED = 0;
    const STATUS_ACTIVE = 10;

    const ROLE_USER = 10;
    public static function tableName(){
        return "cpuser";
    }
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'timestamp' => [
                'class' => 'yii\behaviors\TimestampBehavior',
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at', 'updated_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
            ],
        ];
    }

    public function getServers(){
        return $this->hasMany(Server::className(),['id'=>'sid'])
            ->viaTable('cp_server',['cpid'=>'id']);
    }
    /**
      * @inheritdoc
      */
     // public function rules()
     // {
     //     return [
     //         ['status', 'default', 'value' => self::STATUS_ACTIVE],
     //         ['status', 'in', 'range' => [self::STATUS_ACTIVE, self::STATUS_DELETED]],

     //         ['role', 'default', 'value' => self::ROLE_USER],
     //         ['role', 'in', 'range' => [self::ROLE_USER]],
     //     ];
     // }
    public function rules()
    {
        return [
            ['status', 'default', 'value' => self::STATUS_ACTIVE,'on'=>'update'],
            ['status', 'in', 'range' => [self::STATUS_ACTIVE, self::STATUS_DELETED]],

            ['role', 'default', 'value' => self::ROLE_USER],
            ['role', 'in', 'range' => [self::ROLE_USER]],

            ['username', 'filter', 'filter' => 'trim'],
            ['username', 'required'],
            ['username', 'string', 'min' => 2, 'max' => 255],

            ['email', 'filter', 'filter' => 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'unique', 'message' => 'This email address has already been taken.', 'on' => 'signup,update'],
            ['email', 'exist', 'message' => 'There is no user with such email.', 'on' => 'requestPasswordResetToken'],

            ['password', 'required'],
            ['password', 'string', 'min' => 6],
        ];
    }

    public function scenarios()
    {
        return [
            'signup' => ['username', 'email', 'password', '!status', '!role'],
            'update'=>['status'],
            'resetPassword' => ['username', 'email', 'password'],
            'resetPassword' => ['password'],
            'requestPasswordResetToken' => ['email'],
        ];
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {
            if (($this->isNewRecord || $this->getScenario() === 'resetPassword') && !empty($this->password)) {
                $this->password_hash = Yii::$app->getSecurity()->generatePasswordHash($this->password);
            }
            if ($this->isNewRecord) {
                $this->auth_key = Yii::$app->getSecurity()->generateRandomKey();
            }
            return true;
        }
        return false;
    }

    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        return static::findOne($id);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        throw new NotSupportedException('"findIdentityByAccessToken" is not implemented.');
    }

    /**
     * Finds user by username
     *
     * @param  string      $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        return static::findOne(['username' => $username, 'status' => self::STATUS_ACTIVE]);
    }

    /**
     * Finds user by password reset token
     *
     * @param  string      $token password reset token
     * @return static|null
     */
    public static function findByPasswordResetToken($token)
    {
        $expire = \Yii::$app->params['user.passwordResetTokenExpire'];
        $parts = explode('_', $token);
        $timestamp = (int) end($parts);
        if ($timestamp + $expire < time()) {
            // token expired
            return null;
        }

        return static::findOne([
            'password_reset_token' => $token,
            'status' => self::STATUS_ACTIVE,
        ]);
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->getPrimaryKey();
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->auth_key;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * Validates password
     *
     * @param  string  $password password to validate
     * @return boolean if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return Yii::$app->getSecurity()->validatePassword($password, $this->password_hash);
    }

    /**
     * Generates password hash from password and sets it to the model
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password_hash = Yii::$app->getSecurity()->generatePasswordHash($password);
    }

    /**
     * Generates "remember me" authentication key
     */
    public function generateAuthKey()
    {
        $this->auth_key = Yii::$app->getSecurity()->generateRandomKey();
    }

    /**
     * Generates new password reset token
     */
    public function generatePasswordResetToken()
    {
        $this->password_reset_token = Yii::$app->getSecurity()->generateRandomKey() . '_' . time();
    }

    /**
     * Removes password reset token
     */
    public function removePasswordResetToken()
    {
        $this->password_reset_token = null;
    }

    public function getAllData(){
        $provider = new ActiveDataProvider([
              'query' => static::find()
                         // ->where(['status'=>10])
                         ->orderby('id desc'),
            'sort' => [
                'attributes' => ['id',],
            ],
            'pagination' => [
                'pageSize' => 30,
            ],
        ]);
        return $provider;
    }

    public function attributeLabels(){
        return [
            'username'=>'用户名',
            'password'=>'密码',
            'email'=>'邮箱',
            'create_time'=>'创建时间',
        ];
    }

    public function updateAttrs($attributes){
        $attrs = array();
        if (!empty($attributes['username']) && $attributes['username'] != $this->username) {
            $attrs[] = 'username';
            $this->username = $attributes['username'];
        }
         if (!empty($attributes['email']) && $attributes['email'] != $this->email) {
            $attrs[] = 'email';
            $this->email = $attributes['email'];
        }
        if (!empty($attributes['password']) && $attributes['password'] != $this->password) {
            $attrs[] = 'password';
            $this->password = $attributes['password'];
        }
        $this->setScenario('resetPassword');
        if ($this->validate($attrs)) {
            return $this->save(false);
        } else {
            return false;
        }
    }

    // public function 
    public function deleteUser($uid){
        $model = self::find($uid);
        $model->setScenario('update');
        $model->status = self::STATUS_DELETED;
        $model->update();
        if($model->update()){
            return true;
        }
        return false;
    }
}
