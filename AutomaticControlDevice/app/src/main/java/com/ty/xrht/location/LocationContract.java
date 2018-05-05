package com.ty.xrht.location;

import com.ty.xrht.Base.BasePresenter;
import com.ty.xrht.Base.BaseView;

import rx.Observable;

/**
 * Created by yeah on 2018/1/12.
 */

public class LocationContract {

    interface View extends BaseView{

        void initToolbar(String title);
        void initMap(double lat,double lng );
        void cancelDialog();

    }

    interface Presenter extends BasePresenter {
        void getLocationTask(String teid);
    }

    interface Interactor {
        Observable<LocationBean> getLocation(String teid);
    }
}
