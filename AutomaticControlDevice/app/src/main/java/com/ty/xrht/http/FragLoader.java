package com.ty.xrht.http;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

/**
 * Created by yeah on 2018/1/12.
 */

public class FragLoader {
    /**
     *
     * @param observable
     * @param <T>
     * @return
     */
    protected  <T> Observable<T> observe(Observable<T> observable){
        return observable.subscribeOn(Schedulers.newThread())
                .unsubscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread());
    }


}