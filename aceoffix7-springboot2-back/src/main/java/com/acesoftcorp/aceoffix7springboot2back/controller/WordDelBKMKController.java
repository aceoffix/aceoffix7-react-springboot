package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/WordDelBKMK")
public class WordDelBKMKController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        //添加自定义按钮
        aceCtrl.addCustomToolButton("删除光标处的", "delBookMark()", 7);
        aceCtrl.addCustomToolButton("删除选中文本中的", "delChoBookMark()", 7);
        
        aceCtrl.webOpen("/doc/WordDelBKMK/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }
}
