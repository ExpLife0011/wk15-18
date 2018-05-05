package com.ty.xrht;

import android.app.Application;
import android.content.Context;

import com.tsy.sdk.acache.ACache;

/**
 * 全局Application
 */
public class GlobalApp extends Application {

    public static final String LOG_TAG = "xrht.autoDevice";
    public static final String BROADCAST_ACTION = "Polling_Sensor_Info";
    public static final String BROADCAST_ERROR_ACTION = "Polling_Sensor_Info_Error";
    public static final String BROADCAST_INTENT_KEY = "RealSensorInfo";
    private static GlobalApp mGlobalApp;
    private Context mContext;

    @Override
    public void onCreate() {
        super.onCreate();

        mGlobalApp = this;
        this.mContext = getApplicationContext();
    }

    /**
     * 获取全局Application
     * @return
     */
    public static synchronized GlobalApp getInstance() {
        return mGlobalApp;
    }

    /**
     * 获取ApplicationContext
     * @return
     */
    public Context getContext() {
        return mContext;
    }

    public ACache getACache(){
        ACache mCache = ACache.get(this);
        return mCache;
    }

}
