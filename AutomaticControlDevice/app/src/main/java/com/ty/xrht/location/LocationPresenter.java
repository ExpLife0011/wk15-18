package com.ty.xrht.location;

import android.widget.Toast;

import com.ty.xrht.GlobalApp;
import com.ty.xrht.feature.Home.Module.CompanyBean;

import java.util.List;

import rx.Observer;

/**
 * Created by yeah on 2018/1/12.
 */

public class LocationPresenter implements LocationContract.Presenter{

    LocationContract.View view;
    LocationContract.Interactor mLocationInteractor;


    public LocationPresenter(LocationContract.View view){
        this.view = view;
        mLocationInteractor = new LocationInteractor();

    }

    public Observer<LocationBean> observer = new Observer<LocationBean>() {
        @Override
        public void onCompleted() {

        }

        @Override
        public void onError(Throwable e) {
            e.printStackTrace();
            Toast.makeText(GlobalApp.getInstance(), "获取地址失败，请稍后重试！", Toast.LENGTH_LONG).show();
            view.cancelDialog();
        }

        @Override
        public void onNext(LocationBean s) {
            view.initToolbar(s.getDevName());
            view.initMap(s.getLat(),s.getLng());
            view.cancelDialog();

        }
    };
    @Override
    public void getLocationTask(String terminalId){
        mLocationInteractor.getLocation(terminalId).subscribe(observer);
    }



}
