package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;


@RestController
@RequestMapping(value = "/WordTableBorder")
public class WordTableBorderController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter doc = new WordDocumentWriter();

        // Get the data region object where the table is located
        DataRegionWriter dataRegion = doc.openDataRegion("ACE_table");

        // Open the table. The index in the OpenTable(index) method represents the position of the table in the Word document, starting from 1.
        WordTableWriter table = dataRegion.openTable(1);

        // Insert an empty row below a specified cell. The parameter in the InsertRowAfter method indicates which cell to insert the row after.
        table.insertRowAfter(table.openCellRC(3, 3));

        // Assign values to the cells in the table using OpenCellRC(row, column)
        table.openCellRC(3, 1).setValue("Company A");
        table.openCellRC(3, 2).setValue("Development Department");
        table.openCellRC(3, 3).setValue("John");

        // Assign values to the newly inserted row
        table.openCellRC(4, 1).setValue("Company B");
        table.openCellRC(4, 2).setValue("Sales Department");
        table.openCellRC(4, 3).setValue("Lisa");

        // Set the height of the table rows
        table.setRowsHeight(25.5f);

        // Set the border style of the table
        WordBorder border = table.getBorder();

        // Set the type of the border
        border.setBorderType(WdBorderType.wdFullGrid); // Includes inner borders

        // Set the color of the border
        border.setLineColor(Color.red);

        // Set the line style of the border
        border.setLineStyle(WdLineStyle.wdLineStyleDot);

        // Set the thickness of the border
        border.setLineWidth(WdLineWidth.wdLineWidth150pt);

        // Set the font style for the table
        WordFont font = dataRegion.getFont();

        // Set whether the font is bold
        font.setBold(true);

        // Set the font color
        font.setColor(Color.blue);

        // Set whether the font is italicized
        font.setItalic(true);

        // Set the font name
        font.setName("Arial");
        // Set the font size
        font.setSize(12.5f);

        // Set the document writer and open the document for editing
        aceCtrl.setWriter(doc);
        aceCtrl.webOpen("/doc/WordTableBorder/test_table.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
