package com.ty.xrht.feature.Home.Module.homefrag;

import android.content.Context;
import android.graphics.drawable.AnimationDrawable;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.txusballesteros.SnakeView;
import com.ty.xrht.R;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;

/**
 * Created by yeah on 2017/10/19.
 */

public class HomeRecyAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    private List<HomeInformationModle>  list;
    private LayoutInflater inflater;
    private Context context;
    private List<ArrayBlockingQueue<Float>> valueCache;


    public HomeRecyAdapter(List<HomeInformationModle> list , Context context){
        this.list = list;
        this.inflater=LayoutInflater.from(context);
        this.context = context;

        valueCache = new ArrayList<ArrayBlockingQueue<Float>>();
        for (int i =0;i<list.size();i++){
            ArrayBlockingQueue<Float> que = new ArrayBlockingQueue<Float>(10);
            valueCache.add(que);
        }


    }


    public void refreshView(List<HomeInformationModle> newDatas){
        list.clear();
        list.addAll(newDatas);
        notifyDataSetChanged();
    }

    public List<HomeInformationModle> getAdapterList(){
        return list;
    }


    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View view;
        RecyclerView.ViewHolder mViewHolder;
        if(viewType==HomeInformationModle.TITLE_TYPE) {

            view = inflater.inflate(R.layout.home_frag_title_item, parent, false);
            mViewHolder = new tViewHolder(view);
        }else if(viewType==HomeInformationModle.STATUS_TYPE)
        {
            view = inflater.inflate(R.layout.home_frag_status_item, parent, false);
            mViewHolder = new sViewHolder(view);
        }else if(viewType == HomeInformationModle.VALUE_TYPE)
        {
            view = inflater.inflate(R.layout.home_frag_data_item, parent, false);
            mViewHolder = new vViewHolder(view);
        } else{
            return null;
        }
        mViewHolder.setIsRecyclable(false);
        return mViewHolder;

    }

    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {
        if(holder != null) {
            switch (getItemViewType(position)) {
                case HomeInformationModle.TITLE_TYPE:
                    TitleInfoImpl tImp = (TitleInfoImpl) list.get(position);
                    final tViewHolder tHolder = (tViewHolder) holder;
                    tHolder.title_tv.setText(tImp.getTitleName());
                    tHolder.time_tv.setText(tImp.getTitleTime());
                    break;
                case HomeInformationModle.STATUS_TYPE:
                    StatusInfoImpl sImp = (StatusInfoImpl) list.get(position);
                    final sViewHolder sHolder = (sViewHolder) holder;
                    sHolder.status_tv.setText(sImp.getSwitchName());
                    String status = sImp.getStatus();
                    if(status.equals(StatusInfoImpl.SWITCH_ALERT)){
                        sHolder.status_iv.setImageResource(R.drawable.red_light_flash_anim);
                        ((AnimationDrawable)sHolder.status_iv.getDrawable()).start();
                    }else if(status.equals(StatusInfoImpl.SWITCH_OPEN)){
                        sHolder.status_iv.setImageResource(R.drawable.green_light_drawable);
                    }else if(status.equals(StatusInfoImpl.SWITCH_CLOSED)){
                        sHolder.status_iv.setImageResource(R.drawable.black_light_drawable);
                    }else{
                        sHolder.status_iv.setImageDrawable(null);
                    }
                    break;
                case HomeInformationModle.VALUE_TYPE:
                    vViewHolder vHolder = (vViewHolder) holder;
                    ValueInfoImpl vImp = (ValueInfoImpl) list.get(position);
                    vHolder.value_name_tv.setText(vImp.getValueName());
                    vHolder.value_tv.setText(String.valueOf(vImp.getValue()));
                    vHolder.value_qty_tv.setText(vImp.getValueQuantity());

                    float value = vImp.getValue();
                    if(vImp.getValue()>=100f){
                        value=100f;
                    }else if(vImp.getValue()<=0){
                        value=0f;
                    }

                    ArrayBlockingQueue<Float> que = valueCache.get(position);
                     if(que.offer(value)){  //满了
                        que.poll();
                        que.offer(value);
                    }

                    for(Iterator<Float> it = que.iterator();it.hasNext();){
                        float preValue = it.next();
                        vHolder.snakeView.addValue(preValue);
                    }
                    break;
                default:
                    break;
            }
        }
    }






    @Override
    public int getItemViewType(int position) {
        return list.get(position).type;
    }

    @Override
    public int getItemCount() {
        return list.size();
    }

    //三种样式的viewholder

    class tViewHolder extends RecyclerView.ViewHolder {

        RelativeLayout linear_t;
        TextView title_tv;
        TextView time_tv;

        public tViewHolder(View itemView) {
            super(itemView);
            linear_t = (RelativeLayout)itemView.findViewById(R.id.linear_t);
            title_tv = (TextView)itemView.findViewById(R.id.txt_pTitle);
            time_tv = (TextView)itemView.findViewById(R.id.time_ptitle);
        }
    }

    /**
     * status的布局数据
     */
    class sViewHolder extends RecyclerView.ViewHolder {

        LinearLayout linear_s;
        TextView status_tv;
        ImageView status_iv;

        public sViewHolder(View itemView) {
            super(itemView);

            linear_s = (LinearLayout)itemView.findViewById(R.id.linear_s);
            status_tv = (TextView)itemView.findViewById(R.id.switch_name_id);
            status_iv = (ImageView)itemView.findViewById(R.id.switch_light_id);
        }
    }

    /**
     * value的布局数据
     */
    class vViewHolder extends RecyclerView.ViewHolder {

        RelativeLayout rela_v;
        TextView value_name_tv;
        TextView value_tv;
        TextView value_qty_tv;
        final SnakeView snakeView;


        public vViewHolder(View itemView) {
            super(itemView);

            rela_v = (RelativeLayout)itemView.findViewById(R.id.rela_v);
            value_name_tv = (TextView)itemView.findViewById(R.id.data_name_id);
            value_tv = (TextView)itemView.findViewById(R.id.data_value_id);
            value_qty_tv = (TextView)itemView.findViewById(R.id.data_quantity_id);
            snakeView = (SnakeView) itemView.findViewById(R.id.snake);
            snakeView.setMaxValue(101f);
            snakeView.setMinValue(-1f);
        }
    }






}
