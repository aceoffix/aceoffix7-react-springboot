package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.SheetWriter;
import com.acesoftcorp.aceoffix.excel.WorkbookWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/ExcelAdjustRC")
public class ExcelAdjustRCController {

    @RequestMapping(value = "/Excel")
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet1 = wb.openSheet("Sheet1");
        // Sets whether users can manually adjust rows/columns when the worksheet is read-only
        sheet1.setAllowAdjustRC(true);
        aceCtrl.setWriter(wb); // Required

        aceCtrl.webOpen("/doc/ExcelAdjustRC/test.xlsx", OpenModeType.xlsReadOnly, "Luna");
        return aceCtrl.getHtml();
    }

}
