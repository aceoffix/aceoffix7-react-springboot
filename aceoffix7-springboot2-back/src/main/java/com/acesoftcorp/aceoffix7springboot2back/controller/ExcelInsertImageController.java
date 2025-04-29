package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.SheetWriter;
import com.acesoftcorp.aceoffix.excel.WorkbookWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/ExcelInsertImage")
public class ExcelInsertImageController {

    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter workBook = new WorkbookWriter();
        SheetWriter sheet1 = workBook.openSheet("Sheet1");
        sheet1.openCell("A1").setValue("[image]/doc/ExcelInsertImage/logo.png[/image]");

        aceCtrl.setWriter(workBook);
        aceCtrl.webOpen("/doc/ExcelInsertImage/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
