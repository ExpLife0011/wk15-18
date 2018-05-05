package com.ty.xrht.feature.Home.contract;

import com.ashokvarma.bottomnavigation.BottomNavigationBar;
import com.ty.xrht.Base.BasePresenter;
import com.ty.xrht.Base.BaseView;
import com.ty.xrht.feature.Home.Module.CompanyBean;
import com.ty.xrht.feature.Home.Module.Node;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.bean.RealSensorBean;

import java.util.List;

import rx.Observable;

/**
 * Created by yeah on 2018/1/11.
 */

public class HomeFragContract {
    public interface View extends BaseView {
       public  void refreshView(List<HomeInformationModle> m ,boolean isb);
    }

    public interface Presenter extends BasePresenter {
        void saveSwitchStatus(String tid,List<HomeInformationModle>  rb);
    }

    public interface Interactor {
        void writeSwitchStatus(String tid,String json);
    }


}
