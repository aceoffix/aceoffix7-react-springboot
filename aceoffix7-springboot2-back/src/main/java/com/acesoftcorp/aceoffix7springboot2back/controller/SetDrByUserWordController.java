package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/SetDrByUserWord/")
public class SetDrByUserWordController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "Word", method = RequestMethod.POST)
    public Map showWord(HttpServletRequest request, String userName) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WordDocumentWriter doc = new WordDocumentWriter();
        DataRegionWriter dataRegion1 = doc.openDataRegion("ACE_Paragraph1");
        DataRegionWriter dataRegion2 = doc.openDataRegion("ACE_Paragraph2");

        if (userName.equals("Tom")) {
            dataRegion1.setEditing(true);
            dataRegion2.setEditing(false);
        } else {
            dataRegion1.setEditing(false);
            dataRegion2.setEditing(true);
        }

        aceCtrl.setWriter(doc);
        aceCtrl.webOpen("/doc/SetDrByUserWord/test.docx", OpenModeType.docSubmitForm, userName);
        Map<Object, Object> map = new HashMap<>();
        map.put("aceoffix", aceCtrl.getHtml());
        map.put("userName", userName);
        return map;
    }


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "SetDrByUserWord/" + fs.getFileName());
        fs.close();
    }

}
