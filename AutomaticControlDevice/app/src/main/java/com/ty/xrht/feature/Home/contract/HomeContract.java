package com.ty.xrht.feature.Home.contract;

import android.content.Context;

import com.ashokvarma.bottomnavigation.BottomNavigationBar;
import com.ty.xrht.Base.BasePresenter;
import com.ty.xrht.Base.BaseView;
import com.ty.xrht.feature.Home.Module.CompanyBean;
import com.ty.xrht.feature.Home.Module.Node;

import java.util.List;

import rx.Observable;

public interface HomeContract {

    interface View extends BaseView , BottomNavigationBar.OnTabSelectedListener {
        void fillListView(List<CompanyBean> mDatas);
        void appendListView(List<CompanyBean> mDatas,int pos);
        void stopPollingService();
        void setBarTitle(String title);
        void handleIntent();
        void backToFirstFragment();
        Context getContext();
    }

    interface Presenter extends BasePresenter {
        void pullSubComTree();
        void onCompanyItemClick(Node node ,int position);
        void onTerminalItemClick(Node node , int position);
        String getCurrentTerminalId();
    }

    interface Interactor {
        Observable<List<CompanyBean>> getTreeListTask(String depId);
        String getDepid();

    }
}
