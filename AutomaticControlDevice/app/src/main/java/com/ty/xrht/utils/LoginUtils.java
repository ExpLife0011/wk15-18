package com.ty.xrht.utils;

import android.content.Context;
import android.util.Log;

import com.ty.xrht.GlobalApp;

import org.apache.commons.codec.digest.DigestUtils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;


/**
 * Created by yeah on 2017/12/20.
 */

public class LoginUtils {

    public static String getCurrentTime(String format) {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat(format, Locale.getDefault());
        String currentTime = sdf.format(date);
        return currentTime;
    }

    public static String getCurrentTime() {
        return getCurrentTime("yyyy-MM-dd  HH:mm:ss");
    }

    /*
    * 获取系统当年时间*/
    public static int getYer() {
        int yer = 0;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
        Date date = new Date();
        String formatDate = sdf.format(date);
        try {
            yer = Integer.parseInt(formatDate);
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
        return yer;
    }

    /*
     * 获取系统当月时间*/
    public static int getMonth() {
        Calendar now = Calendar.getInstance();
        int month = now.get(Calendar.MONTH);
        return month;
    }/*
     * 获取系统当天时间*/

    public static int getDay() {
        Calendar now = Calendar.getInstance();
        int day = now.get(Calendar.DAY_OF_MONTH);
        return day;
    }

    /*获取系统当前时间小时*/
    public static int getHour() {
        Calendar now = Calendar.getInstance();
        int hour = now.get(Calendar.HOUR_OF_DAY);
        return hour;
    }

    /*获取系统当前分钟*/
    public static int getMinute() {
        Calendar now = Calendar.getInstance();
        int minute = now.get(Calendar.MINUTE);
        return minute;
    }

    /*
    * 比较两个时间的大小*/
    public static int compare_date(String DATE1, String DATE2) {


        DateFormat df = new SimpleDateFormat("yyyy年MM月dd日hh时mm分");
        try {
            Date dt1 = df.parse(DATE1);
            Date dt2 = df.parse(DATE2);
            if (dt1.getTime() > dt2.getTime()) {
                return 1;
            } else if (dt1.getTime() < dt2.getTime()) {
                return -1;
            } else {
                return 0;
            }
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return 0;
    }

    /*
    * 获取毫秒数*/
    public static int getMillisecond() {
        Calendar Cld = Calendar.getInstance();
        int mi = Cld.get(Calendar.MILLISECOND);
        return mi;
    }


    public static Long getTimestamp() {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        String date1 = df.format(new Date());
        Date date12 = null;
        try {
            date12 = df.parse(date1);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date12.getTime() / 1000;
    }


    public static String getSigin(Long timestamp, int randomNum) {
        String sigin;
        sigin = "sxhuangqc" + timestamp + randomNum;
        Log.v(GlobalApp.LOG_TAG, "sign=" + sigin);
        return DigestUtils.shaHex(sigin);
    }

    public static String getToken(Context cex) {

        // sp = cex.getSharedPreferences(ContentValuse.DATABASE,Activity.MODE_PRIVATE);
        // editor = sp.edit();

        // return sp.getString("token", "");
        return "";
    }


}
