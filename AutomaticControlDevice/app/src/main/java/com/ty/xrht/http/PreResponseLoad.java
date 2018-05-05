package com.ty.xrht.http;

import rx.functions.Func1;

/**
 *
 * 剥离 最终数据
 */

public class PreResponseLoad<T> implements Func1<BaseResponse<T>,T> {
    @Override
    public T call(BaseResponse<T> tBaseResponse) {//获取数据失败时，包装一个Fault 抛给上层处理错误
        if(!tBaseResponse.isSuccess()){
            throw new Fault(tBaseResponse.Code,tBaseResponse.Message);
        }
        return tBaseResponse.Data;
    }
}
