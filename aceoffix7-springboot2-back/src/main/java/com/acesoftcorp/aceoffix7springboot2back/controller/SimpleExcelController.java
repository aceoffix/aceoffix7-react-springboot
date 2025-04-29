package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/SimpleExcel")
public class SimpleExcelController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Excel", method = RequestMethod.POST)
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.webOpen("/doc/SimpleExcel/test.xlsx", OpenModeType.xlsReadOnly, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "SimpleExcel/" + fs.getFileName());
        fs.close();
    }
}
