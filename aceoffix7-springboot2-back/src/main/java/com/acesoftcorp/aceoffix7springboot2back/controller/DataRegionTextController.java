package com.acesoftcorp.aceoffix7springboot2back.controller;


import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WdParagraphAlignment;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;


@RestController
@RequestMapping(value = "/DataRegionText")
public class DataRegionTextController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter doc = new WordDocumentWriter();
        DataRegionWriter paragraph1 = doc.openDataRegion("ACE_p1");
        paragraph1.getFont().setColor(Color.BLUE);//Font Color
        paragraph1.getFont().setName("Arial Rounded MT Bold");// Font Style
        paragraph1.getFont().setSize(16);
        paragraph1.getParagraphFormat().setAlignment(WdParagraphAlignment.wdAlignParagraphCenter);//Alignment

        DataRegionWriter paragraph2 = doc.openDataRegion("ACE_p2");
        paragraph2.getFont().setColor(Color.ORANGE);//Font Color
        paragraph2.getFont().setName("Algerian");// Font Style
        paragraph2.getFont().setSize(14);
        paragraph2.getParagraphFormat().setAlignment(WdParagraphAlignment.wdAlignParagraphLeft);//Alignment

        DataRegionWriter paragraph3 = doc.openDataRegion("ACE_p3");
        paragraph3.getFont().setColor(Color.MAGENTA);//Font Color
        paragraph3.getFont().setName("Blackadder ITC");// Font Style
        paragraph3.getFont().setSize(12);
        paragraph3.getParagraphFormat().setAlignment(WdParagraphAlignment.wdAlignParagraphRight);//Alignment

        aceCtrl.setWriter(doc);
        aceCtrl.webOpen("/doc/DataRegionText/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
