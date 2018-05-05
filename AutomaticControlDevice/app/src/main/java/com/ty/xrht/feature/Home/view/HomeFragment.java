package com.ty.xrht.feature.Home.view;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.scwang.smartrefresh.layout.api.RefreshLayout;
import com.scwang.smartrefresh.layout.header.BezierRadarHeader;
import com.scwang.smartrefresh.layout.listener.OnRefreshListener;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.R;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.Module.homefrag.HomeRecyAdapter;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.Module.homefrag.TitleInfoImpl;
import com.ty.xrht.feature.Home.Module.homefrag.ValueInfoImpl;
import com.ty.xrht.feature.Home.contract.HomeContract;
import com.ty.xrht.feature.Home.contract.HomeFragContract;
import com.ty.xrht.feature.Home.presenter.HomeFragPresenter;
import com.ty.xrht.pollingService.PollingService;
import com.ty.xrht.utils.PollingUtils;
import com.ty.xrht.utils.ToastUtils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.Unbinder;

import static com.ty.xrht.R.mipmap.view;

/**
 * Created by yeah
 */
public class HomeFragment extends Fragment implements HomeFragContract.View {

    Unbinder unbinder;
    @BindView(R.id.home_frag_refreshLayout)
    RefreshLayout mRefreshLayout;
    @BindView(R.id.home_frag_recyclerview)
    RecyclerView mRecycleView;

    @BindView(R.id.info_title_layout)
    LinearLayout titleLayout;
    @BindView(R.id.info_txt_Title)
    TextView infoTitle;

    private GridLayoutManager gManager;
    public HomeRecyAdapter pAdapter;
    private int lastFirstVisibleItem = -1;

    public HomeFragContract.Presenter mPresenter;
    private ReceiveBroadCast receiveBroadCast;

    View view;

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        this.mPresenter = new HomeFragPresenter(this);

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
                    if (list != null) {
                        if (((HomeActivity) HomeFragment.this.getActivity()).isTerminalChanged()) {
                            String tid = ((HomeActivity) HomeFragment.this.getActivity()).getHomeActivityTid();
                            mPresenter.saveSwitchStatus(tid, list);
                            refreshView(list, true);
                            (((HomeActivity) HomeFragment.this.getActivity())).setTerminalChanged(false);
                        } else {

                            refreshView(list, false);
                        }
                    } else {
                        // 清空数据
                    }

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
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        if (view == null) {
            view = inflater.inflate(R.layout.frag_home, container, false);
        }
        unbinder = ButterKnife.bind(this, view);
        return view;
    }


    //获取status的个数

    int getStatusCount(List<HomeInformationModle> mds) {
        int statusCount = 0;
        for (Iterator<HomeInformationModle> it = mds.iterator(); it.hasNext(); ) {
            HomeInformationModle hm = it.next();
            if (HomeInformationModle.STATUS_TYPE == hm.type) {
                statusCount++;
            }
        }
        return statusCount;

    }


    @Override
    public void refreshView(List<HomeInformationModle> newDatas, boolean isNewTerminal) {
        ((HomeActivity) getActivity()).canncelDialog();
        if (isNewTerminal) {
            setAdapter(newDatas);
        } else {
            pAdapter.refreshView(newDatas);
        }
    }


    void setAdapter(final List<HomeInformationModle> mDatas) {
        titleLayout.setVisibility(View.VISIBLE);
        mRefreshLayout.setRefreshHeader(new BezierRadarHeader(getActivity()).setPrimaryColorId(R.color.colorPrimary));
        mRefreshLayout.setOnRefreshListener(new OnRefreshListener() {
            @Override
            public void onRefresh(RefreshLayout refreshlayout) {
                mRefreshLayout.finishRefresh(2000);
            }
        });


        gManager = new GridLayoutManager(getActivity(), 4);
        gManager.setSpanSizeLookup(new GridLayoutManager.SpanSizeLookup() {

            @Override
            public int getSpanSize(int position) {
                int statusCount = getStatusCount(mDatas);
                int bone = statusCount % 4 == 0 ? 0 : 4;
                int stausPos = (statusCount / 4) * 4 + bone;
                if (position == 0 || position > statusCount) {
                    return 4;
                } else {
                    return 1;
                }
            }
        });
        mRecycleView.setLayoutManager(gManager);
        pAdapter = null;
        pAdapter = new HomeRecyAdapter(mDatas, getActivity());
        mRecycleView.setAdapter(pAdapter);
        mRecycleView.addOnScrollListener(new RecyclerView.OnScrollListener() {
            @Override
            public void onScrollStateChanged(RecyclerView recyclerView, int newState) {
                super.onScrollStateChanged(recyclerView, newState);
            }

            @Override
            public void onScrolled(RecyclerView recyclerView, int dx, int dy) {
                super.onScrolled(recyclerView, dx, dy);

                //取得当前屏幕可见数据的第一个值
                int firstVisibleItem = gManager.findFirstVisibleItemPosition();

                //取得当前屏幕可见数据的第一个值的类别值
                int section = mDatas.get(firstVisibleItem).type;

                //取得当前屏幕可见数据的第一个值的类别值在类别顺序中的下一个类别值
                int nextSecPosition = getLastIndex(mDatas, section, firstVisibleItem);

                if (firstVisibleItem != lastFirstVisibleItem) {
                    ViewGroup.MarginLayoutParams params = (ViewGroup.MarginLayoutParams) titleLayout.getLayoutParams();
                    params.topMargin = 0;
                    titleLayout.setLayoutParams(params);
                    int curType = mDatas.get(firstVisibleItem).type;
                    if (curType == HomeInformationModle.STATUS_TYPE || firstVisibleItem == 0) {
                        infoTitle.setText(getResources().getString(R.string.info_type1));
                    } else {
                        infoTitle.setText(getResources().getString(R.string.info_type2));
                    }
                }


                if (nextSecPosition == firstVisibleItem + 1) {
                    View childView = recyclerView.getChildAt(0);
                    if (childView != null) {

                        int titleHeight = titleLayout.getHeight();
                        int bottom = childView.getBottom();
                        ViewGroup.MarginLayoutParams params = (ViewGroup.MarginLayoutParams) titleLayout
                                .getLayoutParams();
                        if (bottom < titleHeight) {
                            float pushedDistance = bottom - titleHeight;
                            params.topMargin = (int) pushedDistance;
                            titleLayout.setLayoutParams(params);
                        } else {
                            if (params.topMargin != 0) {
                                params.topMargin = 0;
                                titleLayout.setLayoutParams(params);
                            }
                        }
                    }
                }
                lastFirstVisibleItem = firstVisibleItem;
            }
        });

    }


    private int getLastIndex(List<HomeInformationModle> mDatas, int type, int position) {
        int sc = getStatusCount(mDatas);
        if (type == HomeInformationModle.TITLE_TYPE) {
            return position;
        } else if (type == HomeInformationModle.STATUS_TYPE) {
            return sc;
        } else if (type == HomeInformationModle.VALUE_TYPE) {
            return mDatas.size();
        } else {
            return 0;
        }

    }


    public static HomeFragment newInstance(String content) {
        Bundle args = new Bundle();
        args.putString("terminalId", content);
        HomeFragment fragment = new HomeFragment();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        unbinder.unbind();
        getActivity().unregisterReceiver(receiveBroadCast);
    }

}
