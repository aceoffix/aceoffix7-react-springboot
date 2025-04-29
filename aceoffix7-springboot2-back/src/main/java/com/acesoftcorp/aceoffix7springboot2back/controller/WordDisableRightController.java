package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/WordDisableRight")
public class WordDisableRightController {
    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wordDoc = new WordDocumentWriter();
        wordDoc.setDisableWindowRightClick(true); // Disable right-click in Word
        // wordDoc.setDisableWindowDoubleClick(true); // Disable double-click in Word
        // wordDoc.setDisableWindowSelection(true); // Disable text selection in Word
        aceCtrl.setWriter(wordDoc);
        aceCtrl.webOpen("/doc/WordDisableRight/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
