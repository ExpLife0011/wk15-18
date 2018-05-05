package com.ty.xrht.utils;

/**
 * Created by yeah on 2017/10/16.
 */


import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

import org.ksoap2.SoapEnvelope;
import org.ksoap2.serialization.SoapObject;
import org.ksoap2.serialization.SoapSerializationEnvelope;
import org.ksoap2.transport.HttpTransportSE;

import android.util.Log;

public class WebServiceHelper {

    private static final String NAMESPACE = "http://www.afkjgps.com/";

    //Í¨ÓÃ²éÑ¯
    public static String doRequest(String uri, String action, Map<String, Object> params) {
        SoapObject rpc = new SoapObject(NAMESPACE, action);
        if (null != params) {
            Iterator<Entry<String, Object>> it = params.entrySet().iterator();
            while (it.hasNext()) {
                Entry<String, Object> entry = it.next();
                rpc.addProperty(entry.getKey(), entry.getValue());
//				Log.i("AFGPS:"+action,entry.getKey()+":"+entry.getValue());
            }
        }
        SoapSerializationEnvelope envelope = new SoapSerializationEnvelope(
                SoapEnvelope.VER11);
        envelope.dotNet = true;
        envelope.setOutputSoapObject(rpc);
        HttpTransportSE transport = new HttpTransportSE("http://" + uri + "/Locate");
        String result = "";
        try {
            transport.call(NAMESPACE + "ILocate/" + action, envelope);
            SoapObject object = (SoapObject) envelope.bodyIn;
            // »ñÈ¡·µ»ØµÄ½á¹û
            result = object.getProperty(0).toString();
//			Log.i("AFGPS Result:",action+"Result:" + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public static String doRequest(String uri, String action, String vehicleID, String startTime, String endTime) {
        SoapObject rpc = new SoapObject(NAMESPACE, action);
        rpc.addProperty("vehicleID", vehicleID);
        rpc.addProperty("startTime", startTime);
        rpc.addProperty("endTime", endTime);
        SoapSerializationEnvelope envelope = new SoapSerializationEnvelope(SoapEnvelope.VER11);
        envelope.dotNet = true;
        envelope.setOutputSoapObject(rpc);
        HttpTransportSE transport = new HttpTransportSE("http://" + uri + "/Locate");
        String result = "";
        try {
            transport.call(NAMESPACE + "ILocate/" + action, envelope);
            SoapObject object = (SoapObject) envelope.bodyIn;
            result = object.getProperty(0).toString();
//			Log.i("AFGPS Result:",action+"Result:" + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }


    public static String doRequest(String uri, String action, String unitID, String userID) {
        SoapObject rpc = new SoapObject(NAMESPACE, action);
        rpc.addProperty("unitID", unitID);
        rpc.addProperty("userID", userID);
        SoapSerializationEnvelope envelope = new SoapSerializationEnvelope(SoapEnvelope.VER11);
        envelope.dotNet = true;
        envelope.setOutputSoapObject(rpc);
        HttpTransportSE transport = new HttpTransportSE("http://" + uri + "/Locate");
        String result = "";
        try {
            transport.call(NAMESPACE + "ILocate/" + action, envelope);
            SoapObject object = (SoapObject) envelope.bodyIn;
            result = object.getProperty(0).toString();
//			Log.i("AFGPS Result:",action+"Result:" + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
