package com.acesoftcorp.aceoffix7springboot2back.po;

import java.util.List;

public class DefineDataRegionResult{

    private String aceHtml;

    public String getAceHtml() {
        return aceHtml;
    }

    public void setAceHtml(String aceHtml) {
        this.aceHtml = aceHtml;
    }

    public List<DefineDataRegion> getDataRegions() {
        return dataRegions;
    }

    public void setDataRegions(List<DefineDataRegion> dataRegions) {
        this.dataRegions = dataRegions;
    }

    private List<DefineDataRegion> dataRegions;

}
