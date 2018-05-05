package com.ty.xrht.Base;

/**
 * Created by yeah on 2017/10/23.
 */

public interface BaseNetTaskCallBackInterface {

    void onSuccess();
    void onEmpty();
    void onFailure();
    int preHandle(String jsonStr);
}
