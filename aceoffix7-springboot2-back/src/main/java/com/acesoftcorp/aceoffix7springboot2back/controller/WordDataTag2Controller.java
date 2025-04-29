package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataTagWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/WordDataTag2/")
public class WordDataTag2Controller {

    @RequestMapping(value = "Word")
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wd = new WordDocumentWriter();
        DataTagWriter dataTag1 = wd.openDataTag("{name}");
        dataTag1.setValue("Tom");
        DataTagWriter dataTag2 = wd.openDataTag("{Number}");
        dataTag2.setValue("201501");
        DataTagWriter dataTag3 = wd.openDataTag("{Department}");
        dataTag3.setValue("Development");
        DataTagWriter dataTag4 = wd.openDataTag("{Manager}");
        dataTag4.setValue("John Scott");
        DataTagWriter dataTag5 = wd.openDataTag("{Salary}");
        dataTag5.setValue("$5000");

        aceCtrl.setWriter(wd);
        aceCtrl.webOpen("/doc/WordDataTag2/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
