package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.excel.WorkbookWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/ExcelDisableRight")
public class ExcelDisableRightController {
    @RequestMapping(value = "/Excel")
    public String showExcel(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WorkbookWriter workBoook = new WorkbookWriter();
        workBoook.setDisableSheetRightClick(true); // Disable right-click on the current worksheet
        // workBoook.setDisableSheetDoubleClick(true); // Disable double-click on the current worksheet
        // workBoook.setDisableSheetSelection(true); // Disable selection in the current worksheet
        aceCtrl.setWriter(workBoook);
        aceCtrl.webOpen("/doc/ExcelDisableRight/test.xlsx", OpenModeType.xlsNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }
}
