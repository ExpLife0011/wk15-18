package com.ty.xrht.pollingService;

import com.ty.xrht.Base.BasePresenter;
import com.ty.xrht.Base.BaseView;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.bean.RealSensorBean;

import java.util.List;
import java.util.Map;

import rx.Observable;

/**
 * Created by yeah on 2018/1/12.
 */

public class PollingContract {

    interface View extends BaseView {
        void broadSensorData(List<HomeInformationModle> list);

    }

    interface Presenter extends BasePresenter {
        void getSensorTask(String terminalId);

    }

    interface Interactor {

        Observable<RealSensorBean> realSensorReq(Map<String,Object> map);
        List<HomeInformationModle> convertData(RealSensorBean realSensorBean);
        String readAccessToken();

    }


}
