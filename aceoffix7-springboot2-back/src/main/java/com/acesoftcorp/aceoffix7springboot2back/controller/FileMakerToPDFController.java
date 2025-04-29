package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.DocumentOpenType;
import com.acesoftcorp.aceoffix.FileMakerCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/FileMakerToPDF")
public class FileMakerToPDFController {
    
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";
    @RequestMapping(value = "/FileMakerToPDF",method = RequestMethod.POST)
    public void showWord(HttpServletRequest request, HttpServletResponse response) throws IOException {
        FileMakerCtrl fmCtrl = new FileMakerCtrl(request);
        fmCtrl.fillDocumentAsPDF("/doc/FileMakerToPDF/template.docx", DocumentOpenType.Word, "zhengshu.pdf");
        response.getOutputStream().print(fmCtrl.getHtml());
    }


    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        String fileName = fs.getFileName();
        fs.saveToFile(dir + "FileMakerToPDF/" + fileName);
        // Configures custom save result to return to frontend (accepts JSON string)
        // Updates file operation status
        fs.setCustomSaveResult("ok");
        fs.close();
    }

}
