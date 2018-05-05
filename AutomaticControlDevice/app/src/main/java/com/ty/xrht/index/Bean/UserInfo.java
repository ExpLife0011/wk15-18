package com.ty.xrht.index.Bean;

import com.tsy.sdk.acache.ACache;
import com.ty.xrht.GlobalApp;

/**
 * Created by yeah on 2017/10/25.
 */

public class UserInfo {


    /**
     * ID : 297
     * UnitID : 201
     * DongleNum :
     * SerialNum :
     * MobileNum : 1BBA1773C326B52DAFDD0068BF06FAF8
     * FullName : 郭龙
     * PhoneNum : 15234487777
     * Limit : 8rT59HPOmg0=
     * VehiclesID :
     * CreatTime : /Date(1427958454000+0800)/
     * DelTime : null
     * DelFlag : false
     */

    private int ID;
    private int UnitID;
    private String DongleNum;
    private String SerialNum;
    private String MobileNum;
    private String FullName;
    private String PhoneNum;
    private String Limit;
    private String VehiclesID;
    private String CreatTime;
    private String DelTime;
    private boolean DelFlag;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getUnitID() {
        return UnitID;
    }

    public void setUnitID(int UnitID) {
        this.UnitID = UnitID;
    }

    public String getDongleNum() {
        return DongleNum;
    }

    public void setDongleNum(String DongleNum) {
        this.DongleNum = DongleNum;
    }

    public String getSerialNum() {
        return SerialNum;
    }

    public void setSerialNum(String SerialNum) {
        this.SerialNum = SerialNum;
    }

    public String getMobileNum() {
        return MobileNum;
    }

    public void setMobileNum(String MobileNum) {
        this.MobileNum = MobileNum;
    }

    public String getFullName() {
        return FullName;
    }

    public void setFullName(String FullName) {
        this.FullName = FullName;
    }

    public String getPhoneNum() {
        return PhoneNum;
    }

    public void setPhoneNum(String PhoneNum) {
        this.PhoneNum = PhoneNum;
    }

    public String getLimit() {
        return Limit;
    }

    public void setLimit(String Limit) {
        this.Limit = Limit;
    }

    public String getVehiclesID() {
        return VehiclesID;
    }

    public void setVehiclesID(String VehiclesID) {
        this.VehiclesID = VehiclesID;
    }

    public String getCreatTime() {
        return CreatTime;
    }

    public void setCreatTime(String CreatTime) {
        this.CreatTime = CreatTime;
    }

    public String getDelTime() {
        return DelTime;
    }

    public void setDelTime(String DelTime) {
        this.DelTime = DelTime;
    }

    public boolean isDelFlag() {
        return DelFlag;
    }

    public void setDelFlag(boolean DelFlag) {
        this.DelFlag = DelFlag;
    }

    public void saveACache(int saveTime){
        ACache mCache = GlobalApp.getInstance().getACache();
        mCache.put("ID",String.valueOf(this.getID()),saveTime);
        mCache.put("UnitID",String.valueOf(this.getUnitID()),saveTime);
        mCache.put("VehiclesID",this.getVehiclesID(),saveTime);
    }


    @Override
    public String toString() {


        return ID + ":" + UnitID + ":" + DelTime;
    }
}
