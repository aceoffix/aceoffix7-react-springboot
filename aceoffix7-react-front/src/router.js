import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

import DivMessage_Word from './pages/DivMessage/Word';
import ApplicationForm_Word from './pages/ApplicationForm/Word';
import FileMakerToPDF_Default from './pages/FileMakerToPDF/Default';
import FormToDataRegions_Word from './pages/FormToDataRegions/Word';

import Word from './pages/SimpleWord/Word'; 
import Word1 from './pages/SimpleWord/Word1';
import Excel from './pages/SimpleExcel/Excel';
import PPT from './pages/SimplePPT/PPT';
import TitleText_Word from './pages/TitleText/Word';
import ControlBars_OpenWord from './pages/ControlBars/OpenWord';
import OpenWord_OpenWord from './pages/OpenWord/OpenWord';
import SaveReturnValue_Word from './pages/SaveReturnValue/Word';
import SendParameters_Word from './pages/SendParameters/Word';
import DataRegionFill_Word from './pages/DataRegionFill/Word';
import ExcelFill_Excel from './pages/ExcelFill/Excel';
import SubmitWord_Word from './pages/SubmitWord/Word';
import SubmitExcel_Excel from './pages/SubmitExcel/Excel';
import CommandCtrl_Word from './pages/CommandCtrl/Word';
import WordSetTable_Word from './pages/WordSetTable/Word';
import WordDataTag2_Word from './pages/WordDataTag2/Word';
import CustomToolButton_Word from './pages/CustomToolButton/Word';
import AfterDocOpened_Word from './pages/AfterDocOpened/Word';
import JsControlBars_Word from './pages/JsControlBars/Word';
import ExcelTable_Excel from './pages/ExcelTable/Excel';
import SaveAsHTML_Word from './pages/SaveAsHTML/Word';
import BeforeAndAfterSave_Word from './pages/BeforeAndAfterSave/Word';
import SaveDataAndFile_Word from './pages/SaveDataAndFile/Word';
import WordDisableRight_Word from './pages/WordDisableRight/Word';
import ExcelDisableRight_Excel from './pages/ExcelDisableRight/Excel';
import RevisionOnly_Word from './pages/RevisionOnly/Word';
import CommentOnly_Word from './pages/CommentOnly/Word';
import CallParentFunction_Index from './pages/CallParentFunction/Index';
import CallParentFunction_Word from './pages/CallParentFunction/Word';
import GetParentParamValue_Word from './pages/GetParentParamValue/Word';
import SwitchFile_Word from './pages/SwitchFile/Word';

import ReadOnly_OpenWord from './pages/ReadOnly/OpenWord';
import DataBase_Word from './pages/DataBase/Word';
import SaveAsPDF_Word from './pages/SaveAsPDF/Word';
import WordResWord_Word from './pages/WordResWord/Word';
import WordResImage_Word from './pages/WordResImage/Word';
import WordResExcel_Word from './pages/WordResExcel/Word';
import AddWaterMark_Word from './pages/AddWaterMark/Word';
import WordDataTag_Word from './pages/WordDataTag/Word';
import DataRegionCreate_Word from './pages/DataRegionCreate/Word';
import FileMakerSingle_Default from './pages/FileMakerSingle/Default';
import WordTable_Word from './pages/WordTable/Word';
import DataRegionTable_Word from './pages/DataRegionTable/Word';
import DataRegionText_Word from './pages/DataRegionText/Word';
import SetDrByUserWord_Index from './pages/SetDrByUserWord/Index';
import SetDrByUserWord_Word from './pages/SetDrByUserWord/Word';
import SetDrByUserWord2_Index from './pages/SetDrByUserWord2/Index';
import SetDrByUserWord2_Word from './pages/SetDrByUserWord2/Word';
import MergeWordCell_Word from './pages/MergeWordCell/Word';
import MergeExcelCell_Excel from './pages/MergeExcelCell/Excel';
import SetXlsTableByUser_Index from './pages/SetXlsTableByUser/Index';
import SetXlsTableByUser_Excel from './pages/SetXlsTableByUser/Excel';
import SetExcelCellBorder_Excel from './pages/SetExcelCellBorder/Excel';
import SetExcelCellText_Excel from './pages/SetExcelCellText/Excel';
import DataRegionFill2_Word from './pages/DataRegionFill2/Word';
import ExcelFill2_Excel from './pages/ExcelFill2/Excel';
import DataRegionEdit_Word from './pages/DataRegionEdit/Word';
import DataTagEdit_Word from './pages/DataTagEdit/Word';
import FileMakerPDF_Default from './pages/FileMakerPDF/Default';
import DefinedNameCell_Excel from './pages/DefinedNameCell/Excel';
import DefinedNameTable_Index from './pages/DefinedNameTable/Index';
import DefinedNameTable_Excel from './pages/DefinedNameTable/Excel';
import DefinedNameTable_Excel2 from './pages/DefinedNameTable/Excel2';
import DefinedNameTable_Excel4 from './pages/DefinedNameTable/Excel4';
import DefinedNameTable_Excel5 from './pages/DefinedNameTable/Excel5';
import DefinedNameTable_Excel6 from './pages/DefinedNameTable/Excel6';
import WordCompare_Word from './pages/WordCompare/Word';
import WordTextBox_Word from './pages/WordTextBox/Word';
import SplitWord_Word from './pages/SplitWord/Word';
import CommentsList_Word from './pages/CommentsList/Word';
import RevisionsList_Word from './pages/RevisionsList/Word';
import WordCreateTable_Word from './pages/WordCreateTable/Word';
import SaveFirstPageAsImg_Word from './pages/SaveFirstPageAsImg/Word';
import ExcelAdjustRC_Excel from './pages/ExcelAdjustRC/Excel';
import WordDeleteRow_Word from './pages/WordDeleteRow/Word';
import InsertPageBreak2_Word from './pages/InsertPageBreak2/Word';
import ExcelInsertImage_Excel from './pages/ExcelInsertImage/Excel';
import WordTableSetImg_Word from './pages/WordTableSetImg/Word';
import WordTableBorder_Word from './pages/WordTableBorder/Word';
import ExtractImage_Word from './pages/ExtractImage/Word';
import DisableCopyOut_Word from './pages/DisableCopyOut/Word';
import InsertImageSetSize_Word from './pages/InsertImageSetSize/Word';
import FileMakerModify_Default from './pages/FileMakerModify/Default';

import FileMaker_Default from './pages/FileMaker/Default';
import ExaminationPaper_Index from './pages/ExaminationPaper/Index';
import ExaminationPaper_Compose from './pages/ExaminationPaper/Compose';
import ExaminationPaper_Word from './pages/ExaminationPaper/Word';
import WordParagraph_Word from './pages/WordParagraph/Word';
import DrawExcel_Excel from './pages/DrawExcel/Excel';
import WordSalaryBill_Index from './pages/WordSalaryBill/Index';
import WordSalaryBill_Edit from './pages/WordSalaryBill/Edit';
import WordSalaryBill_View from './pages/WordSalaryBill/View';
import WordSalaryBill_Compose from './pages/WordSalaryBill/Compose';
import FileMakerConvertPDFs_Default from './pages/FileMakerConvertPDFs/Default';
import FileMakerConvertPDFs_Edit from './pages/FileMakerConvertPDFs/Edit';
import FileMakerPrintFiles_Default from './pages/FileMakerPrintFiles/Default';
import FileMakerPrintFiles_Preview from './pages/FileMakerPrintFiles/Preview';
import SaveAndSearch_Index from './pages/SaveAndSearch/Index';
import SaveAndSearch_Word from './pages/SaveAndSearch/Word';
import ConcurrencyCtrl_Index from './pages/ConcurrencyCtrl/Index'; 
import ConcurrencyCtrl_List from './pages/ConcurrencyCtrl/list'; 
import ConcurrencyCtrl_LogingForm from './pages/ConcurrencyCtrl/loginForm'; 
import ConcurrencyCtrl_Word1 from './pages/ConcurrencyCtrl/Word1';
import ConcurrencyCtrl_Word2 from './pages/ConcurrencyCtrl/Word2';


import WordAddBKMK_Word from './pages/WordAddBKMK/Word';
import WordLocateBKMK_Word from './pages/WordLocateBKMK/Word';
import WordGetSelection_Word from './pages/WordGetSelection/Word';
import InsertImgForJs_Word from './pages/InsertImgForJs/Word';
import JsInsertWaterMark_Word from './pages/JsInsertWaterMark/Word';




import React from 'react';

export default function IRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/DivMessage/Word" element={<DivMessage_Word />} />
                <Route path="/ApplicationForm/Word" element={<ApplicationForm_Word />} />
                <Route path="/FormToDataRegions/Word" element={<FormToDataRegions_Word />} />
                <Route path="/FileMakerToPDF/Default" element={<FileMakerToPDF_Default />} />

                <Route path="/SimpleWord/Word" element={<Word />} />
                <Route path="/SimpleWord/Word1" element={<Word1 />} />
                <Route path="/SimpleExcel/Excel" element={<Excel />} />
                <Route path="/SimplePPT/PPT" element={<PPT />} />
                <Route path="/TitleText/Word" element={<TitleText_Word />} />
                <Route path="/ControlBars/OpenWord" element={<ControlBars_OpenWord />} />
                <Route path="/OpenWord/OpenWord" element={<OpenWord_OpenWord />} />
                <Route path="/SaveReturnValue/Word" element={<SaveReturnValue_Word />} />
                <Route path="/SendParameters/Word" element={<SendParameters_Word />} />
                <Route path="/DataRegionFill/Word" element={<DataRegionFill_Word />} />
                <Route path="/ExcelFill/Excel" element={<ExcelFill_Excel />} />
                <Route path="/SubmitWord/Word" element={<SubmitWord_Word />} />
                <Route path="/SubmitExcel/Excel" element={<SubmitExcel_Excel />} />
                <Route path="/CommandCtrl/Word" element={<CommandCtrl_Word />} />
                <Route path="/WordSetTable/Word" element={<WordSetTable_Word />} />
                <Route path="/WordDataTag2/Word" element={<WordDataTag2_Word />} />
                <Route path="/CustomToolButton/Word" element={<CustomToolButton_Word />} />
                <Route path="/AfterDocOpened/Word" element={<AfterDocOpened_Word />} />
                <Route path="/JsControlBars/Word" element={<JsControlBars_Word />} />
                <Route path="/ExcelTable/Excel" element={<ExcelTable_Excel />} />
                <Route path="/SaveAsHTML/Word" element={<SaveAsHTML_Word  />} />
                <Route path="/BeforeAndAfterSave/Word" element={<BeforeAndAfterSave_Word />} />
                <Route path="/SaveDataAndFile/Word" element={<SaveDataAndFile_Word />} />
                <Route path="/WordDisableRight/Word" element={<WordDisableRight_Word />} />
                <Route path="/ExcelDisableRight/Excel" element={<ExcelDisableRight_Excel />} />
                <Route path="/RevisionOnly/Word" element={<RevisionOnly_Word />} />
                <Route path="/CommentOnly/Word" element={<CommentOnly_Word />} />
                <Route path="/CallParentFunction/Index" element={<CallParentFunction_Index />} />
                <Route path="/CallParentFunction/Word" element={<CallParentFunction_Word />} />
                <Route path="/GetParentParamValue/Word" element={<GetParentParamValue_Word />} />
                <Route path="/SwitchFile/Word" element={<SwitchFile_Word />} />

                <Route path="/ReadOnly/OpenWord" element={<ReadOnly_OpenWord  />} />
                <Route path="/DataBase/Word" element={<DataBase_Word />} />
                <Route path="/SaveAsPDF/Word" element={<SaveAsPDF_Word />} />
                <Route path="/WordResWord/Word" element={<WordResWord_Word />} />
                <Route path="/WordResImage/Word" element={<WordResImage_Word />} />
                <Route path="/WordResExcel/Word" element={<WordResExcel_Word />} />
                <Route path="/AddWaterMark/Word" element={<AddWaterMark_Word />} />
                <Route path="/WordDataTag/Word" element={<WordDataTag_Word />} />
                <Route path="/DataRegionCreate/Word" element={<DataRegionCreate_Word />} />
                <Route path="/FileMakerSingle/Default" element={<FileMakerSingle_Default />} />
                <Route path="/WordTable/Word" element={<WordTable_Word />} />
                <Route path="/DataRegionTable/Word" element={<DataRegionTable_Word />} />
                <Route path="/DataRegionText/Word" element={<DataRegionText_Word />} />
                <Route path="/SetDrByUserWord/Index" element={<SetDrByUserWord_Index />} />
                <Route path="/SetDrByUserWord/Word" element={<SetDrByUserWord_Word />} />
                <Route path="/SetDrByUserWord2/Index" element={<SetDrByUserWord2_Index />} />
                <Route path="/SetDrByUserWord2/Word" element={<SetDrByUserWord2_Word />} />
                <Route path="/MergeWordCell/Word" element={<MergeWordCell_Word />} />
                <Route path="/SetXlsTableByUser/Index" element={<SetXlsTableByUser_Index />} />
                <Route path="/SetXlsTableByUser/Excel" element={<SetXlsTableByUser_Excel />} />
                <Route path="/MergeExcelCell/Excel" element={<MergeExcelCell_Excel />} />
                <Route path="/SetExcelCellBorder/Excel" element={<SetExcelCellBorder_Excel />} />
                <Route path="/SetExcelCellText/Excel" element={<SetExcelCellText_Excel />} />
                <Route path="/DataRegionFill2/Word" element={<DataRegionFill2_Word />} />
                <Route path="/ExcelFill2/Excel" element={<ExcelFill2_Excel />} />
                <Route path="/DataRegionEdit/Word" element={<DataRegionEdit_Word />} />
                <Route path="/DataTagEdit/Word" element={<DataTagEdit_Word />} />
                <Route path="/FileMakerPDF/Default" element={<FileMakerPDF_Default />} />
                <Route path="/DefinedNameCell/Excel" element={<DefinedNameCell_Excel />} />
                <Route path="/DefinedNameTable/Index" element={<DefinedNameTable_Index />} />
                <Route path="/DefinedNameTable/Excel" element={<DefinedNameTable_Excel />} />
                <Route path="/DefinedNameTable/Excel2" element={<DefinedNameTable_Excel2 />} />
                <Route path="/DefinedNameTable/Excel4" element={<DefinedNameTable_Excel4 />} />
                <Route path="/DefinedNameTable/Excel5" element={<DefinedNameTable_Excel5 />} />
                <Route path="/DefinedNameTable/Excel6" element={<DefinedNameTable_Excel6 />} />
                <Route path="/WordCompare/Word" element={<WordCompare_Word />} />
                <Route path="/WordTextBox/Word" element={<WordTextBox_Word />} />
                <Route path="/SplitWord/Word" element={<SplitWord_Word />} />
                <Route path="/CommentsList/Word" element={<CommentsList_Word />} />
                <Route path="/RevisionsList/Word" element={<RevisionsList_Word />} />
                <Route path="/WordCreateTable/Word" element={<WordCreateTable_Word />} />
                <Route path="/SaveFirstPageAsImg/Word" element={<SaveFirstPageAsImg_Word />} />
                <Route path="/ExcelAdjustRC/Excel" element={<ExcelAdjustRC_Excel />} />
                <Route path="/WordDeleteRow/Word" element={<WordDeleteRow_Word />} />
                <Route path="/InsertPageBreak2/Word" element={<InsertPageBreak2_Word />} />
                <Route path="/ExcelInsertImage/Excel" element={<ExcelInsertImage_Excel />} />
                <Route path="/WordTableSetImg/Word" element={<WordTableSetImg_Word />} />
                <Route path="/WordTableBorder/Word" element={<WordTableBorder_Word />} />
                <Route path="/ExtractImage/Word" element={<ExtractImage_Word />} />
                <Route path="/DisableCopyOut/Word" element={<DisableCopyOut_Word />} />
                <Route path="/InsertImageSetSize/Word" element={<InsertImageSetSize_Word />} />
                <Route path="/FileMakerModify/Default" element={<FileMakerModify_Default />} />

                <Route path="/FileMaker/Default" element={<FileMaker_Default />} />
                <Route path="/ExaminationPaper/Index" element={<ExaminationPaper_Index />} />
                <Route path="/ExaminationPaper/Compose" element={<ExaminationPaper_Compose />} />
                <Route path="/ExaminationPaper/Word" element={<ExaminationPaper_Word />} />
                <Route path="/WordParagraph/Word" element={<WordParagraph_Word />} />
                <Route path="/DrawExcel/Excel" element={<DrawExcel_Excel />} />
                <Route path="/WordSalaryBill/Index" element={<WordSalaryBill_Index />} />
                <Route path="/WordSalaryBill/Edit" element={<WordSalaryBill_Edit />} />
                <Route path="/WordSalaryBill/View" element={<WordSalaryBill_View />} />
                <Route path="/WordSalaryBill/Compose" element={<WordSalaryBill_Compose />} />
                <Route path="/FileMakerConvertPDFs/Default" element={<FileMakerConvertPDFs_Default />} />
                <Route path="/FileMakerConvertPDFs/Edit" element={<FileMakerConvertPDFs_Edit />} />
                <Route path="/FileMakerPrintFiles/Default" element={<FileMakerPrintFiles_Default />} />
                <Route path="/FileMakerPrintFiles/Preview" element={<FileMakerPrintFiles_Preview/>} />
                <Route path="/SaveAndSearch/Index" element={<SaveAndSearch_Index/>} />
                <Route path="/SaveAndSearch/Word" element={<SaveAndSearch_Word/>} />
                <Route path="/ConcurrencyCtrl" element={<ConcurrencyCtrl_Index />}>
                <Route index element={<ConcurrencyCtrl_LogingForm />} />
                <Route path="list/:username" element={<ConcurrencyCtrl_List />} />
                </Route>
                <Route path="/ConcurrencyCtrl/Word1" element={<ConcurrencyCtrl_Word1/>} />
                <Route path="/ConcurrencyCtrl/Word2" element={<ConcurrencyCtrl_Word2/>} />

                <Route path="/WordAddBKMK/Word" element={<WordAddBKMK_Word/>} />
                <Route path="/WordLocateBKMK/Word" element={<WordLocateBKMK_Word/>} />
                <Route path="/WordGetSelection/Word" element={<WordGetSelection_Word/>} />
                <Route path="/InsertImgForJs/Word" element={<InsertImgForJs_Word/>} />
                <Route path="/JsInsertWaterMark/Word" element={<JsInsertWaterMark_Word/>} />

                
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>
        </Router>
    );
}