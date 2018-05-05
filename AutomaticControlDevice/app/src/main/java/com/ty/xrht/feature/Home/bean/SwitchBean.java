package com.ty.xrht.feature.Home.bean;

/**
 * Created by yeah on 2017/10/17.
 */

public class SwitchBean {


    /**
     * ID : 63.0
     * TERMINALID : 41.0
     * SWITCHNUM : 开关003
     * SWITCHNAME : 003
     * OPENCMD : 01 05 00 02 ff 00 2d fa
     * CLOSECMD : 01 05 00 02 00 00 6c 0a
     * SORNUM : 3.0
     * DISABLED : 0
     * REMARK : null
     */

    private double ID;
    private double TERMINALID;
    private String SWITCHNUM;
    private String SWITCHNAME;
    private String OPENCMD;
    private String CLOSECMD;
    private double SORNUM;
    private int DISABLED;
    private Object REMARK;

    private boolean isSwitchOn;


    public boolean isSwitchOn(){return isSwitchOn;}
    public void setSwitchOn(boolean isOn){this.isSwitchOn =  isOn;}

    public double getID() {
        return ID;
    }

    public void setID(double ID) {
        this.ID = ID;
    }

    public double getTERMINALID() {
        return TERMINALID;
    }

    public void setTERMINALID(double TERMINALID) {
        this.TERMINALID = TERMINALID;
    }

    public String getSWITCHNUM() {
        return SWITCHNUM;
    }

    public void setSWITCHNUM(String SWITCHNUM) {
        this.SWITCHNUM = SWITCHNUM;
    }

    public String getSWITCHNAME() {
        return SWITCHNAME;
    }

    public void setSWITCHNAME(String SWITCHNAME) {
        this.SWITCHNAME = SWITCHNAME;
    }

    public String getOPENCMD() {
        return OPENCMD;
    }

    public void setOPENCMD(String OPENCMD) {
        this.OPENCMD = OPENCMD;
    }

    public String getCLOSECMD() {
        return CLOSECMD;
    }

    public void setCLOSECMD(String CLOSECMD) {
        this.CLOSECMD = CLOSECMD;
    }

    public double getSORNUM() {
        return SORNUM;
    }

    public void setSORNUM(double SORNUM) {
        this.SORNUM = SORNUM;
    }

    public int getDISABLED() {
        return DISABLED;
    }

    public void setDISABLED(int DISABLED) {
        this.DISABLED = DISABLED;
    }

    public Object getREMARK() {
        return REMARK;
    }

    public void setREMARK(Object REMARK) {
        this.REMARK = REMARK;
    }
}
