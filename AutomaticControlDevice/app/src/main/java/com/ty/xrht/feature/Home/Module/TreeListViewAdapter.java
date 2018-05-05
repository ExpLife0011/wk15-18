package com.ty.xrht.feature.Home.Module;

/**
 * Created by yeah on 2017/10/14.
 */


import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.BaseAdapter;
import android.widget.ListView;

import com.ty.xrht.GlobalApp;
import com.ty.xrht.utils.TreeHelper;

public abstract class TreeListViewAdapter<T> extends BaseAdapter {
    protected Context mContext;
    /**
     * 存储所有可见的Node
     */
    protected List<Node> mNodes;
    protected LayoutInflater mInflater;
    /**
     * 存储所有的Node
     */
    protected List<Node> mAllNodes;
    /**
     * 点击的回调接口
     */
    private OnTreeNodeClickListener onTreeNodeClickListener;

    public interface OnTreeNodeClickListener {
        void onClickCompany(Node node, int position);
        void onClickTerminal(Node node ,int position);
    }

    public void setOnTreeNodeClickListener(
            OnTreeNodeClickListener onTreeNodeClickListener) {
        this.onTreeNodeClickListener = onTreeNodeClickListener;
    }

    /**
     * @param mTree
     * @param context
     * @param datas
     * @param defaultExpandLevel 默认展开几级树
     * @throws IllegalArgumentException
     * @throws IllegalAccessException
     */
    public TreeListViewAdapter(ListView mTree, Context context, List<T> datas,
                               int defaultExpandLevel) throws IllegalArgumentException,
            IllegalAccessException {
        mContext = context;
/**
 * 对所有的Node进行排序
 */
        mAllNodes = TreeHelper.getSortedNodes(datas, defaultExpandLevel);
/**
 * 过滤出可见的Node
 */
        mNodes = TreeHelper.filterVisibleNode(mAllNodes);
        mInflater = LayoutInflater.from(context);
/**
 * 设置节点点击时，可以展开以及关闭；并且将ItemClick事件继续往外公布
 */
        mTree.setOnItemClickListener(new OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view,
                                    int position, long id) {
                Log.v("tttt","lisssssview" + position);
                expandOrCollapse(position);


            }
        });
    }



    public void appendNodes(List<CompanyBean> beans,int position){
        try {
            mAllNodes = TreeHelper.appendNodes(mAllNodes, beans,position);
            mNodes = TreeHelper.filterVisibleNode(mAllNodes);
            Log.v(GlobalApp.LOG_TAG,"show items:" + mNodes.size());
            notifyDataSetChanged();
        }catch (Exception e){

        }
    }

    /**
     * 相应ListView的点击事件 展开或关闭某节点
     *
     * @param position
     */
    public void expandOrCollapse(int position) {
        Node n = mNodes.get(position);
        if (n != null)// 排除传入参数错误异常
        {
            if(!n.isLeaf()&&n.getChildren().size()>0){ //单位，且有下级，说明已经打开过，不必再发请求
                n.setExpand(!n.isExpand());
                mNodes = TreeHelper.filterVisibleNode(mAllNodes);
                Log.v(GlobalApp.LOG_TAG,"mNodes" + mNodes.size());
                notifyDataSetChanged();
            }else if(!n.isLeaf()&&n.getChildren().size()==0){
                n.setExpand(!n.isExpand());
                if (onTreeNodeClickListener != null) {
                    onTreeNodeClickListener.onClickCompany(mNodes.get(position),position);
                }
            }else if(n.isLeaf()){
                if (onTreeNodeClickListener != null) {
                    onTreeNodeClickListener.onClickTerminal(mNodes.get(position),position);
                }
            }

        }
    }

    @Override
    public int getCount() {
        return mNodes.size();
    }

    @Override
    public Object getItem(int position) {
        return mNodes.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        Node node = mNodes.get(position);
        convertView = getConvertView(node, position, convertView, parent);
// 设置内边距
        convertView.setPadding(node.getLevel() * 30, 3, 3, 3);
        return convertView;
    }

    public abstract View getConvertView(Node node, int position,
                                        View convertView, ViewGroup parent);
}