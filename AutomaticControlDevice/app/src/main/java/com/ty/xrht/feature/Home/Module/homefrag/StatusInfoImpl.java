package com.ty.xrht.feature.Home.Module.homefrag;

/**
 * Created by yeah on 2017/10/19.
 */

public class StatusInfoImpl extends HomeInformationModle {

    public static final String SWITCH_OPEN = "open";
    public static final String SWITCH_CLOSED = "closed";
    public static final String SWITCH_ALERT = "alert";
    private String status="";
    private String switchName="";
    public StatusInfoImpl(){
        this.type = HomeInformationModle.STATUS_TYPE;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getSwitchName() {
        return switchName;
    }

    public void setSwitchName(String switchName) {
        this.switchName = switchName;
    }

    @Override
    public String toString() {
        return switchName +":"+ status;
    }
}
