package com.ty.xrht.http;

import com.ty.xrht.ApiConfig;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava.RxJavaCallAdapterFactory;
import retrofit2.converter.simplexml.SimpleXmlConverterFactory;

/**
 * Created by yeah on 2018/4/2.
 */

public class RetrofitXmlManager {
    private static final int DEFAULT_TIME_OUT = 5;//超时时间 5s
    private static final int DEFAULT_READ_TIME_OUT = 10;
    private Retrofit mRetrofit;
    private RetrofitXmlManager(){
        // 创建 OKHttpClient


        OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.connectTimeout(DEFAULT_TIME_OUT, TimeUnit.SECONDS);//连接超时时间
        builder.writeTimeout(DEFAULT_READ_TIME_OUT,TimeUnit.SECONDS);//写操作 超时时间
        builder.readTimeout(DEFAULT_READ_TIME_OUT,TimeUnit.SECONDS);//读操作超时时间

        // 创建Retrofit
        mRetrofit = new Retrofit.Builder()
                .baseUrl(ApiConfig.BASE_XML_DOMAIN)
                .client(builder.build())
                .addConverterFactory(SimpleXmlConverterFactory.create())
                .addCallAdapterFactory(RxJavaCallAdapterFactory.create())
                .build();
    }


    private static class SingletonHolder{
        private static final RetrofitXmlManager INSTANCE = new RetrofitXmlManager();
    }

    /**
     * 获取RetrofitXmlManager
     * @return
     */
    public static RetrofitXmlManager getInstance(){
        return SingletonHolder.INSTANCE;
    }

    /**
     * 获取对应的Service
     * @param service Service 的 class
     * @param <T>
     * @return
     */
    public <T> T create(Class<T> service){
        return mRetrofit.create(service);
    }

}