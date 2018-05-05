package com.ty.xrht.feature.Home.Module.homefrag;

/**
 * Created by yeah on 2017/10/19.
 */

public class TitleInfoImpl extends HomeInformationModle {
    private String titleName;
    private String titleTime;
    public TitleInfoImpl(){
        this.type = HomeInformationModle.TITLE_TYPE;
    }

    public String getTitleName() {
        return titleName;
    }

    public void setTitleName(String title) {
        this.titleName = title;
    }

    public String getTitleTime() {
        return titleTime;
    }

    public void setTitleTime(String titleTime) {
        this.titleTime = titleTime;
    }

}
