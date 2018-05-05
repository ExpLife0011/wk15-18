package com.ty.xrht.login;

import android.app.Activity;
import android.content.SharedPreferences;
import android.util.Log;

import com.tsy.sdk.acache.ACache;
import com.ty.xrht.ApiConfig;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.http.ObjectLoader;
import com.ty.xrht.http.RetrofitServiceManager;
import com.ty.xrht.login.bean.LoginSubject;

import java.util.Map;

import retrofit2.http.FieldMap;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;
import rx.Observable;
import rx.functions.Func1;

/**
 * Created by yeah on 2017/12/20.
 */

public class LoginInteractor extends ObjectLoader implements LoginContract.Interactor{

    ACache mCache = GlobalApp.getInstance().getACache();
    SharedPreferences sp = null;
    SharedPreferences.Editor editor= null;


    public static final String BAD_TOKEN = "Login failed";
    LoginInteractor.LoginApi mLoginApi ;
    public LoginInteractor(){
        mLoginApi = RetrofitServiceManager.getInstance().create(LoginInteractor.LoginApi.class);
        sp = GlobalApp.getInstance().getSharedPreferences(ApiConfig.LOGIN_INFO_SP, Activity.MODE_PRIVATE);
        editor = sp.edit();
    }


    @Override
    public Observable<String> doLogin(Map<String,Object> map){
        return observe(mLoginApi.login(map)).map(new Func1<LoginSubject, String>() {
            @Override
            public String call(LoginSubject loginSubject) {

                Log.v(GlobalApp.LOG_TAG,"loginSubject" + loginSubject.getCode());
                if(loginSubject.getCode() == 1){
                    writeDepId(loginSubject);
                    return loginSubject.getAccess_token();
                }else{
                    return BAD_TOKEN;
                }
            }
        });
    }

    public interface LoginApi{
        @FormUrlEncoded
        @POST("/api/UserAdmin/User/UserLogin")
        Observable<LoginSubject> login(@FieldMap Map<String,Object> map);
    }


    private void writeDepId(LoginSubject subject){
        int depId = subject.getData().getDepartment().getDEPID();
        Log.v(GlobalApp.LOG_TAG,"depid====" + depId);
        mCache.put("depId",String.valueOf(depId),ApiConfig.CacheExpiresTime);
    }

    @Override
    public void writeAccessToken(String token) {
        //缓存2天，再取为null
        mCache.put("access_token",token, ApiConfig.CacheExpiresTime);
    }

    @Override
    public String readLoginFromSp(String key){
        return sp.getString(key,""); //没有取到返回空
    }

    @Override
    public void writeLoginToSp(String name, String pwd) {
        editor.putString(ApiConfig.USER_NAME_KEY,name);
        editor.putString(ApiConfig.USER_PWD_KEY,pwd);
        editor.commit();
    }
}
