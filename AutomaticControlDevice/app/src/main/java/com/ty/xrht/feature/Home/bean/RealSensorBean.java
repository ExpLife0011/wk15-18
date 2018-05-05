package com.ty.xrht.feature.Home.bean;

import java.util.List;

/**
 * Created by yeah on 2018/1/12.
 */

public class RealSensorBean {

    /**
     * RcvTime : 2018-01-11 15:04:49
     * Sensorlist : [{"SensorName":"温度","SensorValue":0,"UnitName":"℃"},{"SensorName":"湿度","SensorValue":0,"UnitName":"%"},{"SensorName":"PM10","SensorValue":0,"UnitName":"μm"},{"SensorName":"噪音","SensorValue":0,"UnitName":"db"},{"SensorName":"PM2.5","SensorValue":0,"UnitName":"μm"},{"SensorName":"风速","SensorValue":0,"UnitName":"m/s"},{"SensorName":"风向","SensorValue":0,"UnitName":"∠"},{"SensorName":null,"SensorValue":0,"UnitName":""}]
     * Runlist : [{"SwitchName":"001","SwitchRun":"关","RunState":"停止"},{"SwitchName":"002","SwitchRun":"关","RunState":"停止"},{"SwitchName":"003","SwitchRun":"关","RunState":"停止"},{"SwitchName":"004","SwitchRun":"关","RunState":"停止"},{"SwitchName":"005","SwitchRun":"关","RunState":"停止"},{"SwitchName":"006","SwitchRun":"关","RunState":"停止"},{"SwitchName":"007","SwitchRun":"关","RunState":"停止"},{"SwitchName":"008","SwitchRun":"关","RunState":"停止"}]
     */

    private String RcvTime;
    private List<SensorlistBean> Sensorlist;
    private List<RunlistBean> Runlist;

    public String getRcvTime() {
        return RcvTime;
    }

    public void setRcvTime(String RcvTime) {
        this.RcvTime = RcvTime;
    }

    public List<SensorlistBean> getSensorlist() {
        return Sensorlist;
    }

    public void setSensorlist(List<SensorlistBean> Sensorlist) {
        this.Sensorlist = Sensorlist;
    }

    public List<RunlistBean> getRunlist() {
        return Runlist;
    }

    public void setRunlist(List<RunlistBean> Runlist) {
        this.Runlist = Runlist;
    }

    public static class SensorlistBean {
        /**
         * SensorName : 温度
         * SensorValue : 0.0
         * UnitName : ℃
         */

        private String SensorName;
        private double SensorValue;
        private String UnitName;

        public String getSensorName() {
            return SensorName;
        }

        public void setSensorName(String SensorName) {
            this.SensorName = SensorName;
        }

        public double getSensorValue() {
            return SensorValue;
        }

        public void setSensorValue(double SensorValue) {
            this.SensorValue = SensorValue;
        }

        public String getUnitName() {
            return UnitName;
        }

        public void setUnitName(String UnitName) {
            this.UnitName = UnitName;
        }
    }

    public static class RunlistBean {
        /**
         * SwitchName : 001
         * SwitchRun : 关
         * RunState : 停止
         */

        private String SwitchName;
        private String SwitchRun;
        private String RunState;

        public String getSwitchName() {
            return SwitchName;
        }

        public void setSwitchName(String SwitchName) {
            this.SwitchName = SwitchName;
        }

        public String getSwitchRun() {
            return SwitchRun;
        }

        public void setSwitchRun(String SwitchRun) {
            this.SwitchRun = SwitchRun;
        }

        public String getRunState() {
            return RunState;
        }

        public void setRunState(String RunState) {
            this.RunState = RunState;
        }
    }




}
