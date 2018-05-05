package com.ty.xrht.utils;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.SystemClock;

/**
 * Created by yeah on 2018/1/9.
 */

public class PollingUtils {

    //开启轮询服务
    public static void startPollingService(Context context, int seconds, Class<?> cls, String action,String terminalId) {
        //获取AlarmManager系统服务
        AlarmManager manager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);

        //包装需要执行Service的Intent
        Intent intent = new Intent(context, cls);
        intent.setAction(action);
        intent.putExtra("terminalId" ,terminalId);
        PendingIntent pendingIntent = PendingIntent.getService(context, 0,
                intent, PendingIntent.FLAG_UPDATE_CURRENT);

        //触发服务的起始时间
        long triggerAtTime = SystemClock.elapsedRealtime();

        //使用AlarmManger的setRepeating方法设置定期执行的时间间隔（seconds秒）和需要执行的Service

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            manager.setExactAndAllowWhileIdle(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAtTime , pendingIntent);
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            manager.setExact(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAtTime , pendingIntent);
        }else {
            manager.setRepeating(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAtTime, seconds*1000, pendingIntent);
        }
    }

    //append轮询服务
    public static void appendPollingService(Context context, int seconds, Class<?> cls, String action,String terminalId) {
        //获取AlarmManager系统服务
        AlarmManager manager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);

        //包装需要执行Service的Intent
        Intent intent = new Intent(context, cls);
        intent.setAction(action);
        intent.putExtra("terminalId",terminalId);
        PendingIntent pendingIntent = PendingIntent.getService(context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
        long triggerAtTime = SystemClock.elapsedRealtime();
        //多版本兼容，19以下下setRepeating无需再启动
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            manager.setExactAndAllowWhileIdle(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAtTime + (seconds*1000), pendingIntent);
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            manager.setExact(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAtTime + (seconds*1000), pendingIntent);
        }
    }





    //停止轮询服务
    public static void stopPollingService(Context context, Class<?> cls,String action) {
        AlarmManager manager = (AlarmManager) context
                .getSystemService(Context.ALARM_SERVICE);
        Intent intent = new Intent(context, cls);
        intent.setAction(action);
        PendingIntent pendingIntent = PendingIntent.getService(context, 0,
                intent, PendingIntent.FLAG_UPDATE_CURRENT);
        //取消正在执行的服务
        manager.cancel(pendingIntent);
        System.out.println("cancel alarm manager!");

    }
}
