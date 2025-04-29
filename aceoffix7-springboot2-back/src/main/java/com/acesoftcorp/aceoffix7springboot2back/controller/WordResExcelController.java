package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/WordResExcel")
public class WordResExcelController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter worddoc = new WordDocumentWriter();

        DataRegionWriter img1 = worddoc.openDataRegion("ACE_Image");
        img1.setValue("[image]/doc/WordResExcel/image1.png[/image]");

        DataRegionWriter excel1 = worddoc.openDataRegion("ACE_Excel");
        excel1.setValue("[excel]/doc/WordResExcel/test.xlsx[/excel]");

        DataRegionWriter data1 = worddoc.openDataRegion("ACE_paragraph1");
        data1.setValue("[word]/doc/WordResExcel/paragraph1.docx[/word]");
        DataRegionWriter data2 = worddoc.openDataRegion("ACE_paragraph2");
        data2.setValue("[word]/doc/WordResExcel/paragraph2.docx[/word]");
        DataRegionWriter data3 = worddoc.openDataRegion("ACE_paragraph3");
        data3.setValue("[word]/doc/WordResExcel/paragraph3.docx[/word]");

        aceCtrl.setWriter(worddoc);
        
        aceCtrl.webOpen("/doc/WordResExcel/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
