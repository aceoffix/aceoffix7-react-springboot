package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
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
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/SetDrByUserWord2/")
public class SetDrByUserWord2Controller {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "Word")
    public Map showWord(HttpServletRequest request, String userName) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WordDocumentWriter doc = new WordDocumentWriter();
        DataRegionWriter dataRegion1 = doc.openDataRegion("ACE_Paragraph1");
        DataRegionWriter dataRegion2 = doc.openDataRegion("ACE_Paragraph2");

        dataRegion1.setValue("[word]/doc/SetDrByUserWord2/paragraph1.docx[/word]");
        dataRegion2.setValue("[word]/doc/SetDrByUserWord2/paragraph2.docx[/word]");

        if (userName.equals("Tom")) {
            dataRegion1.setEditing(true);
            dataRegion2.setEditing(false);
            dataRegion1.setSubmitAsFile(true);
        } else {
            dataRegion1.setEditing(false);
            dataRegion2.setEditing(true);
            dataRegion2.setSubmitAsFile(true);
        }

        aceCtrl.setWriter(doc);
        aceCtrl.webOpen("/doc/SetDrByUserWord2/test.docx", OpenModeType.docSubmitForm, userName);
        Map<Object, Object> map = new HashMap<>();
        map.put("aceoffix", aceCtrl.getHtml());
        map.put("userName", userName);
        return map;
    }


    @RequestMapping(value = "/saveData", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response, String userName) throws IOException {
        WordDocumentReader doc = new WordDocumentReader(request, response);
        byte[] bytes = null;
        String filePath = "";
        if (userName.trim().equalsIgnoreCase("Tom")) {
            bytes = doc.openDataRegion("ACE_Paragraph1").getFileBytes();
            filePath = "paragraph1.docx";
        } else {
            bytes = doc.openDataRegion("ACE_Paragraph2").getFileBytes();
            filePath = "paragraph2.docx";
        }

        filePath = dir + "SetDrByUserWord2/" + filePath;
        FileOutputStream outputStream = new FileOutputStream(filePath);
        outputStream.write(bytes);
        outputStream.flush();
        outputStream.close();

        doc.close();
    }

}
