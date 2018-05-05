package com.ty.xrht.utils;

import android.content.Context;
import android.telephony.TelephonyManager;

import com.ty.xrht.GlobalApp;

/**
 * Created by yeah on 2017/10/23.
 */

public class PhoneUtils {


    public static String getDeviceIEMI(Context context){
        TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
        String tel = tm.getSimSerialNumber();
        return tel;
    }



}
