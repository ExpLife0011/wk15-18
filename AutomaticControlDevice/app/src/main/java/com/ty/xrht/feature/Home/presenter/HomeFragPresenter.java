package com.ty.xrht.feature.Home.presenter;

import android.util.Log;

import com.google.gson.Gson;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.contract.HomeFragContract;
import com.ty.xrht.feature.Home.interactor.HomeFragInteractor;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * Created by yeah on 2018/1/13.
 */

public class HomeFragPresenter implements HomeFragContract.Presenter{

    HomeFragContract.View view;
    HomeFragContract.Interactor mInteractor;
    private List<HomeInformationModle> mDatas;


    public HomeFragPresenter(HomeFragContract.View view){
        this.view = view;
        mInteractor = new HomeFragInteractor();
    }


    @Override
    public void saveSwitchStatus(String tid,List<HomeInformationModle> rb) {
        List<StatusInfoImpl>  list = new ArrayList<StatusInfoImpl>();
        for(Iterator<HomeInformationModle> it = rb.iterator();it.hasNext();){
            HomeInformationModle hmi = it.next();
            if(HomeInformationModle.STATUS_TYPE == hmi.type){
                list.add((StatusInfoImpl)hmi);
            }
        }
        String data = new Gson().toJson(list);
        mInteractor.writeSwitchStatus(tid,data);


    }
}
