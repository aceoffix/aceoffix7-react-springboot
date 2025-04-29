package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix.word.WordTableWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/WordTable")
public class WordTableController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter doc = new WordDocumentWriter();
        WordTableWriter table1 = doc.openDataRegion("ACE_T001").openTable(1);
        table1.openCellRC(1, 1).setValue("Aceoffix Component");
        int oldRowCount = 3; // The original number of rows in the table.
        int dataRowCount = 5; // The number of rows to be filled with data.

        // Expand the table.
        for (int j = 0; j < dataRowCount - oldRowCount; j++) {
            // Insert a new row after the last cell in the second row.
            table1.insertRowAfter(table1.openCellRC(2, 5));
        }

        int i = 1;
        while (i <= dataRowCount) {
            table1.openCellRC(i, 2).setValue("AA" + i);
            table1.openCellRC(i, 3).setValue("BB" + i);
            table1.openCellRC(i, 4).setValue("CC" + i);
            table1.openCellRC(i, 5).setValue("DD" + i);
            i++;
        }

        aceCtrl.setWriter(doc);
        aceCtrl.webOpen("/doc/WordTable/test_table.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
