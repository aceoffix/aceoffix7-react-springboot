package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.*;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/DataRegionTable")
public class DataRegionTableController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter doc = new WordDocumentWriter();
        // Open the data region
        DataRegionWriter dTable = doc.openDataRegion("ACE_table");
        // Set the editability of the data region
        dTable.setEditing(true);
        // Open the table in the data region. The 'index' in the OpenTable(index) method is the sub - index of the table in the Word document, starting from 1.
        WordTableWriter table1 = doc.openDataRegion("ACE_table").openTable(1);
        // Assign values to the header cells of the table
        table1.openCellRC(1, 2).setValue("Product 1");
        table1.openCellRC(1, 3).setValue("Product 2");
        table1.openCellRC(2, 1).setValue("Department A");
        table1.openCellRC(3, 1).setValue("Department B");
        table1.openCellRC(4, 1).setValue("Department C");

        aceCtrl.setWriter(doc);
        aceCtrl.webOpen("/doc/DataRegionTable/test.docx", OpenModeType.docSubmitForm, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) throws IOException {
        WordDocumentReader doc = new WordDocumentReader(request, response);
         // Open the data region with the specified name
        DataRegionReader dataReg = doc.openDataRegion("ACE_table");
        // Open the first table in the data region
        WordTableReader table = dataReg.openTable(1);
        /*
         *
         * In actual development, generally, after obtaining the value of the data region, it is used to interact with the database.
         * For example, new records can be added, existing records can be updated, or records can be deleted in the database based on the obtained data.
         * Here, in order to show the obtained data content to the user, the value of the obtained data region is returned to the front - end page through setCustomSaveResult for the user to check the execution result.
         * If you only want to return a save result, you can use something like: setCustomSaveResult("ok"). The front - end can perform the next logical processing based on this save result.
        */
        StringBuilder dataStr = new StringBuilder();
        for (int i = 1; i <= table.getRowsCount(); i++) {
            for (int j = 1; j <= table.getColumnsCount(); j++) {
                dataStr.append("The value of cell (" + i + "," + j + ") is: " + table.openCellRC(i, j).getValue() + "\r\n");
            }
        }

        // Return data to the front - end page through CustomSaveResult
        doc.setCustomSaveResult(dataStr.toString());
        // This is necessary and should be placed on the last line
        doc.close();

    }

}
