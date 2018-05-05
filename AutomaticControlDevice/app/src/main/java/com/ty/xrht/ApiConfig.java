package com.ty.xrht;

import com.tsy.sdk.acache.ACache;

/**
 * Created by yeah on 2017/12/14.
 */

public class ApiConfig {
    /**
     * 服务器地址，应该根据 DEBUG 判断选用哪个环境
     */
    public static final int CacheExpiresTime = 2 * ACache.TIME_DAY;
    public static final String BASE_DOMAIN = "http://218.26.35.8:9002";
    public static final String BASE_XML_DOMAIN = "http://218.26.35.8:9001";
    public static final String WCF_BASE_URL = "http://218.26.35.8:7001/Locate";
    public static final String BASE_PATH = "/api/Terminal/Terminal/";
    public static final String BASE_URL = BASE_DOMAIN + BASE_PATH;

    public static final String SAVE_SWITCH_KEY = "switch_in_cache";

    public static final String LOGIN_INFO_SP = "name_psw_in_shared_preferences";
    public static final String USER_NAME_KEY = "user_name_key";
    public static final String USER_PWD_KEY = "user_password_key";




}