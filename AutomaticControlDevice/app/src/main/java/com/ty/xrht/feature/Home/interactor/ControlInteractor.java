package com.ty.xrht.feature.Home.interactor;

import android.util.Log;

import com.google.gson.Gson;
import com.tsy.sdk.acache.ACache;
import com.ty.xrht.ApiConfig;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.bean.SwitchBean;
import com.ty.xrht.feature.Home.bean.SwitchResultBean;
import com.ty.xrht.feature.Home.contract.ControlContract;
import com.ty.xrht.http.BaseResponse;
import com.ty.xrht.http.ObjectLoader;
import com.ty.xrht.http.RetrofitServiceManager;
import com.ty.xrht.utils.GsonUtils;
import com.ty.xrht.utils.LoginUtils;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import retrofit2.http.FieldMap;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;
import rx.Observable;
import rx.functions.Func1;

/**
 * Created by yeah on 2018/1/12.
 */

public class ControlInteractor extends ObjectLoader implements ControlContract.Interactor {

    ACache mCache = GlobalApp.getInstance().getACache();
    ControlInteractor.GetPLCApi mGetPLCApi;
    ControlInteractor.PassthroughMsgApi passthroughMsgApi;

    public ControlInteractor() {
        mGetPLCApi = RetrofitServiceManager.getInstance().create(ControlInteractor.GetPLCApi.class);
        passthroughMsgApi = RetrofitServiceManager.getInstance().create(ControlInteractor.PassthroughMsgApi.class);

    }


    @Override
    public Observable<Boolean> getSwitchReq(final String tid) {
        Map<String, Object> mapParams = getPLCParams(tid);
        return observe(mGetPLCApi.getPlcSwitchReq(mapParams).map(new Func1<BaseResponse<List<SwitchBean>>, Boolean>() {
            @Override
            public Boolean call(BaseResponse<List<SwitchBean>> listBaseResponse) {
                List<SwitchBean> sb = listBaseResponse.getData();
                String jsonb = new Gson().toJson(sb);
                mCache.put("TERMINAL_" + tid, jsonb, 2 * ACache.TIME_DAY);
                return true;
            }
        }));
    }

    //获取终端开关信息

    public interface GetPLCApi {
        @FormUrlEncoded
        @POST("/api/Terminal/Terminal/GetPLCSwitch")
        Observable<BaseResponse<List<SwitchBean>>> getPlcSwitchReq(@FieldMap Map<String, Object> map);
    }


    private Map<String, Object> getPLCParams(String terminalId) {

        int randomNum = LoginUtils.getMillisecond();
        long timestamp = LoginUtils.getTimestamp();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("sign", LoginUtils.getSigin(timestamp, randomNum));
        map.put("timestamp", timestamp);
        map.put("randomNum", randomNum);
        map.put("token", readToken());
        map.put("terminalId", terminalId);
        return map;
    }

    //控制开关接口


    public interface PassthroughMsgApi {
        @FormUrlEncoded
        @POST("/api/Terminal/Terminal/PassthroughMsg")
        Observable<BaseResponse<SwitchResultBean>> controlSwitchReq(@FieldMap Map<String, Object> map);
    }


    @Override
    public Observable<Boolean> controlSwitchTask(String tid, String switchName, boolean wantToOpen) {
        Map<String, Object> mapParams = getControlMap(tid, switchName, wantToOpen);
        return observe(passthroughMsgApi.controlSwitchReq(mapParams).map(new Func1<BaseResponse<SwitchResultBean>, Boolean>() {
            @Override
            public Boolean call(BaseResponse<SwitchResultBean> switchResultBeanBaseResponse) {
                return switchResultBeanBaseResponse.isSuccess();
            }
        }));
    }


    private SwitchBean readClickSwitch(String tid, String switchName) {

        String cache = mCache.getAsString("TERMINAL_" + tid);
        List<SwitchBean> switches = GsonUtils.jsonToArrayList(cache, SwitchBean.class);
        if (switches != null) {
            for (Iterator<SwitchBean> it = switches.iterator(); it.hasNext(); ) {
                SwitchBean sb = it.next();
                if (switchName.equals(sb.getSWITCHNAME())) {
                    return sb;
                }
            }
        }
        return null;

    }

    private Map<String, Object> getControlMap(String terminalId, String switchName, boolean wantToOpen) {

        int randomNum = LoginUtils.getMillisecond();
        long timestamp = LoginUtils.getTimestamp();
        SwitchBean sb = readClickSwitch(terminalId, switchName);

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("sign", LoginUtils.getSigin(timestamp, randomNum));
        map.put("timestamp", timestamp);
        map.put("randomNum", randomNum);
        map.put("token", readToken());
        map.put("terminalId", terminalId);
        map.put("switchName", sb.getSWITCHNAME());
        map.put("typeDescirbe", wantToOpen ? "打开开关" : "关闭开关");
        map.put("msg", wantToOpen ? sb.getOPENCMD() : sb.getCLOSECMD());


        return map;
    }

    String readToken() {
        return mCache.getAsString("access_token");
    }

    @Override
    public List<StatusInfoImpl> getSwitchStatusFromCache(String terminalId) {
        String datas = mCache.getAsString(ApiConfig.SAVE_SWITCH_KEY + terminalId);
        List<StatusInfoImpl> list = GsonUtils.jsonToArrayList(datas, StatusInfoImpl.class);
        return list;
    }
}
