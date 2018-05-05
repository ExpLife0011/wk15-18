package com.ty.xrht.http;
/**
 *
 * 网络请求结果 基类
 */

public class BaseResponse<T> {

    public  int Code;
    public  String Message;
    public  boolean Status;
    public  T Data;

    public boolean isSuccess(){

        return Code == 1;
    }

    public T getData(){
        return Data;
    }

}
