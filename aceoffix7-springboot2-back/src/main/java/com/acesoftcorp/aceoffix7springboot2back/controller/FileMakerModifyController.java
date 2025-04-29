package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.DocumentOpenType;
import com.acesoftcorp.aceoffix.FileMakerCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/FileMakerModify/")
public class FileMakerModifyController {
    
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";
    @RequestMapping(value = "FileMakerModify",method = RequestMethod.POST)
    public void showWord(HttpServletRequest request, HttpServletResponse response) throws IOException {
        FileMakerCtrl fmCtrl = new FileMakerCtrl(request);
        WordDocumentWriter doc = new WordDocumentWriter();
        // Assign values to template data regions
        doc.openDataRegion("ACE_UnitName").setValue("Jack Jones");
        fmCtrl.setWriter(doc);
        fmCtrl.fillDocument("/doc/FileMakerSingle/template.docx", DocumentOpenType.Word);
        response.getOutputStream().print(fmCtrl.getHtml());
    }


    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        String fileName = "maker" + fs.getFileExtName();
        fs.saveToFile(dir + "FileMakerModify/" + fileName);
        // Configures custom save result to return to frontend (accepts JSON string)
        // Updates file operation status
        fs.setCustomSaveResult("ok");
        fs.close();
    }

}
