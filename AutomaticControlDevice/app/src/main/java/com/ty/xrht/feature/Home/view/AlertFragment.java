package com.ty.xrht.feature.Home.view;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.ty.xrht.GlobalApp;
import com.ty.xrht.R;
import com.ty.xrht.utils.WebServiceHelper;

import java.util.HashMap;
import java.util.Map;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import butterknife.Unbinder;

/**
 * Created by yeah
 */
public class AlertFragment extends Fragment {

    Unbinder unbinder;
    private Activity activity;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_alert, container, false);
        unbinder = ButterKnife.bind(this, view);
        return view;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
    }



    public static AlertFragment newInstance(String content) {
        Bundle args = new Bundle();
        args.putString("ARGS", content);
        AlertFragment fragment = new AlertFragment();
        fragment.setArguments(args);
        return fragment;
    }




    @Override
    public void onDestroyView() {
        super.onDestroyView();
        unbinder.unbind();
    }

    class Te implements Runnable{
        @Override
        public void run() {
            WebServiceHelper wsh = new WebServiceHelper();
            Map<String,Object> testparam = new HashMap<String,Object>();
            testparam.put("unitID",201);
            //testparam.put("userID",355439077952837);
            String jsonStr = WebServiceHelper.doRequest("218.26.35.8:2001","GetMobileUnits",testparam);
            Log.v(GlobalApp.LOG_TAG,jsonStr);
        }
    }


}
