package com.ty.xrht.feature.Home.presenter;

import android.util.Log;
import android.widget.Toast;

import com.tsy.sdk.acache.ACache;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.feature.Home.Module.CompanyBean;
import com.ty.xrht.feature.Home.Module.Node;
import com.ty.xrht.feature.Home.Module.TreeListViewAdapter;
import com.ty.xrht.feature.Home.contract.ControlContract;
import com.ty.xrht.feature.Home.contract.HomeContract;
import com.ty.xrht.feature.Home.interactor.ControlInteractor;
import com.ty.xrht.feature.Home.interactor.HomeInteractor;
import com.ty.xrht.feature.Home.view.HomeActivity;
import com.ty.xrht.pollingService.PollingService;
import com.ty.xrht.utils.PollingUtils;

import java.util.ArrayList;
import java.util.List;

import rx.Observer;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

/**
 * Created by yeah
 */
public class HomePresenter implements HomeContract.Presenter {

    private HomeContract.View mView;
    private HomeContract.Interactor mInteractor;
    private ControlContract.Interactor mControlInteractor;
    ACache mCache = GlobalApp.getInstance().getACache();

    private List<CompanyBean> mDatas = new ArrayList<CompanyBean>();
    private TreeListViewAdapter mAdapter;
    public static final String NO_LOCATION="NO_TERMINAL_SELECTED";
    private String currentTerminalId = NO_LOCATION;

    public HomePresenter(HomeContract.View view) {
        mView = view;
        mInteractor = new HomeInteractor();
        mControlInteractor = new ControlInteractor();

    }

    public Observer<List<CompanyBean>> observer = new Observer<List<CompanyBean>>() {
        @Override
        public void onCompleted() {

        }

        @Override
        public void onError(Throwable e) {
            Toast.makeText(GlobalApp.getInstance(), "获取单位失败，请稍后再试！", Toast.LENGTH_LONG).show();
        }

        @Override
        public void onNext(List<CompanyBean> s) {
            initListView(s);

        }
    };

    @Override
    public void pullSubComTree() {
        mInteractor.getTreeListTask(mInteractor.getDepid()).subscribe(observer);
    }

    @Override
    public void onCompanyItemClick(Node node, final int position) {
        mInteractor.getTreeListTask(String.valueOf(node.getId())).subscribe(new Observer<List<CompanyBean>>() {
            @Override
            public void onCompleted() {

            }

            @Override
            public void onError(Throwable e) {
                Toast.makeText(GlobalApp.getInstance(), "获取单位失败，请稍后再试！", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onNext(List<CompanyBean> companyBeen) {
                mView.appendListView(companyBeen, position);
            }
        });
    }

    @Override
    public void onTerminalItemClick(Node node, int position) {
        mView.backToFirstFragment();
        String clickTid = String.valueOf(node.getId());
        Log.v(GlobalApp.LOG_TAG, "click + " + node.getName());
        try {
            PollingUtils.stopPollingService(mView.getContext(), PollingService.class, PollingService.ACTION);
            mView.stopPollingService();
        }catch (Exception e){
            Log.e(GlobalApp.LOG_TAG,"Stop Polling Service Error!");
        }
        this.currentTerminalId = String.valueOf(node.getId());
        PollingUtils.startPollingService(mView.getContext(), 10, PollingService.class, PollingService.ACTION,clickTid);
        mView.setBarTitle(node.getName());
        ((HomeActivity)mView).setTerminalChanged(true);
        //点击终端，获取终端开关配置。
        getSwitchTask(clickTid);

    }



    public Observer<Boolean> observer1 = new Observer<Boolean>() {
        @Override
        public void onCompleted() {
        }

        @Override
        public void onError(Throwable e) {
            e.printStackTrace();
            Toast.makeText(GlobalApp.getInstance(), "获取PLC开关配置失败，请稍后再试！", Toast.LENGTH_LONG).show();
        }

        @Override
        public void onNext(Boolean s) {
        }
    };

    public void getSwitchTask(String terminalId){
        mControlInteractor.getSwitchReq(terminalId)
                .subscribeOn(Schedulers.io())
                .unsubscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread()).subscribe(observer1);
    }





    @Override
    public String getCurrentTerminalId() {
        return this.currentTerminalId;
    }

    public void initListView(List<CompanyBean> list) {
        mView.fillListView(list);

    }

}
