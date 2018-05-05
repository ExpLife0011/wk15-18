package com.ty.xrht.feature.Home.interactor;

import android.util.Log;

import com.tsy.sdk.acache.ACache;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.feature.Home.Module.CompanyBean;
import com.ty.xrht.feature.Home.bean.CompanySubject;
import com.ty.xrht.feature.Home.contract.HomeContract;
import com.ty.xrht.http.BaseResponse;
import com.ty.xrht.http.FragLoader;
import com.ty.xrht.http.RetrofitServiceManager;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import retrofit2.http.GET;
import retrofit2.http.Query;
import rx.Observable;
import rx.functions.Func1;

/**
 * Created by yeah
 */
public class HomeInteractor extends FragLoader implements HomeContract.Interactor {



    ACache mCache = GlobalApp.getInstance().getACache();
    HomeInteractor.TerminalTreeListApi mTerminalTreeListApi;

    public HomeInteractor() {
        mTerminalTreeListApi = RetrofitServiceManager.getInstance().create(TerminalTreeListApi.class);
    }


    @Override
    public Observable<List<CompanyBean>> getTreeListTask(String depId) {
        return observe(mTerminalTreeListApi.getTreeListReq(depId)).map(new Func1<BaseResponse < List<CompanySubject >>, List < CompanyBean >> () {
            @Override
            public List<CompanyBean> call(BaseResponse<List<CompanySubject>> respData) {

                List<CompanyBean> listTree = new ArrayList<CompanyBean>();
                List<CompanySubject> datas = respData.getData();
                for(Iterator<CompanySubject> it = datas.iterator();it.hasNext();){
                    CompanySubject cs = it.next();
                        listTree.add(new CompanyBean(cs.getRealId(),cs.getRealPid(),cs.getName(),cs.isTerminal()));
                }
                return listTree;
            }
        });
    }


    @Override
    public String getDepid() {
        return mCache.getAsString("depId");
    }

    public interface TerminalTreeListApi {
        @GET("/api/Terminal/Terminal/GetTerminalTreeList")
        Observable<BaseResponse<List<CompanySubject>>> getTreeListReq(@Query("depId") String depId);
    }



}
