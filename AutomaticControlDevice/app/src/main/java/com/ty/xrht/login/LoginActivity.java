package com.ty.xrht.login;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.ty.xrht.Base.BaseActivity;
import com.ty.xrht.GlobalApp;
import com.ty.xrht.R;
import com.ty.xrht.feature.Home.view.HomeActivity;
import com.ty.xrht.index.IndexContract;
import com.ty.xrht.pollingService.PollingService;
import com.ty.xrht.utils.PollingUtils;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

/**
 * Created by yeah on 2017/12/20.
 */

public class LoginActivity extends BaseActivity implements LoginContract.View{

    private LoginPresenter mPresenter;
    float mWidth, mHeight;

    @BindView(R.id.main_btn_login)
    TextView mBtnLogin;
    @BindView(R.id.layout_progress)
    View progress;
    @BindView(R.id.input_layout)
    View mInputLayout;
    @BindView(R.id.input_layout_name)
    LinearLayout mName;
    @BindView(R.id.input_layout_psw)
    LinearLayout mPsw;
    @BindView(R.id.uname_edit_id)
    EditText unameEdit;
    @BindView(R.id.upwd_edit_id)
    EditText upwdEdit;
    @BindView(R.id.checkbox_login)
    CheckBox checkBox;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        ButterKnife.bind(this);
        mPresenter = new LoginPresenter(this);
        try {
            PollingUtils.stopPollingService(this, PollingService.class, PollingService.ACTION);
            destoryService();
        }catch (Exception e){
            Log.e(GlobalApp.LOG_TAG,"Stop Polling Service Error!");
        }
        mPresenter.initViewFromSp();
    }


    @Override
    public void initLoginView(String uname,String pwd,boolean isChecked) {
        unameEdit.setText(uname);
        upwdEdit.setText(pwd);
        checkBox.setChecked(isChecked);
    }

    void destoryService(){
        Intent intent = new Intent(this, PollingService.class);
        intent.setAction(PollingService.ACTION);
        stopService(intent);

    }

    //收起键盘
    @OnClick(R.id.login_back_layout)
    public void clickBackground(View view){
        InputMethodManager imm = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(view.getWindowToken(),0);
    }



    //点击登录按钮响应
    @OnClick(R.id.main_btn_login)
    public void logIn(){

        String userName = unameEdit.getText().toString();  //edittext不输入时返回""
        String pwd = upwdEdit.getText().toString();
        if("".equals(userName)){
            Toast.makeText(this,"请输入您的用户名",Toast.LENGTH_LONG).show();
        }else if("".equals(pwd)){
            Toast.makeText(this,"请输入您的密码",Toast.LENGTH_LONG).show();
        }else{
            mPresenter.subLogin(userName,pwd);

            mWidth = mBtnLogin.getMeasuredWidth();
            mHeight = mBtnLogin.getMeasuredHeight();

            mName.setVisibility(View.INVISIBLE);
            mPsw.setVisibility(View.INVISIBLE);

            mPresenter.inputAnimator(mInputLayout, mWidth, mHeight);
        }

    }




    @Override
    public void cancelAnimation(){

        progress.setVisibility(View.GONE);
        mInputLayout.setVisibility(View.VISIBLE);
        mName.setVisibility(View.VISIBLE);
        mPsw.setVisibility(View.VISIBLE);
    }


    @Override
    public void onAnimationEnd() {

        progress.setVisibility(View.VISIBLE);
        mPresenter.progressAnimator(progress);
        mInputLayout.setVisibility(View.INVISIBLE);

    }

    @Override
    public void goToHomeActivity() {
        Intent intent = new Intent(LoginActivity.this, HomeActivity.class);
        intent.putExtra(IndexContract.MAIN_TO_HOME_BUNDLE,IndexContract.NORMAL_STATUS);
        startActivity(intent);
        finish();
    }

    @Override
    public String getEditUname(){
        return unameEdit.getText().toString();
    }
    @Override
    public String getEditPwd(){
        return upwdEdit.getText().toString();
    }
    @Override
    public boolean getRemberCheckBox(){
        return checkBox.isChecked();
    }



}
