package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.po.SaveAndSearchDoc;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.UnsupportedEncodingException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/SaveAndSearch/")
public class SaveAndSearchController {

    
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";

    @RequestMapping(value = "index")
    public List<SaveAndSearchDoc> showindex(HttpServletRequest request) throws ClassNotFoundException, FileNotFoundException, UnsupportedEncodingException, SQLException {
        String sql = "select * from word order by ID desc";
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/SaveAndSearch.db";
        Connection conn = DriverManager.getConnection(strUrl);
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(sql);
        List<SaveAndSearchDoc> docSearchList = new ArrayList<SaveAndSearchDoc>();
        while (rs.next()) {
            SaveAndSearchDoc docSearch = new SaveAndSearchDoc();
            docSearch.setFileName(rs.getString("FileName"));
            docSearch.setContent(rs.getString("Content"));
            docSearch.setId(rs.getInt("ID"));
            docSearchList.add(docSearch);
        }
        rs.close();
        stmt.close();
        conn.close();
        return docSearchList;
    }

    @RequestMapping(value = "Word")
    public String showWord(HttpServletRequest request, String fileName) throws ClassNotFoundException, SQLException, FileNotFoundException {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.webOpen("/doc/SaveAndSearch/" + fileName + ".docx", OpenModeType.docNormalEdit, "Luna");
        return aceCtrl.getHtml();
    }

    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response, int id) throws SQLException, FileNotFoundException, ClassNotFoundException {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "SaveAndSearch/" + fs.getFileName());
        String strDocumentText = fs.getDocumentText();
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/SaveAndSearch.db";
        Connection conn = DriverManager.getConnection(strUrl);
        Statement stmt = conn.createStatement();
        String strsql = "update word set Content='" + strDocumentText + "' where id=" + id;
        stmt.executeUpdate(strsql);
        stmt.close();
        conn.close();
        fs.close();
    }
}
