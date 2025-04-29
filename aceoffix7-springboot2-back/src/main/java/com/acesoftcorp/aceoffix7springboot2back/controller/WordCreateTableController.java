package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/WordCreateTable")
public class WordCreateTableController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter doc = new WordDocumentWriter();

        // Create a table with 3 rows and 5 columns in the data region "ACE_table1"
        WordTableWriter table1 = doc.openDataRegion("ACE_Table1").createTable(3, 5, WdAutoFitBehavior.wdAutoFitWindow);

        // Merge cells in the first column from row 1 to row 3
        table1.openCellRC(1, 1).mergeTo(3, 1);
        table1.openCellRC(1, 1).setValue("Merged Cell");

        // Assign values to the remaining cells in table1
        for (int i = 1; i < 4; i++) {
            table1.openCellRC(i, 2).setValue("AA" + i);
            table1.openCellRC(i, 3).setValue("BB" + i);
            table1.openCellRC(i, 4).setValue("CC" + i);
            table1.openCellRC(i, 5).setValue("DD" + i);
        }

        // Dynamically create a new data region "ACE_table2" after "ACE_table1" and create a new table with 5 rows and 5 columns
        DataRegionWriter drTable2 = doc.createDataRegion("ACE_Table2", DataRegionInsertType.After, "ACE_table1");
        WordTableWriter table2 = drTable2.createTable(5, 5, WdAutoFitBehavior.wdAutoFitWindow);

        // Assign values to the cells in table2
        for (int i = 1; i < 6; i++) {
            table2.openCellRC(i, 1).setValue("AA" + i);
            table2.openCellRC(i, 2).setValue("BB" + i);
            table2.openCellRC(i, 3).setValue("CC" + i);
            table2.openCellRC(i, 4).setValue("DD" + i);
            table2.openCellRC(i, 5).setValue("EE" + i);
        }

        // Set the document writer and open the document for editing
        aceCtrl.setWriter(doc);

        aceCtrl.webOpen("/doc/WordCreateTable/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
