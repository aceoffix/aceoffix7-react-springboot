package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;


@RestController
@RequestMapping(value = "/MergeExcelCell")
public class MergeExcelCellController {

    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet = wb.openSheet("Sheet1");
        sheet.openTable("B2:F2").merge();

        ExcelCellWriter cellB2 = sheet.openCell("B2");
        cellB2.setValue("Products for Sale");
        cellB2.setHorizontalAlignment(XlHAlign.xlHAlignCenter);
        cellB2.setForeColor(Color.RED);
        cellB2.getFont().setSize(16);

        sheet.openTable("B4:B6").merge();
        ExcelCellWriter cellB4 = sheet.openCell("B4");
        cellB4.setValue("Product A:");
        cellB4.setHorizontalAlignment(XlHAlign.xlHAlignCenter);
        cellB4.setVerticalAlignment(XlVAlign.xlVAlignCenter);
        cellB4.setForeColor(Color.RED);

        sheet.openTable("B7:B9").merge();
        ExcelCellWriter cellB7 = sheet.openCell("B7");
        cellB7.setValue("Product B:");
        cellB7.setHorizontalAlignment(XlHAlign.xlHAlignCenter);
        cellB7.setVerticalAlignment(XlVAlign.xlVAlignCenter);
        cellB7.setForeColor(Color.RED);

        aceCtrl.setWriter(wb);
        aceCtrl.webOpen("/doc/MergeExcelCell/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
