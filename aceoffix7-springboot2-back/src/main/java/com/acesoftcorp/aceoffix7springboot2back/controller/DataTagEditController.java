package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.po.DefineDataTagResult;
import com.acesoftcorp.aceoffix7springboot2back.util.AjaxResult;
import com.acesoftcorp.aceoffix7springboot2back.util.DataTagUtil;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/DataTagEdit")
public class DataTagEditController {
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public AjaxResult<DefineDataTagResult> openFile(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.webOpen("/doc/DataTagEdit/test.docx", OpenModeType.docNormalEdit, "Luna");

        DataTagUtil.clearDataTagList();
        DataTagUtil.addDefineDataTag("{contract number}");
        DataTagUtil.addDefineDataTag("{Purchasers full name}");
        DataTagUtil.addDefineDataTag("{Purchasers email}");
        DataTagUtil.addDefineDataTag("{Purchasers address}");
        DataTagUtil.addDefineDataTag("{Suppliers full name}");
        DataTagUtil.addDefineDataTag("{Suppliers email}");
        DataTagUtil.addDefineDataTag("{Suppliers address}");

        DefineDataTagResult defineDataTagResult = new DefineDataTagResult();
        defineDataTagResult.setDataTags(DataTagUtil.getDataTagList());
        defineDataTagResult.setAceHtml(aceCtrl.getHtml());

        return AjaxResult.success(defineDataTagResult);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "DataTagEdit/" + fs.getFileName());
        fs.close();
    }
}
