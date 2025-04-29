package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/InsertImageSetSize")
public class InsertImageSetSizeController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter worddoc = new WordDocumentWriter();
        // First, manually insert bookmarks at the positions where you want to insert Word files. The bookmarks must start with "ACE_".
        // Assign values to the DataRegion. The value should be in the format: "[image]Path to the image[/image]"
        DataRegionWriter img1 = worddoc.openDataRegion("ACE_Image1");

        //The units for the width and height attributes in an [image] tag are: inches.
        img1.setValue("[image width=100.2 height=50]/doc/InsertImageSetSize/image1.png[/image]");
        DataRegionWriter img2 = worddoc.openDataRegion("ACE_Image2");
        img2.setValue("[image width=200.2 height=200]/doc/InsertImageSetSize/image2.png[/image]");
        aceCtrl.setWriter(worddoc);

        aceCtrl.webOpen("/doc/InsertImageSetSize/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

}
