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
@RequestMapping(value = "/DataRegionFill2")
public class DataRegionFill2Controller {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wordDoc = new WordDocumentWriter();

        DataRegionWriter dataRegion1 = wordDoc.openDataRegion("ACE_Name");
        dataRegion1.setValue("John");
        dataRegion1.getFont().setColor(Color.ORANGE);//Font Color
        dataRegion1.getFont().setName("Algerian");// Font Style
        dataRegion1.getFont().setSize(14);
        dataRegion1.getParagraphFormat().setAlignment(WdParagraphAlignment.wdAlignParagraphLeft);//Alignment

        DataRegionWriter dataRegion2 = wordDoc.openDataRegion("ACE_department");
        dataRegion2.setValue("Sales Department");
        dataRegion2.getFont().setColor(Color.MAGENTA);//Font Color
        dataRegion2.getFont().setName("Blackadder ITC");// Font Style
        dataRegion2.getFont().setSize(12);
        dataRegion2.getParagraphFormat().setAlignment(WdParagraphAlignment.wdAlignParagraphRight);//Alignment

        aceCtrl.setWriter(wordDoc); // Note that you must not forget this line of code. If this line is missing, the assignment will not succeed.
        aceCtrl.webOpen("/doc/DataRegionFill2/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
