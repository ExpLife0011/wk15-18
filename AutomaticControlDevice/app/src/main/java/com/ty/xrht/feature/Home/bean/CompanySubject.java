package com.ty.xrht.feature.Home.bean;

import android.util.Log;

/**
 * Created by yeah on 2018/1/11.
 */

public class CompanySubject {


    /**
     * Id : dep-2
     * PId : dep-1
     * Name : 山西奥发
     */

    private String Id;
    private String PId;
    private String Name;

    public String getId() {
        return Id;
    }

    public String getPId() {
        return PId;
    }

    public String getName() {
        return Name;
    }



    public boolean isTerminal(){
        return Id.indexOf("te-") == 0;
    }

    public int getRealId(){
        try{
            return (int)Float.parseFloat(Id.split("-")[1]);
        }catch (Exception e){
            return -1;
        }
    }

    public int getRealPid(){
        try{
            return (int)Float.parseFloat(PId.split("-")[1]);
        }catch (Exception e){
            return -1;
        }
    }


}
