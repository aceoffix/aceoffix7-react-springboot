package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix.word.WordTableWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/WordSetTable")
public class WordSetTableController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wd = new WordDocumentWriter();
        DataRegionWriter dataRegion = wd.openDataRegion("ACE_Table");
        WordTableWriter table = dataRegion.openTable(1);

        table.openCellRC(3, 1).setValue("Tom");
        table.openCellRC(3, 2).setValue("201501");
        table.openCellRC(3, 3).setValue("Development");
        table.openCellRC(3, 4).setValue("John Scott");
        table.openCellRC(3, 5).setValue("$5000");

        table.insertRowAfter(table.openCellRC(3, 5));

        table.openCellRC(4, 1).setValue("Jack");
        table.openCellRC(4, 2).setValue("201502");
        table.openCellRC(4, 3).setValue("Sales");
        table.openCellRC(4, 4).setValue("Anna");
        table.openCellRC(4, 5).setValue("$5500");

        aceCtrl.setWriter(wd);
        aceCtrl.webOpen("/doc/WordSetTable/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
