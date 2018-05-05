package com.ty.xrht.index;

import com.tsy.sdk.acache.ACache;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.http.BaseResponse;
import com.ty.xrht.http.RetrofitXmlManager;
import com.ty.xrht.index.Bean.UpdateXmlService;
import com.ty.xrht.location.LocationBean;

import java.util.List;

import retrofit2.http.GET;
import retrofit2.http.Query;
import rx.Observable;
import rx.functions.Func1;

/**
 * Created by yeah on 2017/10/21.
 */

public class IndexInteractor implements IndexContract.Interactor{
    ACache mCache = GlobalApp.getInstance().getACache();


    VersionUpdate updateVersionApi;


    IndexInteractor(){
        updateVersionApi = RetrofitXmlManager.getInstance().create(VersionUpdate.class);
    }


    @Override
    public Observable<UpdateXmlService> checkUpdateInfo() {
        return updateVersionApi.verUpdateInfo();
    }



    @Override
    public String getAccesstoken() {
        String access_token = mCache.getAsString("access_token");
        return access_token;
    }

    @Override
    public void clearAllCache() {
        mCache.clear();
    }


    public interface VersionUpdate {
        @GET("/Resource/version.xml")
        Observable<UpdateXmlService> verUpdateInfo();
    }



}
