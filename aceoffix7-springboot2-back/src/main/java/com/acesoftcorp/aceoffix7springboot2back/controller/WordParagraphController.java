package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;


@RestController
@RequestMapping(value = "/WordParagraph/")
public class WordParagraphController {

    @RequestMapping(value = "Word")
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wd = new WordDocumentWriter();

        DataRegionWriter title = wd.createDataRegion("title", DataRegionInsertType.After, "[home]");
        title.getFont().setBold(true);
        title.getFont().setSize(20);
        title.getFont().setName("Aharoni");
        title.getFont().setItalic(false);

        WordParagraphFormat titlePara = title.getParagraphFormat();
        titlePara.setAlignment(WdParagraphAlignment.wdAlignParagraphCenter);


        DataRegionWriter body = wd.createDataRegion("body", DataRegionInsertType.After, "title");
        body.getFont().setBold(false);
        body.getFont().setItalic(true);
        body.getFont().setSize(10);
        body.getFont().setName("Berlin Sans FB Demi");
        body.getFont().setColor(Color.RED);
        body.setValue("Aceoffix is a flexible and professional web component for Microsoft Office, with the simplified interfaces and powerful functions that make it terrific not only for online editing and saving Office documents, but also importing and exporting data from database to Office documents. Aceoffix supports many Office document formats, such as *.doc, *.docx, *.xls, *.xlsx, *.ppt, *.pptx, *.xml and *.rtf. \n");

        WordParagraphFormat bodyPara = body.getParagraphFormat();
        bodyPara.setLineSpacingRule(WdLineSpacing.wdLineSpaceAtLeast);
        bodyPara.setAlignment(WdParagraphAlignment.wdAlignParagraphLeft);
        bodyPara.setFirstLineIndent(21);

        DataRegionWriter body2 = wd.createDataRegion("body2", DataRegionInsertType.After, "body");
        body2.getFont().setBold(false);
        body2.getFont().setSize(12);
        body2.getFont().setName("Arial Rounded MT Bold");
        body2.setValue("Without installing Microsoft Office at the server side, web developers can easily embed and call Microsoft Office in web pages, just like using a Java or .Net control. Aceoffix edits the real Microsoft Office documents online without converting any formats. Intuitive examples with source code are included to speed up your development time.  In general management systems base on Browser/Server architecture, developers have to manage Word/Excel documents by downloading and uploading. With Aceoffix, you can not only online view, edit and save Office documents on web, but also access the contents of them. In addition, Aceoffix has many other powerful functions as well, like read-only control, authority control, editable region control, forced revision mode, generating formal documents and etc.\n");

        WordParagraphFormat bodyPara2 = body2.getParagraphFormat();
        bodyPara2.setLineSpacingRule(WdLineSpacing.wdLineSpace1pt5);
        bodyPara2.setAlignment(WdParagraphAlignment.wdAlignParagraphLeft);
        bodyPara2.setFirstLineIndent(21);


        DataRegionWriter body3 = wd.createDataRegion("body3", DataRegionInsertType.After, "body2");
        body3.getFont().setBold(false);
        body3.getFont().setColor(Color.ORANGE);
        body3.getFont().setSize(14);
        body3.getFont().setName("Broadway");
        body3.setValue("Aceoffix includes a group of easy-to-use components. They are the object modules that are developed based on commonly used functions of Word/Excel. These components have the complete objects hierarchies. Developer will be able to understand and handle them easily. With simple code, they can accomplish the functions of Microsoft Office that they could hardly achieve before. Developers will be able to create their own business components based on these components as well. Developers do not have to face with the complex interfaces of Microsoft Office COM automation and VBA (Visual Basic for Applications). They will be able to save their time with Aceoffix. We make it easy to call the components of Aceoffix, and we insist on continuing efforts to keep the simplest calling interfaces of Aceoffix.\n");

        WordParagraphFormat bodyPara3 = body3.getParagraphFormat();
        bodyPara3.setLineSpacingRule(WdLineSpacing.wdLineSpaceDouble);
        bodyPara3.setAlignment(WdParagraphAlignment.wdAlignParagraphLeft);
        bodyPara3.setFirstLineIndent(21);

        // Create body4 region with image
        DataRegionWriter body4 = wd.createDataRegion("body4", DataRegionInsertType.After, "body3");
        body4.setValue("[image]/doc/WordParagraph/logo.png[/image]");

        WordParagraphFormat bodyPara4 = body4.getParagraphFormat();
        bodyPara4.setAlignment(WdParagraphAlignment.wdAlignParagraphCenter);

        // Set the writer to the ACE control
        aceCtrl.setWriter(wd);
        aceCtrl.webOpen("/doc/WordParagraph/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
