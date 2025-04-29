package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@RequestMapping(value = "/CustomToolButton")
public class CustomToolButtonController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request, Map<String, Object> map) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.webOpen("/doc/CustomToolButton/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
