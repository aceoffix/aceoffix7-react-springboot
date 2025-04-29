package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;


@RestController
@RequestMapping(value = "/SetExcelCellText")
public class SetExcelCellTextController {

    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet = wb.openSheet("Sheet1");

        ExcelCellWriter cC3 = sheet.openCell("C3");
        // Set the cell background style
        cC3.setBackColor(Color.WHITE);
        cC3.setValue("January");
        cC3.setForeColor(Color.GREEN);
        cC3.setHorizontalAlignment(XlHAlign.xlHAlignCenter);

        ExcelCellWriter cD3 = sheet.openCell("D3");
        // Set the cell background style
        cD3.setBackColor(Color.WHITE);
        cD3.setValue("February");
        cD3.setForeColor(Color.GREEN);
        cD3.setHorizontalAlignment(XlHAlign.xlHAlignCenter);

        ExcelCellWriter cE3 = sheet.openCell("E3");
        // Set the cell background style
        cE3.setBackColor(Color.WHITE);
        cE3.setValue("March");
        cE3.setForeColor(Color.GREEN);
        cE3.setHorizontalAlignment(XlHAlign.xlHAlignCenter);

        ExcelCellWriter cB4 = sheet.openCell("B4");
        // Set the cell background style
        cB4.setBackColor(new Color(135, 206, 235)); // SkyBlue的RGB值
        cB4.setValue("Goods 1");
        cB4.setHorizontalAlignment(XlHAlign.xlHAlignCenter);

        ExcelCellWriter cB5 = sheet.openCell("B5");
        // Set the cell background style
        cB5.setBackColor(new Color(0, 128, 128)); // Teal颜色
        cB5.setValue("Goods 2");
        cB5.setHorizontalAlignment(XlHAlign.xlHAlignCenter);

        ExcelCellWriter cB6 = sheet.openCell("B6");
        // Set the cell background style
        cB6.setBackColor(new Color(147, 112, 219)); // MediumPurple的RGB值
        cB6.setValue("Goods 3");
        cB6.setHorizontalAlignment(XlHAlign.xlHAlignCenter);

        ExcelCellWriter cB7 = sheet.openCell("B7");
        // Set the cell background style
        cB7.setBackColor(new Color(70, 130, 180)); // SteelBlue的RGB值
        cB7.setValue("goods 4");
        cB7.setHorizontalAlignment(XlHAlign.xlHAlignCenter);

        // Draw the table lines
        ExcelTableWriter titleTable = sheet.openTable("B3:E10");
        titleTable.getBorder().setWeight(XlBorderWeight.xlThick);
        titleTable.getBorder().setLineColor(new Color(0, 128, 128));
        titleTable.getBorder().setBorderType(XlBorderType.xlAllEdges);

        // Merge cells and then assign a value
        sheet.openTable("B1:E2").merge();
        sheet.openTable("B1:E2").setRowHeight(15); // Set the row height
        ExcelCellWriter B1 = sheet.openCell("B1");
        // Set the cell text style
        B1.setHorizontalAlignment(XlHAlign.xlHAlignCenter);
        B1.setVerticalAlignment(XlVAlign.xlVAlignCenter);
        B1.setForeColor(new Color(0, 128, 128));
        B1.setValue("Business Trip Expense Budget");
        B1.getFont().setBold(true);
        B1.getFont().setSize(12);

        aceCtrl.setWriter(wb); // Don't forget this line of code
        aceCtrl.webOpen("/doc/SetExcelCellText/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
