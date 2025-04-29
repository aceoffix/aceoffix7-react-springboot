package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionReader;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentReader;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping(value = "/ExtractImage")
public class ExtractImageController {
    
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";
    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wordDoc = new WordDocumentWriter();
        DataRegionWriter dataRegion1 = wordDoc.openDataRegion("ACE_image");
        dataRegion1.setEditing(true);

        aceCtrl.setWriter(wordDoc);
        aceCtrl.webOpen("/doc/ExtractImage/test.docx", OpenModeType.docSubmitForm, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
        WordDocumentReader doc = new WordDocumentReader(request, response);
        DataRegionReader dr = doc.openDataRegion("ACE_image");
        dr.openShape(1).saveAsJPG(dir + "ExtractImage/" + "test.jpg");
        doc.setCustomSaveResult("ok");
        doc.close();
    }

}
