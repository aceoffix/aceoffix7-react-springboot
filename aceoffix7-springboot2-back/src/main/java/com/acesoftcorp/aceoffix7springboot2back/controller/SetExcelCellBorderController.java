package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;

@RestController
@RequestMapping(value = "/SetExcelCellBorder")
public class SetExcelCellBorderController {

    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet = wb.openSheet("Sheet1");

        // Set the background
        ExcelTableWriter backGroundTable = sheet.openTable("A1:P200");
        // Set the table border style
        backGroundTable.getBorder().setLineColor(Color.WHITE);

        // Set the cell border style
        ExcelBorder C4Border = sheet.openTable("C4:C4").getBorder();
        C4Border.setWeight(XlBorderWeight.xlThick);
        C4Border.setLineColor(Color.YELLOW);
        C4Border.setBorderType(XlBorderType.xlAllEdges);

        // Set the cell border style
        ExcelBorder B6Border = sheet.openTable("B6:B6").getBorder();
        B6Border.setWeight(XlBorderWeight.xlHairline);
        B6Border.setLineColor(new Color(128, 0, 128)); // 对应Color.Purple
        B6Border.setLineStyle(XlBorderLineStyle.xlSlantDashDot);
        B6Border.setBorderType(XlBorderType.xlAllEdges);

        // Set the table border style
        ExcelTableWriter titleTable = sheet.openTable("B4:F5");
        titleTable.getBorder().setWeight(XlBorderWeight.xlThick);
        titleTable.getBorder().setLineColor(new Color(0, 128, 128));
        titleTable.getBorder().setBorderType(XlBorderType.xlAllEdges);

        // Set the table border style
        ExcelTableWriter bodyTable2 = sheet.openTable("B6:F15");
        bodyTable2.getBorder().setWeight(XlBorderWeight.xlThick);
        bodyTable2.getBorder().setLineColor(new Color(0, 128, 128));
        bodyTable2.getBorder().setBorderType(XlBorderType.xlAllEdges);

        aceCtrl.setWriter(wb); // Don't forget this line of code
        aceCtrl.webOpen("/doc/SetExcelCellBorder/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
