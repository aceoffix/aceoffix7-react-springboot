package com.acesoftcorp.aceoffix7springboot2back.po;

import java.util.List;

public class DefineDataTagResult {
    private String aceHtml;

    public String getAceHtml() {
        return aceHtml;
    }

    public List<DefineDataTag> getDataTags() {
        return dataTags;
    }

    private List<DefineDataTag> dataTags;

    public void setAceHtml(String aceHtml) {
        this.aceHtml = aceHtml;
    }

    public void setDataTags(List<DefineDataTag> dataTags) {
        this.dataTags = dataTags;
    }
}
