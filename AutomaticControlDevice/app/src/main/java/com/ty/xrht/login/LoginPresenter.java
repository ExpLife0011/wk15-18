package com.ty.xrht.login;

import android.animation.Animator;
import android.animation.ObjectAnimator;
import android.animation.PropertyValuesHolder;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.ty.xrht.ApiConfig;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.utils.LoginUtils;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import rx.Observable;
import rx.Observer;

/**
 * Created by yeah on 2017/12/20.
 */

public class LoginPresenter implements LoginContract.Presenter {


    private LoginContract.View view;
    private LoginInteractor mLoginInteractor;

    public LoginPresenter(LoginContract.View view) {
        this.view = view;
        mLoginInteractor = new LoginInteractor();
    }

    public Observer<String> observer = new Observer<String>() {
        @Override
        public void onCompleted() {
            dismissAnim();
            view.cancelAnimation();
        }

        @Override
        public void onError(Throwable e) {
            dismissAnim();
            view.cancelAnimation();
            Toast.makeText(GlobalApp.getInstance(), "登录失败，请稍后再试！", Toast.LENGTH_LONG).show();
        }

        @Override
        public void onNext(String s) {

            Log.v(GlobalApp.LOG_TAG, "access-token=" + s);
            if (LoginInteractor.BAD_TOKEN.equals(s)) {
                Toast.makeText(GlobalApp.getInstance(), "登录失败，请请检查用户名和密码！", Toast.LENGTH_LONG).show();
            } else {
                saveToken(s);
                Toast.makeText(GlobalApp.getInstance(), "登录成功！", Toast.LENGTH_LONG).show();
                saveLoginSp(view.getEditUname(),view.getEditPwd(),view.getRemberCheckBox());
                view.goToHomeActivity();
            }

        }
    };

    void saveLoginSp(String uname,String pwd,boolean isChecked){
        if(isChecked){
            mLoginInteractor.writeLoginToSp(uname, pwd);
        }else{
            mLoginInteractor.writeLoginToSp(uname,"");
        }
    }


    @Override
    public void initViewFromSp(){
        String name = mLoginInteractor.readLoginFromSp(ApiConfig.USER_NAME_KEY);
        String pwd = mLoginInteractor.readLoginFromSp(ApiConfig.USER_PWD_KEY);
        boolean isChecked = !"".equals(pwd);
        view.initLoginView(name,pwd,isChecked);

    }



    private void saveToken(String token) {
        mLoginInteractor.writeAccessToken(token);
    }


    @Override
    public void subLogin(final String name, final String pwd) {

        Observable.timer((long)2,TimeUnit.SECONDS).subscribe(new Observer<Long>() {
            @Override
            public void onCompleted() {

            }

            @Override
            public void onError(Throwable e) {

            }

            @Override
            public void onNext(Long aLong) {
                Map<String, Object> mapParams = getLoginParams(name, pwd);
                mLoginInteractor.doLogin(mapParams).subscribe(observer);
            }
        });


    }


    private Map<String, Object> getLoginParams(String uname, String upwd) {

        String username = uname;
        String pwd = upwd;
        /*产生随机数*/
        int randomNum = LoginUtils.getMillisecond();
        long timestamp = LoginUtils.getTimestamp();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("uname", username);
        map.put("upwd", pwd);
        map.put("sign", LoginUtils.getSigin(timestamp, randomNum));
        map.put("timestamp", timestamp);
        map.put("randomNum", randomNum);
        map.put("token", "");
        map.put("rid", "");

        return map;

    }

    public void inputAnimator(final View view, float w, float h) {


        ObjectAnimator animator2 = ObjectAnimator.ofFloat(view,
                "scaleX", 1f, 0.5f);
        animator2.start();
        animator2.addListener(new Animator.AnimatorListener() {

            @Override
            public void onAnimationStart(Animator animation) {

            }

            @Override
            public void onAnimationRepeat(Animator animation) {
                // TODO Auto-generated method stub

            }

            @Override
            public void onAnimationEnd(Animator animation) {
                LoginPresenter.this.view.onAnimationEnd();
                view.setScaleX(1f);


            }

            @Override
            public void onAnimationCancel(Animator animation) {
                // TODO Auto-generated method stub

            }
        });

    }

    ObjectAnimator animator3;

    public void progressAnimator(final View view) {
        PropertyValuesHolder animator = PropertyValuesHolder.ofFloat("scaleX",
                0.5f, 1f);
        PropertyValuesHolder animator2 = PropertyValuesHolder.ofFloat("scaleY",
                0.5f, 1f);
        animator3 = ObjectAnimator.ofPropertyValuesHolder(view,
                animator, animator2);
        animator3.setDuration(1000);
        animator3.setInterpolator(new JellyInterpolator());
        animator3.start();

    }

    public void dismissAnim() {
        if (animator3 != null) {
            animator3.cancel();
        }
    }


}
