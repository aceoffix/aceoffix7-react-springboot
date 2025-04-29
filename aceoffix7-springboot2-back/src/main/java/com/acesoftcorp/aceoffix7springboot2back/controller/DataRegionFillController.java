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
@RequestMapping(value = "/DataRegionFill")
public class DataRegionFillController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wordDoc = new WordDocumentWriter();
        // Get the Dataregion object and then assign a value
        DataRegionWriter dataRegion1 = wordDoc.openDataRegion("ACE_Name");
        dataRegion1.setValue("John");
        // You can also assign a value directly
        wordDoc.openDataRegion("ACE_Department").setValue("Sales Department");

        aceCtrl.setWriter(wordDoc); // Note that you must not forget this line of code. If this line is missing, the assignment will not succeed.
        aceCtrl.webOpen("/doc/DataRegionFill/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
