package com.ty.xrht.index;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.util.Log;
import android.widget.Toast;

import com.ty.xrht.Base.BaseActivity;
import com.ty.xrht.R;
import com.ty.xrht.feature.Home.view.ControlFragment;
import com.ty.xrht.feature.Home.view.HomeActivity;
import com.ty.xrht.login.LoginActivity;
import com.ty.xrht.utils.DownloadUtils;

import cn.pedant.SweetAlert.SweetAlertDialog;

/**
 * Created by yeah on 2017/10/20.
 */

public class MainActivity extends BaseActivity implements IndexContract.View {
    IndexContract.Presenter mPresenter;
    private static final int REQUEST_EXTERNAL_STORAGE = 1;
    private static String[] PERMISSIONS_STORAGE = {
            "android.permission.READ_EXTERNAL_STORAGE",
            "android.permission.WRITE_EXTERNAL_STORAGE" };


    private DownloadUtils downloadUtils;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mPresenter = new IndexPresenter(this);

        //startHomeActivity(IndexContract.NORMAL_STATUS);
        verifyStoragePermissions(this);


    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        doNext(requestCode,grantResults);
    }

    public void verifyStoragePermissions(Activity activity) {

        try {
            //检测是否有写的权限
            int permission = ActivityCompat.checkSelfPermission(activity,
                    "android.permission.WRITE_EXTERNAL_STORAGE");
            if (permission != PackageManager.PERMISSION_GRANTED) {
                // 没有写的权限，去申请写的权限，会弹出对话框
                ActivityCompat.requestPermissions(activity, PERMISSIONS_STORAGE,REQUEST_EXTERNAL_STORAGE);
            }else{
                mPresenter.initApp();
                //downloadUtils = new DownloadUtils(this);
                //downloadUtils.downloadAPK("http://218.26.35.8:9001/Resource/AuditInfoCollection.apk","znhl.apk");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public void showTipsDialog(){
        String tips_content = "取消存储空间授权将无法正常使用本应用！";

        SweetAlertDialog sweetAlertDialog = new SweetAlertDialog(this, SweetAlertDialog.WARNING_TYPE);

        sweetAlertDialog.setTitleText("提 示")
                .setContentText(tips_content)
                .setConfirmText("确定")
                .showCancelButton(true)
                .setConfirmClickListener(new SweetAlertDialog.OnSweetClickListener() {
                    @Override
                    public void onClick(SweetAlertDialog sweetAlertDialog) {
                        sweetAlertDialog.dismissWithAnimation();
                        finish();
                    }
                })
                .show();
        sweetAlertDialog.setCancelable(false);
    }



    private void doNext(int requestCode, int[] grantResults) {
        if (requestCode == REQUEST_EXTERNAL_STORAGE) {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Permission Granted
                mPresenter.initApp();
            } else {
                // Permission Denied
                showTipsDialog();
            }
        }
    }




    @Override
    public void startHomeActivity(String status) {
        Intent intent = new Intent(MainActivity.this, HomeActivity.class);
        intent.putExtra(IndexContract.MAIN_TO_HOME_BUNDLE, status);
        startActivity(intent);
        finish();
    }

    @Override
    public void startLoginActivity() {
        Intent intent = new Intent(MainActivity.this, LoginActivity.class);
        startActivity(intent);
        finish();
    }

}
