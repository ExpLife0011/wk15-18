package com.ty.xrht.common_widget;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;

import com.suke.widget.SwitchButton;

/**
 * Created by yeah on 2017/10/18.
 */

public class MySwitchButton extends SwitchButton {


    long touchDownTim;

    MySwitchClickListener mMySwitchClickListener;
    private boolean isActionDown = false;

    public MySwitchButton(Context context) {
        super(context);
    }

    public MySwitchButton(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public MySwitchButton(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public MySwitchButton(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
    }

    public void setMySwitchClickListener(MySwitchClickListener mMySwitchClickListener){
        this.mMySwitchClickListener = mMySwitchClickListener;
    }


    @Override
    public boolean onTouchEvent(MotionEvent event) {


        Log.v("444",event.toString());
        switch (event.getAction()){
            case MotionEvent.ACTION_DOWN:
                touchDownTim = System.currentTimeMillis();
                isActionDown = true;
                break;
            case MotionEvent.ACTION_UP:
                if(isActionDown == true){
                    isActionDown = false;
                    if(System.currentTimeMillis() - touchDownTim > 50){
                        this.mMySwitchClickListener.onMySwitchClick(this);
                    }
                    return true;
                }
                break;
            default:
                //isActionDown=false;
                break;

        }
        return true;

    }









    public interface MySwitchClickListener{
        public void onMySwitchClick(MySwitchButton view);
    }

}
