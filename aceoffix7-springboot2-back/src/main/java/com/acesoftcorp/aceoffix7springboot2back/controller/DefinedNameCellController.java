package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.SheetReader;
import com.acesoftcorp.aceoffix.excel.SheetWriter;
import com.acesoftcorp.aceoffix.excel.WorkbookReader;
import com.acesoftcorp.aceoffix.excel.WorkbookWriter;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RestController
@RequestMapping(value = "/DefinedNameCell")
public class DefinedNameCellController {

    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter workBook = new WorkbookWriter();
        SheetWriter sheet = workBook.openSheet("Sheet1");
        sheet.openCellByDefinedName("testA").setValue("Sales Report (2015)");
        sheet.openCellByDefinedName("testB").setValue("100");

        aceCtrl.setWriter(workBook);
        aceCtrl.webOpen("/doc/DefinedNameCell/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) throws IOException {
        WorkbookReader workBook = new WorkbookReader(request, response);
        SheetReader sheet = workBook.openSheet("Sheet1");
        /**
         * In practical development, data from specific regions is typically used to interact with databases,
         * such as creating, updating, or deleting records based on the retrieved data.
         *
         * This example demonstrates returning the captured data through setCustomSaveResult
         * for front-end validation and inspection.
         *
         * To simply return a save status (e.g., "ok"), use: setCustomSaveResult("ok").
         * The front-end can then proceed with subsequent logic based on this status.
         */

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("testA", sheet.openCellByDefinedName("testA").getValue());
        jsonObject.put("testB", sheet.openCellByDefinedName("testB").getValue());

        workBook.setCustomSaveResult(jsonObject.toString());
        workBook.close();

    }

}
