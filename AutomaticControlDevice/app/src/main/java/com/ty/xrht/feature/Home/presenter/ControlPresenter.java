package com.ty.xrht.feature.Home.presenter;

import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.google.gson.Gson;
import com.suke.widget.SwitchButton;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.bean.RealSensorBean;
import com.ty.xrht.feature.Home.bean.SwitchBean;
import com.ty.xrht.feature.Home.bean.SwitchResultBean;
import com.ty.xrht.feature.Home.contract.ControlContract;
import com.ty.xrht.feature.Home.interactor.ControlInteractor;
import com.ty.xrht.feature.Home.interactor.HomeFragInteractor;
import com.ty.xrht.login.LoginContract;
import com.ty.xrht.login.LoginInteractor;
import com.ty.xrht.utils.LoginUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import rx.Observer;

/**
 * Created by yeah on 2018/1/12.
 */

public class ControlPresenter implements ControlContract.Presenter {


    private ControlContract.View view;
    private ControlContract.Interactor mControlInteractor;

    public ControlPresenter(ControlContract.View view) {
        this.view = view;
        mControlInteractor = new ControlInteractor();
    }


    @Override
    public void loadDataToView(String tid){
        List<StatusInfoImpl>  list = mControlInteractor.getSwitchStatusFromCache(tid);
        view.initListView(list);
    }


    @Override
    public void refreshView(List<HomeInformationModle> rb){
        List<StatusInfoImpl>  list = new ArrayList<StatusInfoImpl>();
        for(Iterator<HomeInformationModle> it = rb.iterator();it.hasNext();){
            HomeInformationModle hmi = it.next();
            if(HomeInformationModle.STATUS_TYPE == hmi.type){
                list.add((StatusInfoImpl)hmi);
            }
        }
        view.initListView(list);
    }



    Observer<Boolean> observer = new Observer<Boolean>() {
        @Override
        public void onCompleted() {

        }

        @Override
        public void onError(Throwable e) {
        }

        @Override
        public void onNext(Boolean issuccuess) {

        }
    };

    @Override
    public void controlSwitchTask(final SwitchButton switchButton, String tid, String switchName, boolean wantToOpen) {
        mControlInteractor.controlSwitchTask(tid,switchName,wantToOpen).subscribe(new Observer<Boolean>() {
            @Override
            public void onCompleted() {

            }

            @Override
            public void onError(Throwable e) {
                Toast.makeText(GlobalApp.getInstance(),"网络请求异常，请稍后再试！",Toast.LENGTH_SHORT).show();

            }

            @Override
            public void onNext(Boolean aBoolean) {
                ControlPresenter.this.view.cancelDialog();
                if(aBoolean){
                    switchButton.toggle();
                    Toast.makeText(GlobalApp.getInstance(),"操作成功！",Toast.LENGTH_SHORT).show();
                }else{
                    Toast.makeText(GlobalApp.getInstance(),"操作失败！",Toast.LENGTH_SHORT).show();

                }
            }
        });

    }

    @Override
    public void saveToggledSwitchStatus(String tid,List<StatusInfoImpl> rb) {
        String data = new Gson().toJson(rb);
       // new HomeFragInteractor().writeSwitchStatus(tid,data);


    }


    public void saveSwitchStatus(String tid,List<HomeInformationModle> rb) {
        List<StatusInfoImpl>  list = new ArrayList<StatusInfoImpl>();
        for(Iterator<HomeInformationModle> it = rb.iterator();it.hasNext();){
            HomeInformationModle hmi = it.next();
            if(HomeInformationModle.STATUS_TYPE == hmi.type){
                list.add((StatusInfoImpl)hmi);
            }
        }
        String data = new Gson().toJson(list);
        Log.v("551",tid);

    }



}