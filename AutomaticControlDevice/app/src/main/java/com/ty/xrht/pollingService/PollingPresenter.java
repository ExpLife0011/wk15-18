package com.ty.xrht.pollingService;

import android.util.Log;

import com.ty.xrht.GlobalApp;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.bean.RealSensorBean;
import com.ty.xrht.utils.LoginUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import rx.Observer;

/**
 * Created by yeah on 2018/1/12.
 */

public class PollingPresenter implements PollingContract.Presenter {


    PollingContract.View view;
    PollingContract.Interactor mInterator;

    PollingPresenter(PollingContract.View view) {
        this.view = view;
        mInterator = new PollingInteractor();

    }


    public Observer<RealSensorBean> observer = new Observer<RealSensorBean>() {
        @Override
        public void onCompleted() {

        }

        @Override
        public void onError(Throwable e) {
            //e.printStackTrace();
            Log.v(GlobalApp.LOG_TAG, "正在重新获取数据中");
            view.broadSensorData(null);


        }

        @Override
        public void onNext(RealSensorBean s) {
            Log.v(GlobalApp.LOG_TAG, s.getRcvTime());
            initList(s);
        }
    };


    @Override
    public void getSensorTask(String terminalId) {
        Map<String, Object> mapParams = getReqParams(terminalId);
        mInterator.realSensorReq(mapParams).subscribe(observer);

    }


    private Map<String, Object> getReqParams(String terminalId) {

        /*产生随机数*/
        int randomNum = LoginUtils.getMillisecond();
        long timestamp = LoginUtils.getTimestamp();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("sign", LoginUtils.getSigin(timestamp, randomNum));
        map.put("timestamp", timestamp);
        map.put("randomNum", randomNum);
        map.put("token", mInterator.readAccessToken());
        map.put("terminalId", terminalId);

        return map;

    }


    public void initList(RealSensorBean rsb) {
        List<HomeInformationModle> md = mInterator.convertData(rsb);
        view.broadSensorData(md);
    }


}
