package com.acesoftcorp.aceoffix7springboot2back.util;

import com.acesoftcorp.aceoffix7springboot2back.po.DefineDataRegion;

import java.util.ArrayList;
import java.util.List;

public class DataRegionUtil {

    private static List<DefineDataRegion> DATA_REGION_LIST = new ArrayList<>();


    public static void addDefineDataRegion(String name, String value) {
        DATA_REGION_LIST.add(new DefineDataRegion(name, value));
    }


    public static List<DefineDataRegion> getDataRegionList() {
        return DATA_REGION_LIST;
    }


    public static void clearDataRegionList() {
        DATA_REGION_LIST.clear();
    }
}
    

