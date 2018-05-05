package com.ty.xrht.feature.Home.Module.homefrag;

import android.renderscript.Sampler;

/**
 * Created by yeah on 2017/10/19.
 */

public class ValueInfoImpl extends HomeInformationModle {

    private String valueName;
    private String valueQuantity;
    private float value;
    private float valueTop;
    private float valueFloor;

    public ValueInfoImpl(){
        this.type = HomeInformationModle.VALUE_TYPE;
    }

    public String getValueName() {
        return valueName;
    }

    public void setValueName(String valueName) {
        this.valueName = valueName;
    }

    public String getValueQuantity() {
        return valueQuantity;
    }

    public void setValueQuantity(String valueQuantity) {
        this.valueQuantity = valueQuantity;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public float getValueTop() {
        return valueTop;
    }

    public void setValueTop(float valueTop) {
        this.valueTop = valueTop;
    }

    public float getValueFloor() {
        return valueFloor;
    }

    public void setValueFloor(float valueFloor) {
        this.valueFloor = valueFloor;
    }
}
