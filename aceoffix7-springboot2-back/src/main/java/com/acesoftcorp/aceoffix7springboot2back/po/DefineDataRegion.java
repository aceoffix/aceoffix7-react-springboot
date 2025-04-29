package com.acesoftcorp.aceoffix7springboot2back.po;

public class DefineDataRegion {
    private String name;
    private String value;

    public DefineDataRegion(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
