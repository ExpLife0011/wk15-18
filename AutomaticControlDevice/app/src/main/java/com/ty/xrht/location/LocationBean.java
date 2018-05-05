package com.ty.xrht.location;

/**
 * Created by yeah on 2018/1/12.
 */

public class LocationBean {


    /**
     * ID : 61
     * UnitID : 2
     * UnitName : 山西奥发
     * DevName : 大棚002
     * DevID : 013403510000
     * Online : false
     * State : 离线,---
     * Located : false
     * Lat : 37.806872
     * Lng : 112.562682
     * Address : 山西省太原市小店区高新街32号
     * DevTime : 2017/12/13 13:30:21
     * RcvTime : 2017/12/13 13:30:26
     */

    private String ID;
    private String UnitID;
    private String UnitName;
    private String DevName;
    private String DevID;
    private boolean Online;
    private String State;
    private boolean Located;
    private double Lat;
    private double Lng;
    private String Address;
    private String DevTime;
    private String RcvTime;

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getUnitID() {
        return UnitID;
    }

    public void setUnitID(String UnitID) {
        this.UnitID = UnitID;
    }

    public String getUnitName() {
        return UnitName;
    }

    public void setUnitName(String UnitName) {
        this.UnitName = UnitName;
    }

    public String getDevName() {
        return DevName;
    }

    public void setDevName(String DevName) {
        this.DevName = DevName;
    }

    public String getDevID() {
        return DevID;
    }

    public void setDevID(String DevID) {
        this.DevID = DevID;
    }

    public boolean isOnline() {
        return Online;
    }

    public void setOnline(boolean Online) {
        this.Online = Online;
    }

    public String getState() {
        return State;
    }

    public void setState(String State) {
        this.State = State;
    }

    public boolean isLocated() {
        return Located;
    }

    public void setLocated(boolean Located) {
        this.Located = Located;
    }

    public double getLat() {
        return Lat;
    }

    public void setLat(double Lat) {
        this.Lat = Lat;
    }

    public double getLng() {
        return Lng;
    }

    public void setLng(double Lng) {
        this.Lng = Lng;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }

    public String getDevTime() {
        return DevTime;
    }

    public void setDevTime(String DevTime) {
        this.DevTime = DevTime;
    }

    public String getRcvTime() {
        return RcvTime;
    }

    public void setRcvTime(String RcvTime) {
        this.RcvTime = RcvTime;
    }
}
