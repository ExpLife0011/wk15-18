package com.ty.xrht.feature.Home.contract;

import com.suke.widget.SwitchButton;
import com.ty.xrht.Base.BasePresenter;
import com.ty.xrht.Base.BaseView;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.bean.Beans;
import com.ty.xrht.feature.Home.bean.RealSensorBean;
import com.ty.xrht.feature.Home.bean.SwitchBean;
import com.ty.xrht.feature.Home.bean.SwitchResultBean;
import com.ty.xrht.feature.Home.interactor.ControlInteractor;

import java.util.List;
import java.util.Map;

import rx.Observable;

/**
 * Created by yeah on 2018/1/12.
 */

public class ControlContract {

   public interface View extends BaseView {

       void initListView(List<StatusInfoImpl> datas);
       void cancelDialog();
    }

    public interface Presenter extends BasePresenter {
        void loadDataToView(String tid);
        void refreshView(List<HomeInformationModle> rb);
        void controlSwitchTask(SwitchButton view,String tid, String switchName, boolean wantToOpen);
        void saveToggledSwitchStatus(String tid,List<StatusInfoImpl> rb);

        }

    public interface Interactor {
        Observable<Boolean> getSwitchReq(String tid);
        Observable<Boolean> controlSwitchTask(String tid, String switchName, boolean wantToOpen);
        List<StatusInfoImpl> getSwitchStatusFromCache(String terminalId);

    }

}
