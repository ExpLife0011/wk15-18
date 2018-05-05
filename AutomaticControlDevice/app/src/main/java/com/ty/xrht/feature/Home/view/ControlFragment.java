package com.ty.xrht.feature.Home.view;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.suke.widget.SwitchButton;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.R;
import com.ty.xrht.feature.Home.Module.ControlRecycleViewAdapter;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.contract.ControlContract;
import com.ty.xrht.feature.Home.presenter.ControlPresenter;
import com.ty.xrht.feature.Home.presenter.HomePresenter;
import com.ty.xrht.pollingService.PollingService;
import com.ty.xrht.utils.PollingUtils;
import com.ty.xrht.utils.ToastUtils;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.Unbinder;
import cn.pedant.SweetAlert.SweetAlertDialog;


/**
 * Created by yeah
 */
public class ControlFragment extends Fragment implements ControlContract.View {


    // private ArrayList<SwitchBean> datas;
    Unbinder unbinder;
    ControlContract.Presenter mPresenter;
    View view;
    @BindView(R.id.control_recycleview_id)
    RecyclerView mRecyclerView;
    SweetAlertDialog sweetAlertDialog;

    private ControlFragment.ReceiveBroadCast receiveBroadCast;

    public String tid;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        if (view == null) {
            view = inflater.inflate(R.layout.frag_control, container, false);
            //初始化RecyclerView
            Log.v(GlobalApp.LOG_TAG, this.getClass().getName() + ".onCreateView()");
        }
        unbinder = ButterKnife.bind(this, view);

        return view;

    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        Log.v(GlobalApp.LOG_TAG, "ControlFragment.onAttach()");
        mPresenter = new ControlPresenter(this);

        /** 注册广播 */
        receiveBroadCast = new ReceiveBroadCast();
        IntentFilter filter = new IntentFilter();
        filter.addAction(GlobalApp.BROADCAST_ACTION);    //只有持有相同的action的接受者才能接收此广播
        filter.addAction(GlobalApp.BROADCAST_ERROR_ACTION);
        getActivity().registerReceiver(receiveBroadCast, filter);
    }


    class ReceiveBroadCast extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            try {

                String action = intent.getAction();
                if (GlobalApp.BROADCAST_ACTION.equals(action)) {
                    Bundle bundle = intent.getExtras();
                    List<HomeInformationModle> list = (List<HomeInformationModle>) bundle.getSerializable(GlobalApp.BROADCAST_INTENT_KEY);
                    mPresenter.refreshView(list);

                } else if (GlobalApp.BROADCAST_ERROR_ACTION.equals(action) || action == null) {
                    HomeActivity hm = ((HomeActivity) getActivity());
                    hm.canncelDialog();
                    ToastUtils.showLong(hm, "获取数据失败，请稍后再试");
                    try {
                        PollingUtils.stopPollingService(hm.getContext(), PollingService.class, PollingService.ACTION);
                        hm.stopPollingService();
                    } catch (Exception e) {
                        Log.e(GlobalApp.LOG_TAG, "Stop Polling Service Error!");
                    }
                }
            } catch (Exception e) {

            }
        }
    }


    @Override
    public void onStart() {
        super.onStart();
        tid = ((HomeActivity) getActivity()).getHomeActivityTid();
        if (HomePresenter.NO_LOCATION.equals(tid)) {
            ToastUtils.showLong(getActivity(), "请先选择终端");
        } else {
            mPresenter.loadDataToView(tid);
        }
    }


    @Override
    public void initListView(List<StatusInfoImpl> datas) {
        mRecyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
        mRecyclerView.setAdapter(new ControlRecycleViewAdapter(this.getActivity(), datas, new ControlRecycleViewAdapter.SwitchClickCallBack() {
            @Override
            public void clickBtn(SwitchButton view, String name, boolean isChecked) {
                ((HomeActivity) ControlFragment.this.getActivity()).setTerminalChanged(true);
                killBroadCastReceive();
                showToggleConfirmDialog(view, name, isChecked);
            }

            @Override
            public void cacheNewStatusList(List<StatusInfoImpl> list) {
                String tid = ((HomeActivity) ControlFragment.this.getActivity()).getHomeActivityTid();
                mPresenter.saveToggledSwitchStatus(tid, list);
            }
        }));


    }


    public static ControlFragment newInstance(String content) {
        Bundle args = new Bundle();
        args.putString("terminalId", content);
        ControlFragment fragment = new ControlFragment();
        fragment.setArguments(args);
        return fragment;
    }


    @Override
    public void onDestroyView() {
        super.onDestroyView();
        unbinder.unbind();
        killBroadCastReceive();
        Log.v(GlobalApp.LOG_TAG, "ControlFragment.onDestroyView()");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.v(GlobalApp.LOG_TAG, "ControlFragment.onDestroy()");
    }


    void showToggleConfirmDialog(final SwitchButton view, final String switchName, final boolean isChecked) {

        String status = !isChecked ? "开启" : "关闭";
        String tips_content = "确定将开关" + switchName + "设置为" + status + "?";
        final String success_content = "成功" + status + switchName + "!";

        sweetAlertDialog = new SweetAlertDialog(getActivity(), SweetAlertDialog.WARNING_TYPE);

        sweetAlertDialog.setTitleText("提示")
                .setContentText(tips_content)
                .setCancelText("取消")
                .setConfirmText("确定")
                .showCancelButton(true)
                .setConfirmClickListener(new SweetAlertDialog.OnSweetClickListener() {
                    @Override
                    public void onClick(SweetAlertDialog sweetAlertDialog) {
                        //点击获取最新数据。
                        mPresenter.controlSwitchTask(view, ((HomeActivity) ControlFragment.this.getActivity()).getHomeActivityTid(), switchName, !isChecked);
                    }
                })
                .setCancelClickListener(new SweetAlertDialog.OnSweetClickListener() {
                    @Override
                    public void onClick(SweetAlertDialog sDialog) {
                        sDialog.dismissWithAnimation();
                    }
                })
                .show();
        sweetAlertDialog.setCancelable(false);


    }

    @Override
    public void cancelDialog() {
        if (sweetAlertDialog != null) {
            sweetAlertDialog.dismissWithAnimation();
        }
    }


    void killBroadCastReceive() {
        if (receiveBroadCast != null) {
            try {
                getActivity().unregisterReceiver(receiveBroadCast);
            } catch (IllegalArgumentException e) {
                if (e.getMessage().contains("Receiver not registered")) {
                } else {
                    throw e;
                }
            }
        }
    }


}
