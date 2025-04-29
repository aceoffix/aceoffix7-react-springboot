package com.acesoftcorp.aceoffix7springboot2back.util;

import com.acesoftcorp.aceoffix7springboot2back.po.DefineDataTag;

import java.util.ArrayList;
import java.util.List;

public class DataTagUtil {

    private static final List<DefineDataTag> DATA_TAG_LIST = new ArrayList<>();


    public static void addDefineDataTag(String name) {
        DATA_TAG_LIST.add(new DefineDataTag(name));
    }


    public static List<DefineDataTag> getDataTagList() {
        return DATA_TAG_LIST;
    }

    public static void clearDataTagList() {
        DATA_TAG_LIST.clear();
    }
}
