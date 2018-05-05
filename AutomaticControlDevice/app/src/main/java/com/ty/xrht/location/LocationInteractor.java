package com.ty.xrht.location;

import com.ty.xrht.http.BaseResponse;
import com.ty.xrht.http.ObjectLoader;
import com.ty.xrht.http.RetrofitServiceManager;

import java.util.List;

import retrofit2.http.GET;
import retrofit2.http.Query;
import rx.Observable;
import rx.functions.Func1;

/**
 * Created by yeah on 2018/1/12.
 */

public class LocationInteractor extends ObjectLoader implements LocationContract.Interactor {



    LocationInteractor.LocationApi mLocationApi;

    public LocationInteractor() {
        mLocationApi = RetrofitServiceManager.getInstance().create(LocationApi.class);
    }


    @Override
    public Observable<LocationBean> getLocation(String teid) {
        return observe(mLocationApi.getTeLocation(teid).map(new Func1<BaseResponse<List<LocationBean>>, LocationBean>() {
            @Override
            public LocationBean call(BaseResponse<List<LocationBean>> listBaseResponse) {
                if(listBaseResponse.isSuccess()){
                    LocationBean bean = listBaseResponse.getData().get(0);
                    return bean;
                }else{
                    return null;
                }
            }
        }));
    }

    public interface LocationApi {
        @GET("/api/Terminal/Terminal/GetRealLocate")
        Observable<BaseResponse<List<LocationBean>>> getTeLocation(@Query("terminalIds") String terminalId);
    }



}
