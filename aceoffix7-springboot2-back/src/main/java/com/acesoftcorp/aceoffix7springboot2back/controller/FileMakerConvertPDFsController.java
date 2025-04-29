package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.*;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/FileMakerConvertPDFs/")
public class FileMakerConvertPDFsController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "convert",method = RequestMethod.POST)
    public void convert(HttpServletRequest request, HttpServletResponse response, int id) throws IOException {
        FileMakerCtrl fmCtrl = new FileMakerCtrl(request);
        String filePath = "";
        String pdfName = "";

        if (id == 1) {
            filePath = dir + "FileMakerConvertPDFs/Aceoffix Product Overview.docx";
            pdfName = "Aceoffix Product Overview.pdf";
        }
        if (id == 2) {
            filePath = dir + "FileMakerConvertPDFs/Aceoffix Trial Limits.docx";
            pdfName = "Aceoffix Trial Limits.pdf";
        }
        if (id == 3) {
            filePath = dir + "FileMakerConvertPDFs/Aceoffix License Policy.docx";
            pdfName = "Aceoffix License Policy.pdf";
        }
        if (id == 4) {
            filePath = dir + "FileMakerConvertPDFs/Introduction to Aceoffix.docx";
            pdfName = "Introduction to Aceoffix.pdf";
        }

        fmCtrl.fillDocumentAsPDF(filePath, DocumentOpenType.Word, pdfName);
        response.getOutputStream().print(fmCtrl.getHtml());
    }


    @RequestMapping(value = "edit",method = RequestMethod.POST)
    public String edit(HttpServletRequest request, int id) {
        String filePath = "";
        if (id == 1) {
            filePath = dir + "FileMakerConvertPDFs/Aceoffix Product Overview.docx";
        }
        if (id == 2) {
            filePath = dir + "FileMakerConvertPDFs/Aceoffix Trial Limits.docx";
        }
        if (id == 3) {
            filePath = dir + "FileMakerConvertPDFs/Aceoffix License Policy.docx";
        }
        if (id == 4) {
            filePath = dir + "FileMakerConvertPDFs/Introduction to Aceoffix.docx";
        }
        AceoffixCtrl aceCtrl1 = new AceoffixCtrl(request);
        aceCtrl1.webOpen(filePath, OpenModeType.docNormalEdit, "Luna");
        return aceCtrl1.getHtml();
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "FileMakerConvertPDFs/" + fs.getFileName());
        fs.setCustomSaveResult("ok");
        fs.close();
    }

}
