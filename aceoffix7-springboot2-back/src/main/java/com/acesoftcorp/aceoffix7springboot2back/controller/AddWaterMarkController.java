package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/AddWaterMark")
public class AddWaterMarkController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter doc = new WordDocumentWriter();
        doc.getWaterMark().setText("Aceoffix");
        aceCtrl.setWriter(doc);
        
        aceCtrl.webOpen("/doc/AddWaterMark/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
