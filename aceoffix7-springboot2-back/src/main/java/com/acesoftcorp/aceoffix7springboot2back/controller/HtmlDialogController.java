package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


/**
 * @Author: dong
 * @Date: 2022/3/11 16:50
 * @Version 1.0
 */
@RestController
@RequestMapping(value = "/HtmlDialog")
public class HtmlDialogController {
    
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";
    @RequestMapping(value = "Word")
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.webOpen("/doc/HtmlDialog/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}

