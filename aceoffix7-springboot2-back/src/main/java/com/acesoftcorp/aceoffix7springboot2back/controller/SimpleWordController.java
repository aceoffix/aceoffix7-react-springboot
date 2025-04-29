package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@RestController
@RequestMapping(value = "/SimpleWord")
public class SimpleWordController {
    // Get the disk path of the doc directory
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String word(HttpServletRequest request, @RequestBody Map<String, Object> params) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        String file_name = (String) params.get("file_name");
       aceCtrl.webOpen( "/doc/SimpleWord/" +  file_name, OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "/Word1")
    public String showWord1(HttpServletRequest request, @RequestBody Map<String, Object> params) {
        AceoffixCtrl aceCtrl  = new AceoffixCtrl(request);
        String file_name = (String) params.get("file_name");
        // There are two ways to write the disk path for opening: 1. D:\doc\test.docx 2. file://D:/doc/test.docx
        aceCtrl.webOpen("file://" + dir + "/SimpleWord/" + file_name, OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void saveFile(HttpServletRequest request, HttpServletResponse response,@RequestParam String file_name) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "SimpleWord/" + file_name);
        // Set the custom save result to be returned to the front - end page.
        // The parameter of setCustomSaveResult can also be in the form of a JSON string.
        fs.setCustomSaveResult("ok");
        fs.close();
    }


}

