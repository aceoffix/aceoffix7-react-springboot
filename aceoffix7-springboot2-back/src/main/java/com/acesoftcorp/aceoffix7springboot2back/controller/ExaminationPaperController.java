package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix.word.DataRegionInsertType;
import com.acesoftcorp.aceoffix.word.DataRegionWriter;
import com.acesoftcorp.aceoffix.word.WordDocumentWriter;
import com.acesoftcorp.aceoffix7springboot2back.po.Questions;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.OutputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/ExaminationPaper/")
public class ExaminationPaperController {

    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "index")
    public List<Questions> showindex(HttpServletRequest request) throws SQLException, FileNotFoundException, ClassNotFoundException {
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/ExaminationPaper.db";
        Connection conn = DriverManager.getConnection(strUrl);
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("Select * from stream");
        List<Questions> questionsList = new ArrayList<Questions>();
        while (rs.next()) {
            Questions qs = new Questions();
            qs.setId(rs.getInt("ID"));
            qs.setWord(rs.getString("Word"));
            questionsList.add(qs);
        }
        rs.close();
        stmt.close();
        conn.close();
        return questionsList;
    }


    @RequestMapping(value = "word")
    public String showWord(HttpServletRequest request, String id) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);

        aceCtrl.webOpen("/ExaminationPaper/openfile?id=" + id, OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "compose")
    public String showCompose2(HttpServletRequest request, String idlist) {
        // Parse comma-separated ids and generate file insertion operations
        // Process idlist as array for document embedding
        String[] ids = idlist.split(",");
        String temp = "ACE_begin";//DataRegionName
        int num = 1; // Question number
        WordDocumentWriter doc = new WordDocumentWriter();
        for (int i = 0; i < ids.length; i++) {

            DataRegionWriter dataNum = doc.createDataRegion("ACE_" + num,
                    DataRegionInsertType.After, temp);
            dataNum.setValue(num + ".\t");
            DataRegionWriter dataRegion = doc.createDataRegion("ACE_begin"
                    + (i + 1), DataRegionInsertType.After, "ACE_" + num);
            dataRegion.setValue("[word]/ExaminationPaper/openfile?id=" + ids[i]
                    + "[/word]");
            temp = "ACE_begin" + (i + 1);
            num++;
        }

        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.setWriter(doc);


        aceCtrl.webOpen("/doc/ExaminationPaper/test.docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "openfile")
    public void openWord(HttpServletRequest request, HttpServletResponse response, int id) throws Exception {
        String err = "";
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/ExaminationPaper.db";
        Connection conn = DriverManager.getConnection(strUrl);
        Statement stmt = conn.createStatement();
        String strSql = "select * from stream where id =" + id;
        ResultSet rs = stmt.executeQuery(strSql);
        if (rs.next()) {
            byte[] imageBytes = rs.getBytes("Word");
            int fileSize = imageBytes.length;

            response.reset();
            response.setContentType("application/msword"); // application/x-excel, application/ms-powerpoint, application/pdf
            response.setHeader("Content-Disposition", "attachment; filename=down.docx");
            response.setContentLength(fileSize);
            OutputStream outputStream = response.getOutputStream();
            outputStream.write(imageBytes);
            outputStream.flush();
            outputStream.close();
            outputStream = null;

        } else {
            throw new Exception("File information not found");
        }
        rs.close();
        stmt.close();
        conn.close();
    }


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response, String id) throws Exception {
        FileSaver fs = new FileSaver(request, response);
        String err = "";
        if (request.getParameter("id") != null
                && request.getParameter("id").trim().length() > 0) {
            Class.forName("org.sqlite.JDBC");
            String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/ExaminationPaper.db";
            Connection conn = DriverManager.getConnection(strUrl);
            String sql = "UPDATE  Stream SET Word=?  where ID=" + id;
            PreparedStatement pstmt = null;
            pstmt = conn.prepareStatement(sql);
            pstmt.setBytes(1, fs.getFileBytes());
            //pstmt.setBinaryStream(1,fs.getFileStream(),fs.getFileSize());
            pstmt.executeUpdate();
            pstmt.close();
            conn.close();
        } else {
            err = "File id not found,Save failed";
            throw new Exception(err);
        }
        fs.close();
    }

}

