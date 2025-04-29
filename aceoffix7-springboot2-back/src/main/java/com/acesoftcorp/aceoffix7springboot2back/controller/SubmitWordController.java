package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionReader;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentReader;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/SubmitWord")
public class SubmitWordController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WordDocumentWriter wordDoc = new WordDocumentWriter();
        // Get the data region object and then assign a value
        DataRegionWriter dataRegion1 = wordDoc.openDataRegion("ACE_Name");
        dataRegion1.setEditing(true);
        dataRegion1.setValue(" ");
        // You can also assign a value directly
        DataRegionWriter dataRegion2 = wordDoc.openDataRegion("ACE_department");
        dataRegion2.setEditing(true);
        dataRegion2.setValue(" ");

        aceCtrl.setWriter(wordDoc); // Note that you must not forget this line of code. If this line is missing, the assignment will not succeed.

        aceCtrl.webOpen("/doc/SubmitWord/test.docx", OpenModeType.docSubmitForm, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response, String companyName) throws IOException {
        WordDocumentReader doc = new WordDocumentReader(request, response);

        DataRegionReader dataUserName = doc.openDataRegion("ACE_Name");
        DataRegionReader dataDeptName = doc.openDataRegion("ACE_Department");

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("userName", dataUserName.getValue());
        jsonObject.put("department", dataDeptName.getValue());
        jsonObject.put("companyName", doc.getFormField("companyName"));
        // Convert the JObject to a JSON string
        String jsonString = jsonObject.toString();
        // Return a JSON - formatted result to the aceoffix control page
        doc.setCustomSaveResult(jsonString);
        doc.close();
    }

}
