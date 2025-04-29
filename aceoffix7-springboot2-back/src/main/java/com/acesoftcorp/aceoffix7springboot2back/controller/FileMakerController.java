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
@RequestMapping(value = "/FileMaker/")
public class FileMakerController {
    
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";
    @RequestMapping(value = "/FileMaker",method = RequestMethod.POST)
    public void showWord(HttpServletRequest request, HttpServletResponse response, int id) throws IOException {
        String[] companyArr = { "empty", "Microsoft (China) Co., Ltd.", "IBM (China) Services Co., Ltd.", "Amazon Trade Co., Ltd.",
                "Facebook Technology Co., Ltd.", "Google Network Co., Ltd.", "NVIDIA Technology Co., Ltd.",
                "TSMC Technology Co., Ltd.", "Walmart Inc." };
        FileMakerCtrl fmCtrl = new FileMakerCtrl(request);
        WordDocumentWriter doc = new WordDocumentWriter();
        // Assign values to template data regions
        doc.openDataRegion("ACE_Company").setValue(companyArr[id]);
        fmCtrl.setWriter(doc);
        fmCtrl.fillDocument("/doc/FileMaker/template.docx", DocumentOpenType.Word);
        response.getOutputStream().print(fmCtrl.getHtml());
    }


    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response, int id) {
        FileSaver fs = new FileSaver(request, response);
        String fileName = "maker" + id + fs.getFileExtName();
        fs.saveToFile(dir + "FileMaker/" + fileName);
        // Configures custom save result to return to frontend (accepts JSON string)
        // Updates file operation status
        fs.setCustomSaveResult("ok");
        fs.close();
    }

}
