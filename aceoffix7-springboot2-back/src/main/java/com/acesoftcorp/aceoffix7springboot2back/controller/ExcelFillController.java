package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.ExcelCellWriter;
import com.acesoftcorp.aceoffix.excel.SheetWriter;
import com.acesoftcorp.aceoffix.excel.WorkbookWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/ExcelFill")
public class ExcelFillController {

    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WorkbookWriter workBook = new WorkbookWriter();
        SheetWriter sheet = workBook.openSheet("Sheet1");
        ExcelCellWriter cellB4 = sheet.openCell("B4");
        cellB4.setValue("Jan");
        ExcelCellWriter cellD2 = sheet.openCell("D2");
        cellD2.setValue("Sales Report (2015)");
        ExcelCellWriter cellF14 = sheet.openCell("F14");
        cellF14.setValue("100%");
        aceCtrl.setWriter(workBook);
        aceCtrl.webOpen("/doc/ExcelFill/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
