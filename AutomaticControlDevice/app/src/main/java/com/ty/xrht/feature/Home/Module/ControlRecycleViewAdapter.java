package com.ty.xrht.feature.Home.Module;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.suke.widget.SwitchButton;
import com.ty.xrht.R;
import com.ty.xrht.common_widget.MySwitchButton;
import com.ty.xrht.feature.Home.Module.homefrag.StatusInfoImpl;
import com.ty.xrht.feature.Home.bean.Beans;
import com.ty.xrht.feature.Home.bean.RealSensorBean;
import com.ty.xrht.feature.Home.bean.SwitchBean;

import java.util.ArrayList;
import java.util.List;

import cn.pedant.SweetAlert.SweetAlertDialog;

/**
 * Created by yeah on 2017/10/17.
 */

public class ControlRecycleViewAdapter extends RecyclerView.Adapter<ControlRecycleViewAdapter.MyViewHolder> {

    Context context;
    List<StatusInfoImpl> dataArray;
    public interface SwitchClickCallBack{
        void clickBtn(SwitchButton view,String name,boolean isChecked);
        void cacheNewStatusList(List<StatusInfoImpl> list);
    }
    SwitchClickCallBack callBack;
    public ControlRecycleViewAdapter(Context context, List<StatusInfoImpl> dataArray, SwitchClickCallBack callBack){
        this.callBack = callBack;
        this.context = context;
        this.dataArray = dataArray;
    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        MyViewHolder holder = new MyViewHolder(LayoutInflater.from(this.context).inflate(R.layout.control_frag_item,parent,false));
        holder.setIsRecyclable(false);

        return holder;
    }


    void resetData(int postion,boolean status){
        if(status){
            dataArray.get(postion).setStatus(StatusInfoImpl.SWITCH_OPEN);
        }else{
            dataArray.get(postion).setStatus(StatusInfoImpl.SWITCH_CLOSED);
        }
    }

    @Override
    public void onBindViewHolder(final MyViewHolder holder, final int position) {  //position从0开始
        StatusInfoImpl sBean = (StatusInfoImpl) dataArray.get(position);
        final String switchName = sBean.getSwitchName();
        final boolean isSwitchOn = !StatusInfoImpl.SWITCH_CLOSED.equals(sBean.getStatus());
        holder.tv.setText(switchName);
        holder.sb.setChecked(isSwitchOn);
        holder.sb.setMySwitchClickListener(new MySwitchButton.MySwitchClickListener() {
            @Override
            public void onMySwitchClick(MySwitchButton view) {
                callBack.clickBtn(holder.sb,switchName,isSwitchOn);
            }
        });
        holder.sb.setOnCheckedChangeListener(new SwitchButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(SwitchButton view, boolean isChecked) {

                resetData(position,isChecked);
                notifyDataSetChanged();
                //callBack.cacheNewStatusList(dataArray);
                //showToggleConfirmDialog(ControlRecycleViewAdapter.this.context,view,switchName,isChecked?"开启":"关闭");
            }
        });

    }








    @Override
    public int getItemCount() {
        return dataArray.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder{

        TextView tv;
        MySwitchButton sb;
        public MyViewHolder(View view){
            super(view);
            tv = (TextView) view.findViewById(R.id.control_rv_tv);
            sb = (MySwitchButton) view.findViewById(R.id.control_rv_sb);


        }


    }

}
