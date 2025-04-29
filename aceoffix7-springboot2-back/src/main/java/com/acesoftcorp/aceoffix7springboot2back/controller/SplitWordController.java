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
import java.io.FileOutputStream;
import java.io.IOException;


@RestController
@RequestMapping(value = "/SplitWord")
public class SplitWordController {
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wordDoc = new WordDocumentWriter();

        DataRegionWriter dataRegion1 = wordDoc.openDataRegion("ACE_paragraph1");
        dataRegion1.setSubmitAsFile(true);

        DataRegionWriter dataRegion2 = wordDoc.openDataRegion("ACE_paragraph2");
        dataRegion2.setSubmitAsFile(true);
        dataRegion2.setEditing(true);

        DataRegionWriter dataRegion3 = wordDoc.openDataRegion("ACE_paragraph3");
        dataRegion3.setSubmitAsFile(true);

        aceCtrl.setWriter(wordDoc);

        aceCtrl.webOpen("/doc/SplitWord/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String filePath = dir + "SplitWord/";
        WordDocumentReader doc = new WordDocumentReader(request, response);
        byte[] bWord;

        DataRegionReader dr1 = doc.openDataRegion("ACE_paragraph1");
        bWord = dr1.getFileBytes();
        FileOutputStream fos1 = new FileOutputStream(filePath + "new1.docx");
        fos1.write(bWord);
        fos1.flush();
        fos1.close();

        DataRegionReader dr2 = doc.openDataRegion("ACE_paragraph2");
        bWord = dr2.getFileBytes();
        FileOutputStream fos2 = new FileOutputStream(filePath + "new2.docx");
        fos2.write(bWord);
        fos2.flush();
        fos2.close();

        DataRegionReader dr3 = doc.openDataRegion("ACE_paragraph3");
        bWord = dr3.getFileBytes();
        FileOutputStream fos3 = new FileOutputStream(filePath + "new3.docx");
        fos3.write(bWord);
        fos3.flush();
        fos3.close();

        doc.close();
    }

}
