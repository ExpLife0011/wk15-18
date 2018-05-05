package com.ty.xrht.login;

import com.ty.xrht.Base.BasePresenter;
import com.ty.xrht.Base.BaseView;

import java.util.Map;

import rx.Observable;


/**
 * Created by yeah on 2017/12/20.
 */

public class LoginContract {
    interface View extends BaseView {

        void initLoginView(String name,String pwd,boolean isChecked);
        void goToHomeActivity();
        void onAnimationEnd();
        void cancelAnimation();
        String getEditUname();
        String getEditPwd();
        boolean getRemberCheckBox();

    }

    interface Presenter extends BasePresenter {
        void subLogin(String name,String pwd);
        void initViewFromSp();

    }

    interface Interactor {

        Observable<String> doLogin(Map<String,Object> map);
        void writeAccessToken(String token);
        String readLoginFromSp(String key);
        void writeLoginToSp(String name ,String pwd);
    }


}
