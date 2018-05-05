package com.ty.xrht.utils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by yeah on 2017/10/23.
 */

public class GsonUtils {


    public static <T> T getObj(String jsonStr, Class<T> cls) {
        T t = null;
        Gson gson = new GsonBuilder().registerTypeAdapterFactory(new NullStringToEmptyAdapterFactory()).create();
        t = gson.fromJson(jsonStr, cls);
        return t;
    }

    public static <T> List<T> getList(String jsonStr) {
        List<T> list = null;
        Gson gson = new GsonBuilder().registerTypeAdapterFactory(new NullStringToEmptyAdapterFactory()).create();
        list = gson.fromJson(jsonStr, new TypeToken<List<T>>() {
        }.getType());
        return list;
    }

    public static List<Map<String, Object>> getListMap(String jsonStr) {
        List<Map<String, Object>> list = null;
        Gson gson = new GsonBuilder().registerTypeAdapterFactory(new NullStringToEmptyAdapterFactory()).create();
        list = gson.fromJson(jsonStr, new TypeToken<List<Map<String, Object>>>() {
        }.getType());
        return list;

    }


    public static <T> ArrayList<T> jsonToArrayList(String json, Class<T> clazz) {

        Type type = new TypeToken<ArrayList<JsonObject>>() {
        }.getType();
        ArrayList<JsonObject> jsonObjects = new Gson().fromJson(json, type);
        ArrayList<T> arrayList = new ArrayList<>();
        for (JsonObject jsonObject : jsonObjects) {
            Gson gson = new GsonBuilder().registerTypeAdapterFactory(new NullStringToEmptyAdapterFactory()).create();
            arrayList.add(gson.fromJson(jsonObject, clazz));
        }
        return arrayList;
    }


    public static boolean isGoogJSON(String json) {
        try {
            new JsonParser().parse(json);
            return true;
        } catch (JsonParseException e) {
            return false;
        }
    }


}