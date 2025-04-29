package com.acesoftcorp.aceoffix7springboot2back.controller;


import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionInsertType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/DataRegionCreate")
public class DataRegionCreateController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wordDoc = new WordDocumentWriter();
        // The three parameters of the CreateDataRegion method represent respectively: the name of the tag where the new data region will be created, the insertion position of the DataRegion, and the name of the bookmark associated with the DataRegion to be created.
        // If there are no bookmarks in the opened Word document or you want to create a new data region at the beginning of the Word document, use "[home]" as the third parameter. If you want to create it at the end, use "[end]".
        DataRegionWriter dataRegion1 = wordDoc.createDataRegion("createDataRegion1", DataRegionInsertType.After, "[home]");
        // Assign a value to the created DataRegion
        dataRegion1.setValue("new DataRegion1\r\n");
        DataRegionWriter dataRegion2 = wordDoc.createDataRegion("createDataRegion2", DataRegionInsertType.After, "createDataRegion1");
        dataRegion2.setValue("new DataRegion2\r\n");
        aceCtrl.setWriter(wordDoc);

        aceCtrl.webOpen("/doc/DataRegionCreate/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
