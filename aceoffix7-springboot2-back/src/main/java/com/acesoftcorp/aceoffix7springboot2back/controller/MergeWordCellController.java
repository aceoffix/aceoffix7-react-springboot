package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.WdParagraphAlignment;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix.word.WordTableWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;


@RestController
@RequestMapping(value = "/MergeWordCell")
public class MergeWordCellController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter doc = new WordDocumentWriter();
        WordTableWriter table = doc.openDataRegion("Table1").openTable(1);

        table.openCellRC(1, 1).mergeTo(1, 5);
        table.openCellRC(1, 1).setValue("Aceoffix");
        table.openCellRC(1, 1).getFont().setColor(Color.RED);
        table.openCellRC(1, 1).getFont().setSize(24);
        table.openCellRC(1, 1).getFont().setName("Andalus");
        table.openCellRC(1, 1).getParagraphFormat().setAlignment(WdParagraphAlignment.wdAlignParagraphCenter);

        aceCtrl.setWriter(doc);
        aceCtrl.webOpen("/doc/MergeWordCell/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


}
