package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.DocumentOpenType;
import com.acesoftcorp.aceoffix.FileMakerCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@RestController
@RequestMapping(value = "/FileMakerPrintFiles/")
public class FileMakerPrintFilesController {
    
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";
    @RequestMapping(value = "/convert",method = RequestMethod.POST)
    public void filemakerWord(HttpServletRequest request, HttpServletResponse response, int id) throws IOException {
        FileMakerCtrl fmCtrl = new FileMakerCtrl(request);
        String filePath = "";

        if (id == 1) {
            filePath = dir + "FileMakerPrintFiles/Aceoffix Product Overview.docx";
        }
        if (id == 2) {
            filePath = dir + "FileMakerPrintFiles/Aceoffix Trial Limits.docx";
        }
        if (id == 3) {
            filePath = dir + "FileMakerPrintFiles/Aceoffix License Policy.docx";
        }
        if (id == 4) {
            filePath = dir + "FileMakerPrintFiles/Introduction to Aceoffix.docx";
        }

        fmCtrl.fillDocument(filePath, DocumentOpenType.Word);
        response.getOutputStream().print(fmCtrl.getHtml());
    }

    @RequestMapping(value = "/preview",method = RequestMethod.POST)
    public String preview(HttpServletRequest request,int id)  {
        String filePath = "";
        if (id == 1) {
            filePath = dir + "FileMakerPrintFiles/Aceoffix Product Overview.docx";
        }
        if (id == 2) {
            filePath = dir + "FileMakerPrintFiles/Aceoffix Trial Limits.docx";
        }
        if (id == 3) {
            filePath = dir + "FileMakerPrintFiles/Aceoffix License Policy.docx";
        }
        if (id == 4) {
            filePath = dir + "FileMakerPrintFiles/Introduction to Aceoffix.docx";
        }
        AceoffixCtrl aceCtrl1 = new AceoffixCtrl(request);
        aceCtrl1.webOpen(filePath, OpenModeType.docReadOnly, "Luna");
        return aceCtrl1.getHtml();
    }

}
