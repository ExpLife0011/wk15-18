package com.ty.xrht.feature.Home.view;


import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.content.ContextCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.Toast;

import com.ashokvarma.bottomnavigation.BottomNavigationBar;
import com.ashokvarma.bottomnavigation.BottomNavigationItem;
import com.ty.xrht.Base.BaseActivity;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.R;
import com.ty.xrht.feature.Home.Module.CompanyBean;
import com.ty.xrht.feature.Home.Module.Node;
import com.ty.xrht.feature.Home.Module.SimpleTreeAdapter;
import com.ty.xrht.feature.Home.Module.TreeListViewAdapter;
import com.ty.xrht.feature.Home.contract.HomeContract;
import com.ty.xrht.feature.Home.presenter.HomePresenter;
import com.ty.xrht.index.IndexContract;
import com.ty.xrht.location.LocationActivity;
import com.ty.xrht.pollingService.PollingService;
import com.ty.xrht.utils.PollingUtils;

import java.util.ArrayList;
import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import cn.pedant.SweetAlert.SweetAlertDialog;

public class HomeActivity extends BaseActivity implements HomeContract.View {

    // 定义一个变量，来标识是否退出
    private static boolean isExit = false;
    private HomeContract.Presenter mPresnter;
    private ArrayList<Fragment> fragments;
    @BindView(R.id.bottom_navigation_bar)
    BottomNavigationBar bottomNavigationBar;
    @BindView(R.id.tb_homeact)
    Toolbar toolbar;
    @BindView(R.id.drawer_layout)
    DrawerLayout drawerLayout;
    @BindView(R.id.rv_company)
    ListView mTree;
    @BindView(R.id.no_res_img)
    ImageView noResImg;
    @BindView(R.id.tree_layout_id)
    LinearLayout treeLayout;

    private List<CompanyBean> mDatas = new ArrayList<CompanyBean>();
    private TreeListViewAdapter mAdapter;
    private boolean isTerminalChanged=false;     // 暂不使用，（全局标示是否需要重新cache开关状态：1，重新选择终端；2，控制开关后。）
    SweetAlertDialog dialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        ButterKnife.bind(this);
        mPresnter = new HomePresenter(this);
        initStaticView();
        handleIntent();
        mPresnter.pullSubComTree();

        try {
            PollingUtils.stopPollingService(this, PollingService.class, PollingService.ACTION);
            stopPollingService();
        }catch (Exception e){
            Log.e(GlobalApp.LOG_TAG,"Stop Polling Service Error!");
        }

    }




    void showLoadingDialog(){
        dialog = new SweetAlertDialog(this, SweetAlertDialog.PROGRESS_TYPE)
                .setTitleText("加载中……");
        dialog.show();
        dialog.setCancelable(false);

    }


    public void canncelDialog(){
        if(dialog!=null){
            dialog.dismissWithAnimation();
        }
    }


    private void initStaticView(){
        bottomNavigationBar.setMode(BottomNavigationBar.MODE_FIXED);
        bottomNavigationBar.setBackgroundStyle(BottomNavigationBar.BACKGROUND_STYLE_RIPPLE);
        bottomNavigationBar.setBarBackgroundColor("#ECECEC");
        bottomNavigationBar.addItem(new BottomNavigationItem(R.mipmap.view, getResources().getString(R.string.ac_device_data)).setActiveColorResource(R.color.orange))
                .addItem(new BottomNavigationItem(R.mipmap.setting, getResources().getString(R.string.ac_device_control)).setActiveColorResource(R.color.teal))
                .addItem(new BottomNavigationItem(R.mipmap.alert, getResources().getString(R.string.ac_device_alert)).setActiveColorResource(R.color.brown))
                .addItem(new BottomNavigationItem(R.mipmap.config, getResources().getString(R.string.ac_device_config)).setActiveColorResource(R.color.config_blue))
                .setFirstSelectedPosition(0)
                .initialise();
        fragments = getFragments();
        bottomNavigationBar.setTabSelectedListener(this);
        initToolBar();

        /*BadgeItem numberBadgeItem = new BadgeItem()
                .setBorderWidth(3)
                .setBackgroundColor(Color.RED)
                .setText(" ! ")
                .setHideOnSelect(true);

          setBadgeItem(numberBadgeItem)
                */

    }



    @Override
    public void handleIntent() {
        Intent intent = getIntent();
        String status = intent.getStringExtra(IndexContract.MAIN_TO_HOME_BUNDLE);
        switch(status){
            case IndexContract.WRONG_NET_STATUS:

                noResImg.setVisibility(View.GONE);
                SweetAlertDialog dialog = new SweetAlertDialog(this, SweetAlertDialog.WARNING_TYPE)
                        .setTitleText("提示")
                        .setContentText("手机未联网，请先联网！")
                        .setConfirmText("确 定")
                        .setConfirmClickListener(new SweetAlertDialog.OnSweetClickListener() {
                            @Override
                            public void onClick(SweetAlertDialog sDialog) {
                                sDialog.dismissWithAnimation();
                                System.exit(0);
                            }
                        });
                dialog.setCancelable(false);
                dialog.show();

                break;
            case IndexContract.NORMAL_STATUS:
                noResImg.setVisibility(View.GONE);
                //显示响应数据
                setDefaultFragment();
                break;
            default:
                noResImg.setVisibility(View.VISIBLE);
                break;

        }
    }

    //toolbar初始化
    private void initToolBar(){

        toolbar.setTitle("请选择设备");
        toolbar.setTitleTextColor(ContextCompat.getColor(this, R.color.white));
        setSupportActionBar(toolbar);
        getSupportActionBar().setHomeButtonEnabled(true);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        ActionBarDrawerToggle mDrawerToggle = new ActionBarDrawerToggle(this,
                drawerLayout,
                toolbar,
                R.string.drawer_open,
                R.string.drawer_close);//复写打开关闭操作的回调函数
        mDrawerToggle.syncState();//初始化状态
        drawerLayout.addDrawerListener(mDrawerToggle);


    }

    @Override
    public void fillListView(List<CompanyBean> mDatas){
        try
        {
            mAdapter = new SimpleTreeAdapter<CompanyBean>(mTree, this, mDatas, 0);
            mAdapter.setOnTreeNodeClickListener(new TreeListViewAdapter.OnTreeNodeClickListener() {
                @Override
                public void onClickCompany(Node node, int position) {
                    mPresnter.onCompanyItemClick(node,position);

                }

                @Override
                public void onClickTerminal(Node node, int position) {
                    showLoadingDialog();
                    mPresnter.onTerminalItemClick(node ,position);
                }
            });
            mTree.setAdapter(mAdapter);
        } catch (IllegalAccessException e)
        {
            e.printStackTrace();
        }
    }

    @Override
    public void appendListView(List<CompanyBean> mDatas,int pos) {
        mAdapter.appendNodes(mDatas,pos);
    }

    /**
     * 设置默认的fragment
     */
    void setDefaultFragment() {
        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction transaction = fm.beginTransaction();
        transaction.replace(R.id.frame_lay, fragments.get(0));
        transaction.commit();
    }
    @Override
    public void backToFirstFragment(){
        bottomNavigationBar.selectTab(0);
    }

    private ArrayList<Fragment> getFragments() {
        ArrayList<Fragment> fragments = new ArrayList<>();
        fragments.add(HomeFragment.newInstance(mPresnter.getCurrentTerminalId()));
        fragments.add(ControlFragment.newInstance(mPresnter.getCurrentTerminalId()));
        fragments.add(AlertFragment.newInstance(mPresnter.getCurrentTerminalId()));
        fragments.add(ConfigFragment.newInstance(mPresnter.getCurrentTerminalId()));
        return fragments;
    }

    @Override
    public void onTabSelected(int position) {
        if (fragments != null) {
            noResImg.setVisibility(View.GONE);
            if (position < fragments.size()) {

                HomeFragment hfg = (HomeFragment) fragments.get(0);
                if(hfg.pAdapter != null){
                    hfg.mPresenter.saveSwitchStatus(getHomeActivityTid(),hfg.pAdapter.getAdapterList());
                }

                FragmentManager fm = getSupportFragmentManager();
                FragmentTransaction ft = fm.beginTransaction();
                Fragment fragment = fragments.get(position);

                if (fragment.isAdded()) {
                    ft.replace(R.id.frame_lay, fragment);
                } else {
                    ft.add(R.id.frame_lay, fragment);
                }
                ft.commitAllowingStateLoss();
            }
        }
    }

    @Override
    public void onTabUnselected(int position) {
        if (fragments != null) {
            if (position < fragments.size()) {
                FragmentManager fm = getSupportFragmentManager();
                FragmentTransaction ft = fm.beginTransaction();
                Fragment fragment = fragments.get(position);
                ft.remove(fragment);
                ft.commitAllowingStateLoss();
            }
        }
    }

    @Override
    public void onTabReselected(int position) {
        Log.v("666","onreselect" + position);

    }


    @Override
    public void setBarTitle(String title) {
        toolbar.setTitle(title);
        drawerLayout.closeDrawer(treeLayout);
    }

    @Override
    public void stopPollingService() {
        Intent intent = new Intent(this, PollingService.class);
        intent.setAction(PollingService.ACTION);
        stopService(intent);
    }


    @Override
    public Context getContext() {
        return this;
    }

    @OnClick(R.id.location_icon_id)
public void onClickLoactionBtn(){
    if(HomePresenter.NO_LOCATION.equals(mPresnter.getCurrentTerminalId())){
         Toast.makeText(this,"请先选择设备",Toast.LENGTH_SHORT).show();
    }else{
        Intent intent = new Intent(HomeActivity.this , LocationActivity.class);
        intent.putExtra("terminalId",mPresnter.getCurrentTerminalId());
        startActivity(intent);
    }
}

/* @OnClick()
    public void onPost() {
        mPresnter.onPost();
    }*/



    //返回键响应drawerlayout，两次点击退出。
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            exit();
            return false;
        }
        return super.onKeyDown(keyCode, event);
    }

    private void exit() {

        if(treeLayout.getVisibility() == View.VISIBLE){
            drawerLayout.closeDrawer(treeLayout);
        }else{
            if (!isExit) {
                isExit = true;
                Toast.makeText(getApplicationContext(), "再按一次退出程序",
                        Toast.LENGTH_SHORT).show();
                mHandler.sendEmptyMessageDelayed(0, 2000);

            } else {
                GlobalApp.getInstance().getACache().clear();
                finish();
                System.exit(0);
            }
        }
    }
    Handler mHandler = new Handler() {

        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            isExit = false;
        }
    };

    public boolean isTerminalChanged() {
        return isTerminalChanged;
    }

    public void setTerminalChanged(boolean terminalChanged) {
        isTerminalChanged = terminalChanged;
    }

    public String getHomeActivityTid(){return mPresnter.getCurrentTerminalId();}
}
