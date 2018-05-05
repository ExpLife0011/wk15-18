package com.ty.xrht.index;

import android.Manifest;
import android.util.Log;
import android.widget.Toast;

import com.ty.xrht.GlobalApp;
import com.ty.xrht.index.Bean.UpdateXmlService;
import com.ty.xrht.login.LoginInteractor;
import com.ty.xrht.utils.DownloadUtils;
import com.ty.xrht.utils.ManifestUtils;
import com.ty.xrht.utils.NetworkUtils;

import java.util.Timer;
import java.util.TimerTask;

import rx.Observer;
import rx.Scheduler;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

/**
 * Created by yeah on 2017/10/21.
 */

public class IndexPresenter implements IndexContract.Presenter {

    private String app_status = IndexContract.NORMAL_STATUS;

    private IndexContract.View view;
    private IndexContract.Interactor mInteractor;

    public IndexPresenter(IndexContract.View view) {


        this.view = view;
        mInteractor = new IndexInteractor();
    }

    /*
    * 初始化app，检查是否联网，登录
    * */
    @Override
    public void initApp() {
        boolean isConnect = NetworkUtils.checkNetworkConnect(GlobalApp.getInstance().getContext());

        if (isConnect) {
            //check if need to update app
            checkUpdate();
        } else {
            app_status = IndexContract.WRONG_NET_STATUS;
            start(app_status);
        }

    }




    private void checkUpdate(){
        mInteractor.checkUpdateInfo()
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(observer);

    }


    private Observer<UpdateXmlService> observer = new Observer<UpdateXmlService>() {
        @Override
        public void onCompleted() {

        }

        @Override
        public void onError(Throwable e) {

        }

        @Override
        public void onNext(UpdateXmlService updateXmlService) {
            int vercode_online = 0;
            String update_url = updateXmlService.url;
            try {
                vercode_online = Integer.parseInt(updateXmlService.version);
                Log.v(GlobalApp.LOG_TAG,vercode_online+"");
            }catch (Exception e){

            }
            int vercode_local = ManifestUtils.getVersionCode(GlobalApp.getInstance());
            if (vercode_local < vercode_online){
                //need update app
                Toast.makeText(GlobalApp.getInstance(),"正在更新最新版本，请稍等...",Toast.LENGTH_LONG).show();
                DownloadUtils downloadUtils = new DownloadUtils(GlobalApp.getInstance());
                downloadUtils.downloadAPK(update_url,"znhl.apk");
            }else{
                // init app
                noNeedToUpdate();

            }

        }
    };


    private void noNeedToUpdate(){
        String access_token = mInteractor.getAccesstoken();
        if (access_token == null | LoginInteractor.BAD_TOKEN.equals(access_token)) {   //cache过期，重新获取
            mInteractor.clearAllCache();
            startLogin();
        } else {
            app_status = IndexContract.NORMAL_STATUS;
            start(app_status);
        }
    }


    private void start(final String app_status) {
        new Timer().schedule(new TimerTask() {
            @Override
            public void run() {
                view.startHomeActivity(app_status);
            }
        }, 300);
    }

    private void startLogin() {
        new Timer().schedule(new TimerTask() {
            @Override
            public void run() {
                view.startLoginActivity();
            }
        }, 300);
    }


}
