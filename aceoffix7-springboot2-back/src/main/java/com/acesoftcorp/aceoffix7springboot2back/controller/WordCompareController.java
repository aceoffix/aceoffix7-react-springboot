package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/WordCompare")
public class WordCompareController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        //aceCtrl.wordCompare("doc/aaa1.docx", "doc/aaa2.docx", OpenModeType.docReadOnly, "Luna");
        aceCtrl.wordCompare("/doc/WordCompare/test1.docx", "/doc/WordCompare/test2.docx", OpenModeType.docAdmin, "Luna");

        return aceCtrl.getHtml();
    }


}
