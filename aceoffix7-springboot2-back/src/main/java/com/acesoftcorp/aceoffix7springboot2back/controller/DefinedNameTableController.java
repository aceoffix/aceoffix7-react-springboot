package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.*;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/DefinedNameTable/")
public class DefinedNameTableController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "Excel")
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet = wb.openSheet("Sheet1");

        ExcelTableWriter table = sheet.openTableByDefinedName("report", 10, 5, false);
        table.getDataFields().get(0).setValue("Jan");
        table.getDataFields().get(1).setValue("100");
        table.getDataFields().get(2).setValue("120");
        table.getDataFields().get(3).setValue("500");
        table.getDataFields().get(4).setValue("120%");
        table.nextRow();
        table.close();
        aceCtrl.setWriter(wb);

        aceCtrl.webOpen("/doc/DefinedNameTable/test.xlsx", OpenModeType.xlsSubmitForm, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "Excel2")
    public String showWord2(HttpServletRequest request, String tempFileName) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet = wb.openSheet("Sheet1");

        ExcelTableWriter table = sheet.openTableByDefinedName("report", 10, 5, false);
        table.getDataFields().get(0).setValue("Jan");
        table.getDataFields().get(1).setValue("100");
        table.getDataFields().get(2).setValue("120");
        table.getDataFields().get(3).setValue("500");
        table.getDataFields().get(4).setValue("120%");
        table.nextRow();
        table.close();

        ExcelCellWriter cellName = sheet.openCellByDefinedName("Name");
        cellName.setValue("Tom");

        aceCtrl.setWriter(wb);
        aceCtrl.webOpen("/doc/DefinedNameTable/" + tempFileName, OpenModeType.xlsSubmitForm, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "Excel6")
    public String showWord6(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.webOpen("/doc/DefinedNameTable/test4.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "Excel4")
    public String showWord4(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet = wb.openSheet("Sheet1");

        ExcelTableWriter table = sheet.openTable("B4:F11");
        int rowCount = 12;
        for (int i = 1; i <= rowCount; i++) {
            table.getDataFields().get(0).setValue(i + "Month");
            table.getDataFields().get(1).setValue("100");
            table.getDataFields().get(2).setValue("120");
            table.getDataFields().get(3).setValue("500");
            table.getDataFields().get(4).setValue("120%");
            table.nextRow();
        }
        table.close();

        ExcelTableWriter table2 = sheet.openTable("B13:F16");
        int rowCount2 = 12;
        for (int i = 1; i <= rowCount2; i++) {
            table2.getDataFields().get(0).setValue(i + "Quarter");
            table2.getDataFields().get(1).setValue("300");
            table2.getDataFields().get(2).setValue("300");
            table2.getDataFields().get(3).setValue("300");
            table2.getDataFields().get(4).setValue("100%");
            table2.nextRow();
        }
        table2.close();

        aceCtrl.setWriter(wb);
        aceCtrl.webOpen("/doc/DefinedNameTable/test4.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "Excel5")
    public String showWord5(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet = wb.openSheet("Sheet1");
        ExcelTableWriter table = sheet.openTableByDefinedName("report", 4, 5, true);
        int rowCount = 12; // Assume the actual number of records to be automatically filled is 12.
        for (int i = 1; i <= rowCount; i++) {
            table.getDataFields().get(0).setValue(i + " month");
            table.getDataFields().get(1).setValue("100");
            table.getDataFields().get(2).setValue("120");
            table.getDataFields().get(3).setValue("500");
            table.getDataFields().get(4).setValue("120%");
            table.nextRow();
        }
        table.close();

        // Define another table
        ExcelTableWriter table2 = sheet.openTableByDefinedName("report2", 4, 5, true);
        int rowCount2 = 4; // Assume the actual number of records to be automatically filled is 4.
        for (int i = 1; i <= rowCount2; i++) {
            table2.getDataFields().get(0).setValue(i + " quarter");
            table2.getDataFields().get(1).setValue("300");
            table2.getDataFields().get(2).setValue("300");
            table2.getDataFields().get(3).setValue("300");
            table2.getDataFields().get(4).setValue("100%");
            table2.nextRow();
        }
        table2.close();

        aceCtrl.setWriter(wb);
        aceCtrl.webOpen("/doc/DefinedNameTable/test4.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/saveData", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) throws IOException {
        WorkbookReader workBook = new WorkbookReader(request, response);
        SheetReader sheet = workBook.openSheet("Sheet1");
        ExcelTableReader table = sheet.openTableByDefinedName("report");

        List<JSONObject> objectList = new ArrayList<>();
        while (!table.getEOF()) {
            if (!table.getDataFields().getIsEmpty()) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("Month:", table.getDataFields().get(0).getText());
                jsonObject.put("Plan:", table.getDataFields().get(1).getText());
                jsonObject.put("Reality:", table.getDataFields().get(2).getText());
                jsonObject.put("Accumulative:", table.getDataFields().get(3).getText());
                float f = Float.parseFloat(table.getDataFields().get(2).getText());
                f = f / Float.parseFloat(table.getDataFields().get(1).getText());
                DecimalFormat df = (DecimalFormat) NumberFormat.getInstance();
                jsonObject.put("Order Fill Rate:", df.format(f * 100) + "%");
                objectList.add(jsonObject);
            }
            table.nextRow();
        }
        table.close();
        workBook.setCustomSaveResult(objectList.toString());
        workBook.close();
    }
}
