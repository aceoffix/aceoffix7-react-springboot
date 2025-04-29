package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionInsertType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/InsertPageBreak2")
public class InsertPageBreak2Controller {
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wordDocument = new WordDocumentWriter();

        // Insert a page break at the end of the document and create a new data region to insert another document on the new page.
        DataRegionWriter mydr1 = wordDocument.createDataRegion("ACE_first", DataRegionInsertType.After, "[end]");
        mydr1.selectEnd();
        wordDocument.insertPageBreak(); // Insert a page break

        DataRegionWriter mydr2 = wordDocument.createDataRegion("ACE_second", DataRegionInsertType.After, "[end]");
        mydr2.setValue("[word]/InsertPageBreak2/doc/test2.docx[/word]");

        aceCtrl.setWriter(wordDocument);
        aceCtrl.webOpen("/doc/InsertPageBreak2/test1.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "InsertPageBreak2/" + fs.getFileName());
        fs.close();
    }

}
