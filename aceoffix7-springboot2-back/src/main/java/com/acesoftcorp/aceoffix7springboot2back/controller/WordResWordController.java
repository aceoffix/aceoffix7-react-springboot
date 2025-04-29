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
@RequestMapping(value = "/WordResWord")
public class WordResWordController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter worddoc = new WordDocumentWriter();
        // First, manually insert bookmarks at the positions where you want to insert Word files. The bookmarks must start with "ACE_".
        // Assign values to the DataRegion. The value should be in the format: "[word]Path to the Word file[/word]"
        DataRegionWriter data1 = worddoc.openDataRegion("ACE_paragraph1");
        data1.setValue("[word]/doc/WordResWord/paragraph1.docx[/word]");
        DataRegionWriter data2 = worddoc.openDataRegion("ACE_paragraph2");
        data2.setValue("[word]/doc/WordResWord/paragraph2.docx[/word]");
        DataRegionWriter data3 = worddoc.openDataRegion("ACE_paragraph3");
        data3.setValue("[word]/doc/WordResWord/paragraph3.docx[/word]");

        aceCtrl.setWriter(worddoc);
        aceCtrl.webOpen("/doc/WordResWord/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
