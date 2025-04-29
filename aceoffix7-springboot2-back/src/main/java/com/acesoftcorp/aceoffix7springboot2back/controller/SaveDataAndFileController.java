package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentReader;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/SaveDataAndFile")
public class SaveDataAndFileController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        WordDocumentWriter wordDoc = new WordDocumentWriter();
        DataRegionWriter dataRegion1 = wordDoc.openDataRegion("PO_userName");
        dataRegion1.setEditing(true);
        DataRegionWriter dataRegion2 = wordDoc.openDataRegion("PO_deptName");
        dataRegion2.setEditing(true);
        aceCtrl.setWriter(wordDoc);
        
        aceCtrl.webOpen("/doc/SaveDataAndFile/test.docx", OpenModeType.docSubmitForm, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping("SaveFile")
    public void save(HttpServletRequest request, HttpServletResponse response) throws Exception {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "SaveDataAndFile/" + fs.getFileName());
        fs.setCustomSaveResult("ok2");
        fs.close();
    }

    @RequestMapping("SaveData")
    public void saveData(HttpServletRequest request, HttpServletResponse response) {
        WordDocumentReader doc = new WordDocumentReader(request, response);
        // Get the submitted values
        String dataUserName = doc.openDataRegion("ACE_Name").getValue();
        String dataDeptName = doc.openDataRegion("ACE_Department").getValue();
        String companyName = doc.getFormField("CompanyName");

        /**The retrieved content such as company name, employee name, and department name can be saved to the database.
         * Here, developers can connect to their own databases, for example, connect to a MySQL database.
         * String constr = "jdbc:mysql://localhost:3306/db_test?user=sa&password=123";
         * try (Connection conn = DriverManager.getConnection(constr)) {  // Database connection
         *     String sql = "UPDATE user SET userName=?, deptName=?, companyName=? WHERE userId=1";
         *     try (PreparedStatement cmd = conn.prepareStatement(sql)) {
         *         cmd.setString(1, dataUserName);
         *         cmd.setString(2, dataDeptName);
         *         cmd.setString(3, companyName);
         *         cmd.executeUpdate();
         *     }
         * } catch (SQLException e) {
         *     e.printStackTrace();
         * }
         */
        doc.setCustomSaveResult("ok1");
        doc.close();

    }


}
