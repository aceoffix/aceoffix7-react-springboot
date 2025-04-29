package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;


@RestController
@RequestMapping(value = "/DrawExcel/")
public class DrawExcelController {

    @RequestMapping(value = "Excel")
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter wb = new WorkbookWriter();
        // Open background table and set border color
        ExcelTableWriter backGroundTable = wb.openSheet("Sheet1").openTable("A1:P200");
        backGroundTable.getBorder().setLineColor(Color.WHITE);

        // Merge cells and format header
        wb.openSheet("Sheet1").openTable("A1:H2").merge();
        wb.openSheet("Sheet1").openTable("A1:H2").setRowHeight(30);
        ExcelCellWriter A1 = wb.openSheet("Sheet1").openCell("A1");
        A1.setHorizontalAlignment(XlHAlign.xlHAlignCenter);
        A1.setVerticalAlignment(XlVAlign.xlVAlignCenter);
        A1.setForeColor(new Color(255, 64, 0));
        A1.setValue("Consumption");

        wb.openSheet("Sheet1").openTable("A1:A1").getFont().setBold(true);
        wb.openSheet("Sheet1").openTable("A1:A1").getFont().setSize(25);

        // Format title table
        ExcelTableWriter titleTable = wb.openSheet("Sheet1").openTable("B4:H5");
        titleTable.getBorder().setBorderType(XlBorderType.xlAllEdges);
        titleTable.getBorder().setWeight(XlBorderWeight.xlThick);
        titleTable.getBorder().setLineColor(new Color(255, 64, 0));

        // Format body table
        ExcelTableWriter bodyTable = wb.openSheet("Sheet1").openTable("B6:H15");
        bodyTable.getBorder().setLineColor(Color.GRAY);
        bodyTable.getBorder().setWeight(XlBorderWeight.xlHairline);

        // Set specific borders
        ExcelBorder B7Border = wb.openSheet("Sheet1").openTable("B7:B7").getBorder();
        B7Border.setLineColor(Color.WHITE);

        ExcelBorder B9Border = wb.openSheet("Sheet1").openTable("B9:B9").getBorder();
        B9Border.setBorderType(XlBorderType.xlBottomEdge);
        B9Border.setLineColor(Color.WHITE);

        ExcelBorder C6C15BorderLeft = wb.openSheet("Sheet1").openTable("C6:C15").getBorder();
        C6C15BorderLeft.setLineColor(Color.WHITE);
        C6C15BorderLeft.setBorderType(XlBorderType.xlLeftEdge);

        ExcelBorder C6C15BorderRight = wb.openSheet("Sheet1").openTable("C6:C15").getBorder();
        C6C15BorderRight.setLineColor(Color.YELLOW);
        C6C15BorderRight.setLineStyle(XlBorderLineStyle.xlDot);
        C6C15BorderRight.setBorderType(XlBorderType.xlRightEdge);

        ExcelBorder E6E15Border = wb.openSheet("Sheet1").openTable("E6:E15").getBorder();
        E6E15Border.setLineStyle(XlBorderLineStyle.xlDot);
        E6E15Border.setBorderType(XlBorderType.xlAllEdges);
        E6E15Border.setLineColor(Color.YELLOW);

        ExcelBorder G6G15BorderRight = wb.openSheet("Sheet1").openTable("G6:G15").getBorder();
        G6G15BorderRight.setBorderType(XlBorderType.xlRightEdge);
        G6G15BorderRight.setLineColor(Color.WHITE);

        ExcelBorder G6G15BorderLeft = wb.openSheet("Sheet1").openTable("G6:G15").getBorder();
        G6G15BorderLeft.setLineStyle(XlBorderLineStyle.xlDot);
        G6G15BorderLeft.setBorderType(XlBorderType.xlLeftEdge);
        G6G15BorderLeft.setLineColor(Color.YELLOW);

        // Format body table 2
        ExcelTableWriter bodyTable2 = wb.openSheet("Sheet1").openTable("B6:H15");
        bodyTable2.getBorder().setWeight(XlBorderWeight.xlThick);
        bodyTable2.getBorder().setLineColor(new Color(255, 64, 0));
        bodyTable2.getBorder().setBorderType(XlBorderType.xlAllEdges);

        // Format footer borders
        ExcelBorder H16H17Border = wb.openSheet("Sheet1").openTable("H16:H17").getBorder();
        H16H17Border.setLineColor(new Color(204, 255, 204));

        ExcelBorder E16G17Border = wb.openSheet("Sheet1").openTable("E16:G17").getBorder();
        E16G17Border.setLineColor(new Color(255, 64, 0));

        // Format footer table
        ExcelTableWriter footTable = wb.openSheet("Sheet1").openTable("B16:H17");
        footTable.getBorder().setWeight(XlBorderWeight.xlThick);
        footTable.getBorder().setLineColor(new Color(255, 64, 0));
        footTable.getBorder().setBorderType(XlBorderType.xlAllEdges);

        // Set column widths
        wb.openSheet("Sheet1").openTable("A1:A1").setColumnWidth(1);
        wb.openSheet("Sheet1").openTable("B1:B1").setColumnWidth(20);
        wb.openSheet("Sheet1").openTable("C1:C1").setColumnWidth(15);
        wb.openSheet("Sheet1").openTable("D1:D1").setColumnWidth(10);
        wb.openSheet("Sheet1").openTable("E1:E1").setColumnWidth(8);
        wb.openSheet("Sheet1").openTable("F1:F1").setColumnWidth(3);
        wb.openSheet("Sheet1").openTable("G1:G1").setColumnWidth(12);
        wb.openSheet("Sheet1").openTable("H1:H1").setColumnWidth(20);

        // Set row heights
        wb.openSheet("Sheet1").openTable("A16:A16").setRowHeight(20);
        wb.openSheet("Sheet1").openTable("A17:A17").setRowHeight(20);

        // Set font size for a range of cells
        for (int i = 0; i < 12; i++) {
            for (int j = 0; j < 7; j++) {
                wb.openSheet("Sheet1").openCellRC(4 + i, 2 + j).getFont().setSize(10);
            }
        }

        // Set background color for H6-H15
        for (int i = 0; i < 10; i++) {
            wb.openSheet("Sheet1").openCell("H" + (6 + i)).setBackColor(new Color(255, 255, 153));
        }

        // Set background colors for specific cells
        wb.openSheet("Sheet1").openCell("E16").setBackColor(new Color(255, 64, 0));
        wb.openSheet("Sheet1").openCell("F16").setBackColor(new Color(255, 64, 0));
        wb.openSheet("Sheet1").openCell("G16").setBackColor(new Color(255, 64, 0));
        wb.openSheet("Sheet1").openCell("E17").setBackColor(new Color(255, 64, 0));
        wb.openSheet("Sheet1").openCell("F17").setBackColor(new Color(255, 64, 0));
        wb.openSheet("Sheet1").openCell("G17").setBackColor(new Color(255, 64, 0));
        wb.openSheet("Sheet1").openCell("H16").setBackColor(new Color(204, 255, 204));
        wb.openSheet("Sheet1").openCell("H17").setBackColor(new Color(204, 255, 204));

        // Set cell values and formatting
        ExcelCellWriter B4 = wb.openSheet("Sheet1").openCell("B4");
        B4.getFont().setBold(true);
        B4.setValue("Consumption");

        ExcelCellWriter H5 = wb.openSheet("Sheet1").openCell("H5");
        H5.getFont().setBold(true);
        H5.setValue("total");
        H5.setHorizontalAlignment(XlHAlign.xlHAlignCenter);

        ExcelCellWriter B6 = wb.openSheet("Sheet1").openCell("B6");
        B6.getFont().setBold(true);
        B6.setValue("airfare");

        ExcelCellWriter B9 = wb.openSheet("Sheet1").openCell("B9");
        B9.getFont().setBold(true);
        B9.setValue("hotel");

        ExcelCellWriter B11 = wb.openSheet("Sheet1").openCell("B11");
        B11.getFont().setBold(true);
        B11.setValue("repast");

        ExcelCellWriter B12 = wb.openSheet("Sheet1").openCell("B12");
        B12.getFont().setBold(true);
        B12.setValue("transportation fee");

        ExcelCellWriter B13 = wb.openSheet("Sheet1").openCell("B13");
        B13.getFont().setBold(true);
        B13.setValue("entertainment");

        ExcelCellWriter B14 = wb.openSheet("Sheet1").openCell("B14");
        B14.getFont().setBold(true);
        B14.setValue("gift");

        ExcelCellWriter B15 = wb.openSheet("Sheet1").openCell("B15");
        B15.getFont().setBold(true);
        B15.getFont().setSize(10);
        B15.setValue("other");

        // Set cell values
        wb.openSheet("Sheet1").openCell("C6").setValue("air fare");
        wb.openSheet("Sheet1").openCell("C7").setValue("air fare(back)");
        wb.openSheet("Sheet1").openCell("C8").setValue("other");
        wb.openSheet("Sheet1").openCell("C9").setValue("Daily National Consumption");
        wb.openSheet("Sheet1").openCell("C10").setValue("other");
        wb.openSheet("Sheet1").openCell("C11").setValue("Daily National Consumption");
        wb.openSheet("Sheet1").openCell("C12").setValue("Daily National Consumption");
        wb.openSheet("Sheet1").openCell("C13").setValue("total");
        wb.openSheet("Sheet1").openCell("C14").setValue("total");
        wb.openSheet("Sheet1").openCell("C15").setValue("total");

        // Set empty cells and some values
        wb.openSheet("Sheet1").openCell("G6");
        wb.openSheet("Sheet1").openCell("G7");
        wb.openSheet("Sheet1").openCell("G9");
        wb.openSheet("Sheet1").openCell("G10");
        wb.openSheet("Sheet1").openCell("G11").setValue(" day");
        wb.openSheet("Sheet1").openCell("G12").setValue(" day");

        // Set formulas
        wb.openSheet("Sheet1").openCell("H6").setFormula("=D6*F6");
        wb.openSheet("Sheet1").openCell("H7").setFormula("=D7*F7");
        wb.openSheet("Sheet1").openCell("H8").setFormula("=D8*F8");
        wb.openSheet("Sheet1").openCell("H9").setFormula("=D9*F9");
        wb.openSheet("Sheet1").openCell("H10").setFormula("=D10*F10");
        wb.openSheet("Sheet1").openCell("H11").setFormula("=D11*F11");
        wb.openSheet("Sheet1").openCell("H12").setFormula("=D12*F12");
        wb.openSheet("Sheet1").openCell("H13").setFormula("=D13*F13");
        wb.openSheet("Sheet1").openCell("H14").setFormula("=D14*F14");
        wb.openSheet("Sheet1").openCell("H15").setFormula("=D15*F15");

        // Set number format for D and H columns
        for (int i = 0; i < 10; i++) {
            wb.openSheet("Sheet1").openCell("D" + (6 + i)).setNumberFormatLocal("$#,##0.00;$-#,##0.00");
            wb.openSheet("Sheet1").openCell("H" + (6 + i)).setNumberFormatLocal("$#,##0.00;$-#,##0.00");
        }

        // Format footer cells
        ExcelCellWriter E16 = wb.openSheet("Sheet1").openCell("E16");
        E16.getFont().setBold(true);
        E16.getFont().setSize(11);
        E16.setForeColor(Color.WHITE);
        E16.setValue("The total amount");
        E16.setVerticalAlignment(XlVAlign.xlVAlignCenter);

        ExcelCellWriter E17 = wb.openSheet("Sheet1").openCell("E17");
        E17.getFont().setBold(true);
        E17.getFont().setSize(11);
        E17.setForeColor(Color.WHITE);
        E17.setFormula("=IF(C4>H16,\"budget\",\"budget\")");
        E17.setVerticalAlignment(XlVAlign.xlVAlignCenter);

        ExcelCellWriter H16 = wb.openSheet("Sheet1").openCell("H16");
        H16.setVerticalAlignment(XlVAlign.xlVAlignCenter);
        H16.setNumberFormatLocal("$#,##0.00;$-#,##0.00");
        H16.getFont().setName("Arial");
        H16.getFont().setSize(11);
        H16.getFont().setBold(true);
        H16.setFormula("=SUM(H6:H15)");

        ExcelCellWriter H17 = wb.openSheet("Sheet1").openCell("H17");
        H17.setVerticalAlignment(XlVAlign.xlVAlignCenter);
        H17.setNumberFormatLocal("$#,##0.00;$-#,##0.00");
        H17.getFont().setName("Arial");
        H17.getFont().setSize(11);
        H17.getFont().setBold(true);
        H17.setFormula("=(C4-H16)");

        // Set initial values
        ExcelCellWriter C4 = wb.openSheet("Sheet1").openCell("C4");
        C4.setNumberFormatLocal("$#,##0.00;$-#,##0.00");
        C4.setValue("2500");

        ExcelCellWriter D6 = wb.openSheet("Sheet1").openCell("D6");
        D6.setNumberFormatLocal("$#,##0.00;$-#,##0.00");
        D6.setValue("1200");

        wb.openSheet("Sheet1").openCell("F6").getFont().setSize(10);
        wb.openSheet("Sheet1").openCell("F6").setValue("1");

        ExcelCellWriter D7 = wb.openSheet("Sheet1").openCell("D7");
        D7.setNumberFormatLocal("$#,##0.00;$-#,##0.00");
        D7.setValue("875");
        wb.openSheet("Sheet1").openCell("F7").setValue("1");

        // Set the writer to the ACE control
        aceCtrl.setWriter(wb);
        aceCtrl.webOpen("/doc/DrawExcel/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
