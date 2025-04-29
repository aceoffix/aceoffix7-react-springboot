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
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping(value = "/SubmitExcel")
public class SubmitExcelController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet1 = wb.openSheet("Purchase Order");

        java.util.Random rd = new java.util.Random(System.currentTimeMillis());
        sheet1.openCell("D8").setValue("XYZ-11-" + (10001 + rd.nextInt(10000)));
        sheet1.openCell("D8").setReadOnly(true);

        ExcelCellWriter cellDate = sheet1.openCell("I6");
        String dt = new java.util.Date().toString();
        cellDate.setValue(dt);
        sheet1.openCell("J31").setValue(dt);

        sheet1.openCell("D15").setReadOnly(false); // Enabled edit

        ExcelTableWriter table1 = sheet1.openTable("B18:J23");
        table1.setReadOnly(false); // Enabled edit

        sheet1.openCell("J24").setReadOnly(true);
        sheet1.openCell("J26").setReadOnly(true);
        sheet1.openCell("J28").setReadOnly(true);

        sheet1.openCell("G31").setValue("John Scott");

        aceCtrl.setWriter(wb);


        aceCtrl.webOpen("/doc/SubmitExcel/test.xlsx", OpenModeType.xlsSubmitForm, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("utf-8");//解决返回的数据中文乱码问题
        WorkbookReader workBook = new WorkbookReader(request, response);
        SheetReader sheet1 = workBook.openSheet("Purchase Order");
        ExcelTableReader table1 = sheet1.openTable("B18:J23");
        List<JSONObject> objectList = new ArrayList<>();
        while (!table1.getEOF()) {
            if (!table1.getDataFields().getIsEmpty()) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("QTY", table1.getDataFields().get(0).getText());
                jsonObject.put("DESCRIPTION", table1.getDataFields().get(1).getText());
                jsonObject.put("UNIT PRICE", table1.getDataFields().get(7).getText());
                jsonObject.put("AMOUNT", table1.getDataFields().get(8).getText());
                objectList.add(jsonObject);
            }
            table1.nextRow();
        }
        table1.close();
        workBook.setCustomSaveResult(objectList.toString());
        workBook.close();


    }

}
