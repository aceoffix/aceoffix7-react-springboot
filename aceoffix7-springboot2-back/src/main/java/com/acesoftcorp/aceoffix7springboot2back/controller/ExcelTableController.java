package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.ExcelTableWriter;
import com.acesoftcorp.aceoffix.excel.SheetWriter;
import com.acesoftcorp.aceoffix.excel.WorkbookWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/ExcelTable")
public class ExcelTableController {

    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        // Define a Workbook object
        WorkbookWriter workBook = new WorkbookWriter();
        // Define a Sheet object. "Sheet1" is the name of the opened Excel worksheet.
        SheetWriter sheet = workBook.openSheet("Sheet1");
        // Define a Table object
        ExcelTableWriter table = sheet.openTable("B4:F13");
        for (int i = 0; i < 50; i++) {
            table.getDataFields().get(0).setValue("Product " + i);
            table.getDataFields().get(1).setValue("100");
            table.getDataFields().get(2).setValue(String.valueOf(100 + i));
            table.nextRow();
        }
        table.close();

        aceCtrl.setWriter(workBook);
        aceCtrl.webOpen("/doc/ExcelTable/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
