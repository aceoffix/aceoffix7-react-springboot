package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataTagWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;


@RestController
@RequestMapping(value = "/WordDataTag")
public class WordDataTagController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WordDocumentWriter wd = new WordDocumentWriter();
        DataTagWriter dataTag1 = wd.openDataTag("{name}");
        dataTag1.setValue("Tom");
        dataTag1.getFont().setColor(Color.RED);
        dataTag1.getFont().setBold(true);

        DataTagWriter dataTag2 = wd.openDataTag("{Number}");
        dataTag2.setValue("201501");
        dataTag2.getFont().setBold(true);

        DataTagWriter dataTag3 = wd.openDataTag("{Department}");
        dataTag3.setValue("Development");
        dataTag3.getFont().setItalic(true);

        DataTagWriter dataTag4 = wd.openDataTag("{Manager}");
        dataTag4.setValue("John Scott");
        dataTag4.getFont().setColor(Color.GREEN);

        DataTagWriter dataTag5 = wd.openDataTag("{Salary}");
        dataTag5.setValue("$5000");
        dataTag5.getFont().setBold(true);

        aceCtrl.setWriter(wd);
        aceCtrl.webOpen("/doc/WordDataTag/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
