package com.ty.xrht.feature.Home.view;


import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.tsy.sdk.acache.ACache;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.R;
import com.ty.xrht.login.LoginActivity;
import com.ty.xrht.pollingService.PollingService;
import com.ty.xrht.utils.PollingUtils;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import butterknife.Unbinder;

/**
 * Created by yeah
 */
public class ConfigFragment extends Fragment {

    Unbinder unbinder;



    @BindView(R.id.balance)
    TextView tv;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_config, container, false);
        unbinder = ButterKnife.bind(this, view);
        return view;
    }


    @OnClick(R.id.clear_cookie)
    public void clickClearCookie(){
        ACache cache = GlobalApp.getInstance().getACache();
        cache.clear();
        Toast.makeText(getContext(),"成功清除缓存",Toast.LENGTH_SHORT).show();
        try {
            PollingUtils.stopPollingService(getActivity(), PollingService.class, PollingService.ACTION);
            Intent intent = new Intent(getActivity(), PollingService.class);
            intent.setAction(PollingService.ACTION);
            getActivity().stopService(intent);

        }catch (Exception e){
            Log.e(GlobalApp.LOG_TAG,"Stop Polling Service Error!");
        }
        Intent it = new Intent(getActivity(), LoginActivity.class);
        getActivity().startActivity(it);
        getActivity().finish();
    }

    @OnClick(R.id.version2)
    public void exitApp(){
        try {
            PollingUtils.stopPollingService(getActivity(), PollingService.class, PollingService.ACTION);
            Intent intent = new Intent(getActivity(), PollingService.class);
            intent.setAction(PollingService.ACTION);
            getActivity().stopService(intent);

        }catch (Exception e){
            Log.e(GlobalApp.LOG_TAG,"Stop Polling Service Error!");
        }
        GlobalApp.getInstance().getACache().clear();
        getActivity().finish();

    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
       // tv.setText("暂无");
    }

    public static ConfigFragment newInstance(String content) {
        Bundle args = new Bundle();
        args.putString("ARGS", content);
        ConfigFragment fragment = new ConfigFragment();
        fragment.setArguments(args);
        return fragment;
    }




    @Override
    public void onDestroyView() {
        super.onDestroyView();
        unbinder.unbind();
    }
}
