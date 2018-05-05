package com.ty.xrht.feature.Home.Module;

import com.ty.xrht.utils.StringUtils;
import com.ty.xrht.utils.TreeNodeId;
import com.ty.xrht.utils.TreeNodeIsLeaf;
import com.ty.xrht.utils.TreeNodeLabel;
import com.ty.xrht.utils.TreeNodePid;

/**
 * Created by yeah on 2017/10/14.
 */

public class CompanyBean
{
    @TreeNodeId
    private int id;
    @TreeNodePid
    private int parentId;
    @TreeNodeLabel
    private String name;
    private long length;
    private String desc;
    @TreeNodeIsLeaf
    private boolean isTerminal;
    public CompanyBean(int id, int parentId, String name)
    {
        super();
        this.id = id;
        this.parentId = parentId;
        this.name = name;
    }

    public CompanyBean(int id, int parentId, String name , boolean isTerminal){
        this(id,parentId,name);
        this.isTerminal = isTerminal;
    }

    public boolean isTerminal(){
        return this.isTerminal;
    }
}