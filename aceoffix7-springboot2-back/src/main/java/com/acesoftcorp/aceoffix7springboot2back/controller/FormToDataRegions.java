package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/FormToDataRegions")
public class FormToDataRegions {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WordDocumentWriter doc = new WordDocumentWriter();
        doc.openDataRegion("ACE_purchaser").setEditing(true);
        doc.openDataRegion("ACE_supplier").setEditing(true);
        doc.openDataRegion("ACE_project_number").setEditing(true);
        doc.openDataRegion("ACE_buyer_company").setEditing(true);
        doc.openDataRegion("ACE_table").setEditing(true);
        doc.openDataRegion("ACE_totalPrice").setEditing(true);

        aceCtrl.setWriter(doc);
        aceCtrl.webOpen("/doc/FormToDataRegions/test.docx", OpenModeType.docSubmitForm, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "FormToDataRegions/" + fs.getFileName());
        fs.close();
    }
}

