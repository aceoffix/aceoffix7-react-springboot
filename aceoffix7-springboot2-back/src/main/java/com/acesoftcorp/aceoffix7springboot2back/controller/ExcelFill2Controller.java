package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.ExcelCellWriter;
import com.acesoftcorp.aceoffix.excel.SheetWriter;
import com.acesoftcorp.aceoffix.excel.WorkbookWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;
import java.text.DecimalFormat;


@RestController
@RequestMapping(value = "/ExcelFill2")
public class ExcelFill2Controller {

    @RequestMapping(value = "/Excel")
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        WorkbookWriter workBook = new WorkbookWriter();
        SheetWriter sheet = workBook.openSheet("Sheet1");

        ExcelCellWriter cellB4 = sheet.openCell("B4");
        cellB4.setValue("Jan");
        cellB4.setForeColor(Color.RED);

        ExcelCellWriter cellC4 = sheet.openCell("C4");
        cellC4.setValue("300");
        cellC4.setForeColor(Color.BLUE);

        ExcelCellWriter cellD4 = sheet.openCell("D4");
        cellD4.setValue("270");
        cellD4.setForeColor(Color.ORANGE);

        ExcelCellWriter cellE4 = sheet.openCell("E4");
        cellE4.setValue("270");
        cellE4.setForeColor(Color.GREEN);

        ExcelCellWriter cellF4 = sheet.openCell("F4");
        DecimalFormat df = new DecimalFormat("#.##%");
        cellF4.setValue(df.format(270.0 / 300));
        cellF4.setForeColor(Color.GRAY);

        aceCtrl.setWriter(workBook);
        aceCtrl.webOpen("/doc/ExcelFill2/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
