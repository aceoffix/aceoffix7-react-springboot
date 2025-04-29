package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/ReadOnly")
public class ReadOnlyController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        WordDocumentWriter wordDoc = new WordDocumentWriter();
        wordDoc.setDisableWindowSelection(true); // Disable text selection
        wordDoc.setDisableWindowRightClick(true); // Disable right-click context menu

        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        aceCtrl.setWriter(wordDoc); // Mandatory to set the document writer
        aceCtrl.setAllowCopy(false); // Disable copy functionality, also blocks F12 save as shortcut

        aceCtrl.webOpen("/doc/ReadOnly/test.docx", OpenModeType.docReadOnly, "Luna");
        return aceCtrl.getHtml();
    }
}
