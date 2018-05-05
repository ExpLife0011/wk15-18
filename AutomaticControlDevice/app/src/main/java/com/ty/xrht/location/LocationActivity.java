package com.ty.xrht.location;

import android.content.Intent;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;

import com.baidu.mapapi.SDKInitializer;
import com.baidu.mapapi.map.BaiduMap;
import com.baidu.mapapi.map.BitmapDescriptor;
import com.baidu.mapapi.map.BitmapDescriptorFactory;
import com.baidu.mapapi.map.MapStatus;
import com.baidu.mapapi.map.MapStatusUpdate;
import com.baidu.mapapi.map.MapStatusUpdateFactory;
import com.baidu.mapapi.map.MapView;
import com.baidu.mapapi.map.MarkerOptions;
import com.baidu.mapapi.map.OverlayOptions;
import com.baidu.mapapi.model.LatLng;
import com.ty.xrht.Base.BaseActivity;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.R;

import butterknife.BindView;
import butterknife.ButterKnife;
import cn.pedant.SweetAlert.SweetAlertDialog;

/**
 * Created by yeah on 2017/12/22.
 */

public class LocationActivity extends BaseActivity implements LocationContract.View{


    @BindView(R.id.tb_location)
    Toolbar toolbar;
    @BindView(R.id.map_id)
    MapView mMapView;
    String teid;

    SweetAlertDialog pDialog =null;
    LocationContract.Presenter mPresenter;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SDKInitializer.initialize(GlobalApp.getInstance());
        setContentView(R.layout.activity_location);
        getParams();
        ButterKnife.bind(this);
        mPresenter = new LocationPresenter(this);
        showLoadingDialog();
        mPresenter.getLocationTask(teid);

        toolbar.setTitleTextColor(ContextCompat.getColor(this, R.color.white));
        setSupportActionBar(toolbar);
        getSupportActionBar().setHomeButtonEnabled(true);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

    }

    private void getParams(){

        Intent intent = getIntent();
        if (intent != null){
            teid = intent.getStringExtra("terminalId") ;
        }else{
            Toast.makeText(this,"位置服务不可用，请稍后再试",Toast.LENGTH_LONG).show();
            finish();
        }

    }



    @Override
    public void initMap(double lat ,double lng){
        BaiduMap baiduMap = mMapView.getMap();
        baiduMap.setMapType(BaiduMap.MAP_TYPE_NORMAL);
        baiduMap.setTrafficEnabled(false);
        baiduMap.setMapStatus(MapStatusUpdateFactory.newMapStatus(new MapStatus.Builder().zoom(15).build()));
        LatLng point = new LatLng(lat,lng);
        //构建Marker图标
        BitmapDescriptor bitmap = BitmapDescriptorFactory.fromResource(R.mipmap.locate);
        OverlayOptions option = new MarkerOptions()
                .position(point)
                .icon(bitmap);
        MapStatusUpdate u = MapStatusUpdateFactory.newLatLng(point);
        baiduMap.animateMapStatus(u);
        //在地图上添加Marker，并显示
        baiduMap.addOverlay(option);
    }


    @Override
    public void initToolbar(String title){
        //toolbar初始化
        toolbar.setTitle(title);



    }


    void showLoadingDialog(){
        pDialog = new SweetAlertDialog(this, SweetAlertDialog.PROGRESS_TYPE)
                .setTitleText("加载中……");
        pDialog.show();
        pDialog.setCancelable(false);

    }
    @Override
    public void cancelDialog(){
        if(pDialog!=null){
            pDialog.dismissWithAnimation();
        }
    }




    @Override
    protected void onResume() {
        super.onResume();
        mMapView.onResume();
    }


    @Override
    protected void onPause() {
        super.onPause();
        mMapView.onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mMapView.onDestroy();
    }






}