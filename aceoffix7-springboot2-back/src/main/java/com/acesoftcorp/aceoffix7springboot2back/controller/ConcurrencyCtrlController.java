package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.po.ConcurrencyCtrlDoc;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/ConcurrencyCtrl")
public class ConcurrencyCtrlController {
    
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";
    @RequestMapping(value = "/index")
    public List<ConcurrencyCtrlDoc> index() throws ClassNotFoundException, SQLException, FileNotFoundException {
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/ConcurrencyCtrl.db";
        Connection conn = DriverManager.getConnection(strUrl);
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("select * from doc order by id desc");
        List<ConcurrencyCtrlDoc> docConcurrencyCtrlList = new ArrayList<>();
        while (rs.next()) {
            ConcurrencyCtrlDoc concurrencyCtrlDoc = new ConcurrencyCtrlDoc();
            concurrencyCtrlDoc.setId(rs.getInt("Id"));
            concurrencyCtrlDoc.setFileName(rs.getString("FileName"));
            concurrencyCtrlDoc.setSubject(rs.getString("Subject"));
            concurrencyCtrlDoc.setEditor(rs.getString("Editor"));
            docConcurrencyCtrlList.add(concurrencyCtrlDoc);
        }
        rs.close();
        stmt.close();
        conn.close();
        return docConcurrencyCtrlList;
    }

    @RequestMapping(value = "/Word1", method = RequestMethod.POST)
    public String showWord1(HttpServletRequest request,  @RequestBody Map<String, Object> params) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.setCaption("Current User:" + params.get("userName").toString() + " | Mode: Revision Editing | Document Name:" + params.get("subject").toString());
        aceCtrl.webOpen("/doc/ConcurrencyCtrl/" + params.get("fileName").toString(), OpenModeType.docRevisionOnly,  params.get("userName").toString());
        return aceCtrl.getHtml();
    }


    @RequestMapping(value = "/Word2", method = RequestMethod.POST)
    public String showWord2(HttpServletRequest request, @RequestBody Map<String, Object> params) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.setCaption("Current User:" + params.get("userName") + " | Mode: ReadOnly View | Document Name:" + params.get("subject"));
        aceCtrl.webOpen("/doc/ConcurrencyCtrl/" + params.get("fileName"), OpenModeType.docReadOnly, params.get("userName").toString());
        return aceCtrl.getHtml();
    }
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response, String fileName) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "ConcurrencyCtrl/" + fileName);
        fs.close();
    }

    @PutMapping("/updateEditorById")
    public Integer updateEditorById(int id,String userName) throws Exception {
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/ConcurrencyCtrl.db";
        Connection conn = DriverManager.getConnection(strUrl);
        Statement stmt = conn.createStatement();
        int rs = stmt.executeUpdate("Update doc set Editor='"+ userName +"' where id="+id);;
        if (rs>0){
            System.out.println("Update Scuess!");
        }
        stmt.close();
        conn.close();
        return  rs;
    }

    @RequestMapping("/selectDocById")
    public ConcurrencyCtrlDoc selectDocById(int id) throws Exception {
        Class.forName("org.sqlite.JDBC");
        String strUrl = "jdbc:sqlite:" + ResourceUtils.getURL("classpath:").getPath() + "static/demodata/ConcurrencyCtrl.db";
        Connection conn = DriverManager.getConnection(strUrl);
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("select * from doc where id="+id);
        ConcurrencyCtrlDoc concurrencyCtrlDoc = new ConcurrencyCtrlDoc();
        while (rs.next()) {
            concurrencyCtrlDoc.setId(rs.getInt("Id"));
            concurrencyCtrlDoc.setFileName(rs.getString("FileName"));
            concurrencyCtrlDoc.setSubject(rs.getString("Subject"));
            concurrencyCtrlDoc.setEditor(rs.getString("Editor"));
        }
        rs.close();
        stmt.close();
        conn.close();
        return concurrencyCtrlDoc;
    }

}
