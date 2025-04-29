package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.ExcelTableWriter;
import com.acesoftcorp.aceoffix.excel.SheetWriter;
import com.acesoftcorp.aceoffix.excel.WorkbookWriter;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/SetXlsTableByUser/")
public class SetXlsTableByUserController {


    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "Excel")
    public Map showWord(HttpServletRequest request, String userName) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter wb = new WorkbookWriter();
        SheetWriter sheet = wb.openSheet("Sheet1");
        ExcelTableWriter tableA = sheet.openTable("C4:D6");
        ExcelTableWriter tableB = sheet.openTable("C7:D9");

        if (userName.equals("Tom")) {
            tableA.setReadOnly(false);
            tableA.setBackColor(Color.YELLOW);
            tableB.setReadOnly(true);
            tableB.setBackColor(Color.WHITE);
        } else {
            tableB.setReadOnly(false);
            tableB.setBackColor(Color.YELLOW);
            tableA.setReadOnly(true);
            tableA.setBackColor(Color.WHITE);
        }

        aceCtrl.setWriter(wb);


        aceCtrl.webOpen("/doc/SetXlsTableByUser/test.xlsx", OpenModeType.xlsSubmitForm, userName);
        HashMap<Object, Object> map = new HashMap<>();
        map.put("aceoffix", aceCtrl.getHtml());
        map.put("userName", userName);
        return map;
    }


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "SetXlsTableByUser/" + fs.getFileName());
        fs.close();
    }

}
