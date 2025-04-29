package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/SendParameters")
public class SendParametersController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.webOpen("/doc/SendParameters/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response,int id) throws IOException {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "SendParameters/" + fs.getFileName());

        int age=0;
        if (fs.getFormField("age") != null && fs.getFormField("age").trim().length() > 0) {
            age = Integer.parseInt(fs.getFormField("age"));
        }
        String userName ="";
        if (fs.getFormField("userName") != null && fs.getFormField("userName").trim().length() > 0) {
            userName = fs.getFormField("userName");
        }
        /**
         * In actual development, the values in the data area are typically retrieved for interaction with the database. For example, based on the retrieved data, operations such as adding, updating, or deleting database records can be performed.
         * Here, to show users the retrieved data, the values in the data area are returned to the front - end page using setCustomSaveResult for users to review the execution results.
         * If you only want to return a save result, you can use, for example: setCustomSaveResult("ok"). The front - end can then perform further logical processing based on this save result.
         */
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("id",id);
        jsonObject.put("age", age);
        jsonObject.put("userName", userName);
        fs.setCustomSaveResult(jsonObject.toString());
        fs.close();
    }

}
