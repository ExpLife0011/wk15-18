package com.ty.xrht.feature.Home.interactor;

import android.os.AsyncTask;

import com.tsy.sdk.acache.ACache;
import com.ty.xrht.ApiConfig;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.feature.Home.Module.CompanyBean;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.Module.homefrag.TitleInfoImpl;
import com.ty.xrht.feature.Home.Module.homefrag.ValueInfoImpl;
import com.ty.xrht.feature.Home.bean.CompanySubject;
import com.ty.xrht.feature.Home.bean.RealSensorBean;
import com.ty.xrht.feature.Home.bean.SwitchBean;
import com.ty.xrht.feature.Home.contract.HomeFragContract;
import com.ty.xrht.http.BaseResponse;
import com.ty.xrht.http.ObjectLoader;
import com.ty.xrht.http.RetrofitServiceManager;
import com.ty.xrht.utils.GsonUtils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import retrofit2.http.GET;
import retrofit2.http.Query;
import rx.Observable;
import rx.functions.Func1;

/**
 * Created by yeah on 2018/1/11.
 */

public class HomeFragInteractor implements HomeFragContract.Interactor{


    ACache cache = GlobalApp.getInstance().getACache();


    @Override
    public void writeSwitchStatus(String tid, String json) {
        cache.put(ApiConfig.SAVE_SWITCH_KEY+tid,json);
    }
}
