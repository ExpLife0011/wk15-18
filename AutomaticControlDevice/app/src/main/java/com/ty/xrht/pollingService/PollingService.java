package com.ty.xrht.pollingService;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.os.IBinder;
import android.support.v7.app.NotificationCompat;
import android.widget.Toast;

import com.ty.xrht.GlobalApp;
import com.ty.xrht.R;
import com.ty.xrht.feature.Home.Module.homefrag.HomeInformationModle;
import com.ty.xrht.feature.Home.view.HomeActivity;
import com.ty.xrht.utils.PollingUtils;

import java.io.Serializable;
import java.util.List;

/**
 * Created by yeah on 2018/1/9.
 */


public class PollingService extends Service implements PollingContract.View{

    public static final String ACTION = "com.ty.xrht.PollingService";

    private Notification mNotification;
    private NotificationManager mManager;
    private PollingContract.Presenter mPresenter;

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        mPresenter = new PollingPresenter(this);
    }



    @Override
    public int onStartCommand(Intent intent,  int flags, int startId) {

        String tid = intent.getStringExtra("terminalId");
        if(!"".equals(tid) &&  tid != null){
            mPresenter.getSensorTask(tid);
            PollingUtils.appendPollingService(this,10,PollingService.class,ACTION,tid);
        }else{
            Toast.makeText(this,"启动服务失败，请重试！",Toast.LENGTH_SHORT).show();
        }
        return START_REDELIVER_INTENT;

    }


    //弹出Notification
    private void showNotification() {
        mNotification = new NotificationCompat.Builder(this)
                /**设置通知左边的大图标**/
                .setLargeIcon(BitmapFactory.decodeResource(this.getResources(), R.mipmap.ic_launcher_trans))
                /**设置通知右边的小图标**/
                .setSmallIcon(R.mipmap.ic_launcher_trans)
                /**通知首次出现在通知栏，带上升动画效果的**/
                .setTicker("通知来了")
                /**设置通知的标题**/
                .setContentTitle("这是一个通知的标题")
                /**设置通知的内容**/
                .setContentText("这是一个通知的内容这是一个通知的内容")
                /**通知产生的时间，会在通知信息里显示**/
                .setWhen(System.currentTimeMillis())
                /**设置该通知优先级**/
                .setPriority(Notification.PRIORITY_DEFAULT)
                /**设置这个标志当用户单击面板就可以让通知将自动取消**/
                .setAutoCancel(true)
                /**设置他为一个正在进行的通知。他们通常是用来表示一个后台任务,用户积极参与(如播放音乐)或以某种方式正在等待,因此占用设备(如一个文件下载,同步操作,主动网络连接)**/
                .setOngoing(false)
                /**向通知添加声音、闪灯和振动效果的最简单、最一致的方式是使用当前的用户默认设置，使用defaults属性，可以组合：**/
                .setDefaults(Notification.DEFAULT_VIBRATE | Notification.DEFAULT_SOUND)
                .setContentIntent(PendingIntent.getActivity(this, 1, new Intent(this, HomeActivity.class), PendingIntent.FLAG_CANCEL_CURRENT))
                .build();

        NotificationManager notificationManager = (NotificationManager) this.getSystemService(this.NOTIFICATION_SERVICE);
        /**发起通知**/
        notificationManager.notify(0, mNotification);

    }


    @Override
    public void broadSensorData(List<HomeInformationModle> list) {
        Intent intent = new Intent(); // Itent就是我们要发送的内容
        if(list != null){
            Bundle bundle = new Bundle();
            bundle.putSerializable(GlobalApp.BROADCAST_INTENT_KEY,(Serializable) list);
            intent.putExtras(bundle);
            intent.setAction(GlobalApp.BROADCAST_ACTION);
        }else{
            intent.setAction(GlobalApp.BROADCAST_ERROR_ACTION);
        }
        sendBroadcast(intent); // 发送广播
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        System.out.println("Service:onDestroy");
    }

}

