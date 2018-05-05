package com.ty.xrht.index;

import com.ty.xrht.Base.BasePresenter;
import com.ty.xrht.Base.BaseView;
import com.ty.xrht.Base.BaseNetTaskCallBackInterface;
import com.ty.xrht.index.Bean.UpdateXmlService;

import rx.Observable;

/**
 * Created by yeah on 2017/10/21.
 */

public interface IndexContract {


    public static final String MAIN_TO_HOME_BUNDLE = "MainToHomeActivity";
    public static final String WRONG_NET_STATUS = "WrongNet";
    public static final String NORMAL_STATUS = "normal";
    public static final String NOT_REGITSTER_STATUS = "empty";
    interface View extends BaseView {
        void startHomeActivity(String action);
        void startLoginActivity();

    }

    interface Presenter extends BasePresenter {

        void initApp();

    }

    interface Interactor {
        String getAccesstoken();
        void clearAllCache();
        Observable<UpdateXmlService> checkUpdateInfo();
    }


}
