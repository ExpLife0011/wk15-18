package com.ty.xrht.pollingService;

import com.tsy.sdk.acache.ACache;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.Module.homefrag.TitleInfoImpl;
import com.ty.xrht.feature.Home.Module.homefrag.ValueInfoImpl;
import com.ty.xrht.feature.Home.bean.RealSensorBean;
import com.ty.xrht.http.BaseResponse;
import com.ty.xrht.http.ObjectLoader;
import com.ty.xrht.http.PreResponseLoad;
import com.ty.xrht.http.RetrofitServiceManager;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import retrofit2.http.FieldMap;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;
import rx.Observable;

/**
 * Created by yeah on 2018/1/12.
 */

public class PollingInteractor extends ObjectLoader implements PollingContract.Interactor {

    ACache mCache = GlobalApp.getInstance().getACache();
    PollingInteractor.PollingSensorApi mPollingSensorApi ;
    public PollingInteractor(){
        mPollingSensorApi = RetrofitServiceManager.getInstance().create(PollingSensorApi.class);
    }


    @Override
    public Observable<RealSensorBean> realSensorReq(Map<String,Object> map){
        return observe(mPollingSensorApi.getRealSensorReq(map).map(new PreResponseLoad<RealSensorBean>()));
    }

    public interface PollingSensorApi{
        @FormUrlEncoded
        @POST("/api/Terminal/Terminal/GetRealSensor")
        Observable<BaseResponse<RealSensorBean>> getRealSensorReq(@FieldMap Map<String,Object> map);
    }

    @Override
    public String readAccessToken() {
        return  mCache.getAsString("access_token");
    }



    @Override
    public List<HomeInformationModle> convertData(RealSensorBean realSensorBean){
        String recTime = realSensorBean.getRcvTime();
        List<HomeInformationModle> mDatas = new ArrayList<HomeInformationModle>();
        TitleInfoImpl tii = new TitleInfoImpl();
        tii.setTitleName("开关状态");
        tii.setTitleTime(recTime);
        mDatas.add(tii);
        for(Iterator<RealSensorBean.RunlistBean> it = realSensorBean.getRunlist().iterator(); it.hasNext();){
            RealSensorBean.RunlistBean rb = it.next();
            if(!"".equals(rb.getSwitchName())){
                StatusInfoImpl sii = new StatusInfoImpl();
                sii.setSwitchName(rb.getSwitchName());
                sii.setStatus(getSwitchStatus(rb.getSwitchRun()));
                mDatas.add(sii);
            }
        }
        TitleInfoImpl tii2 = new TitleInfoImpl();
        tii2.setTitleName("设备读数");
        tii2.setTitleTime(recTime);
        mDatas.add(tii2);
        for(Iterator<RealSensorBean.SensorlistBean> it =realSensorBean.getSensorlist().iterator();it.hasNext();){
            RealSensorBean.SensorlistBean sb = it.next();
            if((!"".equals(sb.getUnitName())) && sb.getSensorName()!=null){
                ValueInfoImpl vii = new ValueInfoImpl();
                vii.setValue((float) sb.getSensorValue());
                vii.setValueName(sb.getSensorName());
                vii.setValueQuantity(sb.getUnitName());
                mDatas.add(vii);
            }
        }
        return mDatas;
    }

    String getSwitchStatus(String switchRun){
        if("关".equals(switchRun)){
            return StatusInfoImpl.SWITCH_CLOSED;
        }else{
            return StatusInfoImpl.SWITCH_OPEN;
        }
    }




}
