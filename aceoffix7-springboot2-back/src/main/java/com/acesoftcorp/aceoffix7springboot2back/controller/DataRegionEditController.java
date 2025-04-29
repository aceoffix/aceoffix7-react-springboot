package com.acesoftcorp.aceoffix7springboot2back.controller;

import com.acesoftcorp.aceoffix.AceoffixCtrl;
import com.acesoftcorp.aceoffix.FileSaver;
import com.acesoftcorp.aceoffix.OpenModeType;
import com.acesoftcorp.aceoffix7springboot2back.po.DefineDataRegionResult;
import com.acesoftcorp.aceoffix7springboot2back.util.AjaxResult;
import com.acesoftcorp.aceoffix7springboot2back.util.DataRegionUtil;
import com.acesoftcorp.aceoffix7springboot2back.util.GetDirPathUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/DataRegionEdit")
public class DataRegionEditController {
    private final String dir = GetDirPathUtil.getDirPath() + "/static/doc/";
    @RequestMapping(value = "/Word", method = RequestMethod.POST)
    public AjaxResult<DefineDataRegionResult> openFile(HttpServletRequest request) {
        AceoffixCtrl aceCtrl = new AceoffixCtrl(request);
        aceCtrl.webOpen("/doc/DataRegionEdit/test.docx", OpenModeType.docNormalEdit, "Luna");

        DataRegionUtil.clearDataRegionList();
        DataRegionUtil.addDefineDataRegion("ACE_contract_number", "[contract number]");
        DataRegionUtil.addDefineDataRegion("ACE_purchasers_name", "[Purchasers full name]");
        DataRegionUtil.addDefineDataRegion("ACE_purchasers_email", "[Purchasers email]");
        DataRegionUtil.addDefineDataRegion("ACE_purchasers_address", "[Purchasers address]");
        DataRegionUtil.addDefineDataRegion("ACE_suppliers_name", "[Suppliers full name]");
        DataRegionUtil.addDefineDataRegion("ACE_suppliers_email", "[Suppliers email]");
        DataRegionUtil.addDefineDataRegion("ACE_suppliers_address", "[Suppliers address]");

        DefineDataRegionResult defineDataRegionResult = new DefineDataRegionResult();
        defineDataRegionResult.setDataRegions(DataRegionUtil.getDataRegionList());
        defineDataRegionResult.setAceHtml(aceCtrl.getHtml());

        return AjaxResult.success(defineDataRegionResult);
    }

    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(HttpServletRequest request, HttpServletResponse response) {
        FileSaver fs = new FileSaver(request, response);
        fs.saveToFile(dir + "DataRegionEdit/" + fs.getFileName());
        fs.close();
    }

}
