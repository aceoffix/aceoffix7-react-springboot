package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.sql.*;


@RestController
@RequestMapping(value = "/DataBase")
public class DataBaseController {

    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public String showWord(HttpServletRequest request, int file_id) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        
        aceCtrl.webOpen("/DataBase/Openstream?file_id=" + file_id, OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "Openstream")
    public void Openstream(HttpServletRequest request, HttpServletResponse response, int file_id) throws SQLException, ClassNotFoundException, IOException {
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/DataBase.db";
        Connection conn = DriverManager.getConnection(strUrl);
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("select * from stream where id = "
                + file_id);
        int newID = 1;
        if (rs.next()) {
            byte[] imageBytes = rs.getBytes("Word");
            int fileSize = imageBytes.length;

            response.reset();
            response.setContentType("application/msword"); // application/x-excel, application/ms-powerpoint, application/pdf
            response.setHeader("Content-Disposition",
                    "attachment; filename=down.docx");
            response.setContentLength(fileSize);

            OutputStream outputStream = response.getOutputStream();
            outputStream.write(imageBytes);

            outputStream.flush();
            outputStream.close();
            outputStream = null;
        }
        rs.close();
        conn.close();
    }


    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response, int file_id) throws ClassNotFoundException, FileNotFoundException, SQLException {
        FileSaver fs = new FileSaver(request, response);
        String err = "";
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/DataBase.db";
        Connection conn = DriverManager.getConnection(strUrl);
        String sql = "UPDATE  Stream SET Word=?  where ID=" + file_id;
        PreparedStatement pstmt = null;
        pstmt = conn.prepareStatement(sql);
        pstmt.setBytes(1, fs.getFileBytes());
        //pstmt.setBinaryStream(1, fs.getFileStream(),fs.getFileSize());
        pstmt.executeUpdate();
        pstmt.close();
        conn.close();

        fs.close();
    }

}
