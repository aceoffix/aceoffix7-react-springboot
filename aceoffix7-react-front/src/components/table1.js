/* eslint-disable no-undef */
import React from 'react';
import { AceBrowser } from 'js-aceoffix';

const Table1Component = () => {
    /**
     * 1.Basic Features table
     */
    const handleClick = (url, size, param) => {
        AceBrowser.openWindow(url, size, param);
    };
    
    const tableData = [
        {
            id: 1,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                   1.1 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('/SimpleWord/Word', 'width=1200px;height=900px;', '{"id":1,"file_name":"test.docx"}'); 
                        }}
                    >
                        The simplest way to open and save Word files online (using URL addresses)
                    </a>
                    <p>
                        Demonstrate how Aceoffix enables the most basic function of opening and saving Word files on the server online. This is also the simplest example of integrating Users who are new to the Aceoffix product can refer to this example to integrate Aceoffix into their own projects.
                    </p>
                </>
            ),
            folder: '/SimpleWord'
        },
        {
            id: 2,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.2 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('/SimpleWord/Word1', 'fullscreen=yes;', '{"id":1,"file_name":"test.docx"}'); 
                        }}
                    >
                        Open Office files using disk paths (taking Word files as an example)
                    </a>
                    <p>
                        The simplest example of integrating Aceoffix, but it uses the server disk path method. The advantages of this method are as follows: 1. It supports non - English paths. 2. Files can be saved in any disk folder on the server.
                        <span style={{ color: 'red' }}>(This example demonstrates opening a file in fullscreen window mode.)</span>
                    </p>
                </>
            ),
            folder: '/SimpleWord'
        },
        {
            id: 3,
            typeImg: '/assets/images/office-2.png',
            functionExample: (
                <>
                    1.3 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('/SimpleExcel/Excel', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        The simplest way to open and save Excel files online
                    </a>
                    <p>
                        Demonstrate the effect of opening and saving Excel files online. The code is almost exactly the same as that for opening and saving Word files above, except for the second parameter of the WebOpen method. The second parameter of the WebOpen method needs to be consistent with the file format of the actual Office document to be opened.
                    </p>
                </>
            ),
            folder: '/SimpleExcel'
        },
        {
            id: 4,
            typeImg: '/assets/images/office-3.png',
            functionExample: (
                <>
                    1.4 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('/SimplePPT/PPT', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        The simplest way to open and save PowerPoint files online
                    </a>
                    <p>
                        Demonstrate the effect of opening and saving PowerPoint files online. The code is almost exactly the same as that for opening and saving Word files above, except for the second parameter of the WebOpen method. The second parameter of the WebOpen method needs to be consistent with the file format of the actual Office document to be opened.
                    </p>
                </>
            ),
            folder: '/SimplePPT'
        },
        {
            id: 5,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.5 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('/TitleText/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Modify Title Bar Text Content
                    </a>
                    <p>
                        The text content of the title bar can be modified by assigning a value to the Caption property. If no value is assigned to Caption, the default text displayed in the title bar is:"Aceoffix".
                    </p>
                </>
            ),
            folder: '/TitleText'
        },
        {
            id: 6,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.6  <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('/ControlBars/OpenWord', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Hide Title Bar, Custom Toolbars, and Office Toolbars (Word as an Example)
                    </a>
                    <p>
                        Demonstrates how to hide the title bar, custom toolbars, and Office toolbars. Each bar can be individually controlled for hiding.
                    </p>
                </>
            ),
            folder: '/ControlBars'
        },
        {
            id: 7,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.7 
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('OpenWord/OpenWord', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        The Simplest Way to Open Office Files in Read - Only Mode (Take Word as an Example)
                    </a>
                    <p>
                        To open an Office file in read - only mode, you only need to modify the second parameter of WebOpen. Aceoffix provides docReadOnly, xlsReadOnly, and pptReadOnly modes for Word, Excel, and PPT respectively.
                    </p>
                </>
            ),
            folder: '/OpenWord'
        },
        {
            id: 8,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.9 
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('/SaveReturnValue/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Return a Developer - defined Save Result Value to the Front - end Page after Document Saving (Take Word as an Example)
                    </a>
                    <p>
                        Set the FileSaver.CustomSaveResult property through the background code to return a user - defined value to the Aceoffix object on the front - end page. This meets the needs of some developers to return an ID or other save results to the front - end page.
                    </p>
                </>
            ),
            folder: '/SaveReturnValue'
        },
        {
            id: 9,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.10  <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('SendParameters/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Pass Parameters to the Save Page (the Page Pointed to by the SaveFilePage Property)
                    </a>
                    <p>
                        This example demonstrates three ways for Aceoffix to pass parameters to the save page: (1) Pass parameters through the '?' in the URL of the save page; (2) Pass parameters to the save page through an input hidden field; (3) Pass parameters to the save page through Form controls (Form controls here include input boxes, dropdown boxes, radio boxes, checkboxes, TextArea and other types of controls).
                    </p>
                </>
            ),
            folder: '/SendParameters'
        },
        {
            id: 10,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.11<a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('DataRegionFill/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        A Simple Example of Assigning Values to Data Regions in a Word Document
                    </a>
                    <p>
                        This example is the simplest one for assigning values to data regions in a Word document. Manually set some DataRegions in the Word document in advance. Aceoffix can be used to dynamically fill content at the marked positions in the document.
                    </p>
                </>
            ),
            folder: '/DataRegionFill'
        },
        {
            id: 11,
            typeImg: '/assets/images/office-2.png',
            functionExample: (
                <>
                    1.12 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('ExcelFill/Excel', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        A Simple Example of Assigning Values to an Excel Table
                    </a>
                    <p>
                        This example is the simplest one for assigning values to Excel cells.
                    </p>
                </>
            ),
            folder: '/ExcelFill'
        },
        {
            id: 12,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.13 
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('SubmitWord/Word', 'width=1200px;height=900px;',''); 
                        }}
                    > 
                        The simplest way to submit user input in a Word document
                    </a>
                    <p>
                        Demonstrates the effect of using the WordReader object in Aceoffix to obtain data from a Word document. This example only shows the most basic functionality. For more detailed features, please refer to the "Comprehensive Demo" example.
                    </p>
                </>
            ),
            folder: '/SubmitWord'
        },
        {
            id: 13,
            typeImg: '/assets/images/office-2.png',
            functionExample: (
                <>
                    1.14
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('SubmitExcel/Excel', 'width=1200px;height=900px;',''); 
                        }}
                    >  
                        The simplest way to submit user input in an Excel document
                    </a>
                    <p>
                        Demonstrates the effect of using the ExcelReader object in Aceoffix to obtain cell data from an Excel document. This example only shows the most basic functionality. For more detailed features, please refer to the "Comprehensive Demo" example.
                    </p>
                </>
            ),
            folder: '/SubmitExcel'
        },
        {
            id: 16,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.16 
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('CommandCtrl/Word', 'width=1200px;height=900px;',''); 
                        }}
                    > 
                        Control the save, save - as, and print functions (taking Word as an example)
                    </a>
                    <p>Demonstrates how to disable the save, save - as, and print functions in Office respectively.</p>
                </>
            ),
            folder: '/CommandCtrl'
        },
        {
            id: 17,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.17
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('WordSetTable/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >  
                        A simple example of assigning values to a table in a Word document
                    </a>
                    <p>Demonstrates the operations of Aceoffix on a table in a Word document, including assigning values to cells and dynamically adding rows.</p>
                </>
            ),
            folder: '/WordSetTable'
        },
        {
            id: 18,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.18 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('WordDataTag2/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Use data tags (DataTag) to fill text data into a Word file
                    </a>
                    <p>Assign values to data tags (DataTag) in a Word template. For the requirement of having the same data in multiple positions in the template, data tags can be used to mark multiple positions that need to be filled with the same data, and then program the data tags to fill the template and generate a file.</p>
                </>
            ),
            folder: '/WordDataTag2'
        },
        {
            id: 19,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.19 
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('CustomToolButton/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Add a button to the Aceoffix custom toolbar (taking Word as an example)
                    </a>
                    <p>Add a button to the Aceoffix custom toolbar and set the code to be executed when clicked.</p>
                </>
            ),
            folder: '/CustomToolButton'
        },
        {
            id: 20,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.20  <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('AfterDocOpened/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Add an event triggered on the page after the document is opened (taking Word as an example)
                    </a>
                    <p>This demo shows how to add a JavaScript event triggered by AceoffixCtrl in the page after opening the document. This event is quite commonly used. You can execute your code in this event after opening the document.</p>
                </>
            ),
            folder: '/AfterDocOpened'
        },
        {
            id: 21,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.21<a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('JsControlBars/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Use JS to control the hiding and showing of each toolbar on the Aceoffix window (taking Word as an example)
                    </a>
                    <p>Demonstrate how to use JS to control the hiding and showing of the title bar, custom toolbar, and Office toolbar.</p>
                </>
            ),
            folder: '/JsControlBars'
        },
        {
            id: 23,
            typeImg: '/assets/images/office-2.png',
            functionExample: (
                <>
                    1.23 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('ExcelTable/Excel', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Assign values to a range in Excel and automatically add rows
                    </a>
                    <p>Demonstrate the OpenTable method of Aceoffix to achieve row growth and also reuse the cell styles of the original template Table area (B4:F13) in a loop.</p>
                </>
            ),
            folder: '/ExcelTable'
        },
        {
            id: 24,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.24<a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('SaveAsHTML/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Save the file as HTML format (taking Word as an example)
                    </a>
                    <p>Demonstrate the use of Aceoffix's WebSaveAsHTML method to save the file as HTML format on the server.</p>
                </>
            ),
            folder: '/SaveAsHTML'
        },
        {
            id: 26,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.26 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('BeforeAndAfterSave/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Code to be executed before and after document saving (taking Word as an example)
                    </a>
                    <p>Demonstrate how to execute your own business logic code before and after document saving.</p>
                </>
            ),
            folder: '/BeforeAndAfterSave'
        },
        {
            id: 28,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.28 
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('SaveDataAndFile/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Save both the data at a specified position in the Word document and the entire document (taking Word as an example)
                    </a>
                    <p>Demonstrate how to combine the setSaveDataPage and setSaveFilePage methods to achieve the effect of saving both data and file simultaneously.</p>
                </>
            ),
            folder: '/SaveDataAndFile'
        },
        {
            id: 31,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.31  <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('WordDisableRight/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Disable the right - click menu in Word
                    </a>
                    <p>Demonstrate how to use the server - side method setDisableWindowRightClick(true) to disable the right - click menu in the current Word document.</p>
                </>
            ),
            folder: '/WordDisableRight'
        },
        {
            id: 32,
            typeImg: '/assets/images/office-2.png',
            functionExample: (
                <>
                    1.32 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('ExcelDisableRight/Excel', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Disable the right - click menu in Excel
                    </a>
                    <p>Demonstrate how to use the server - side method setDisableSheetRightClick(true) to disable the right - click menu in the current Excel worksheet.</p>
                </>
            ),
            folder: '/ExcelDisableRight'
        },
        {
            id: 35,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.35<a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('RevisionOnly/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Demonstrate editing a Word document in forced revision tracking mode
                    </a>
                    <p>Demonstrate using the second parameter 'docRevisionOnly' and the third parameter (username) in the WebOpen method to open and edit a Word document online in forced revision tracking mode.</p>
                </>
            ),
            folder: '/RevisionOnly'
        },
        {
            id: 36,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.36 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('CommentOnly/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Insert keyboard comments into a read - only Word document
                    </a>
                    <p>Demonstrate using the second parameter 'docCommentOnly' and the third parameter (username) in the WebOpen method to insert keyboard comments into a read - only Word document.</p>
                </>
            ),
            folder: '/CommentOnly'
        },
        {
            id: 37,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.37 <a href="CallParentFunction/index" target="_blank">
                        The page opened byAceBrowser (child page) calls back a function of the parent page to pass values (taking Word as an example)
                    </a>
                    <p>The page opened byAceBrowser (child page) calls back a JavaScript function of the parent page. This function can also automatically update the partial status information of the parent page after the child page is closed.</p>
                </>
            ),
            folder: '/CallParentFunction'
        },
        {
            id: 38,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.38 <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('GetParentParamValue/Word', 'width=1200px;height=900px;','Luna'); 
                        }}
                    >
                        The parent page passes parameters to the page opened by AceBrowser (child page)
                    </a>
                    <p>Use the third parameter of the openWindow method to pass parameters to the page opened byAceBrowser. (Note: If you are passing short parameters, you can directly use the '?parameterName=' method. If the parameter bytes exceed 1000b, you can only use the 'third parameter of openWindow' method.)</p>
                </>
            ),
            folder: '/GetParentParamValue'
        },
        {
            id: 39,
            typeImg: '/assets/images/office-1.png',
            functionExample: (
                <>
                    1.39<a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick('SwitchFile/Word', 'width=1200px;height=900px;',''); 
                        }}
                    >
                        Switch between different files opened in the AceBrowser window
                    </a>
                    <p>Demonstrate the effect of switching between different files opened by clicking hyperlinks in the AceBrowser window.</p>
                </>
            ),
            folder: '/SwitchFile'
        }
    ];

    return (
        <table className="zz-talbe" style={{ margin: '20px auto', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={{ width: '45px', border: '1px solid #ccc', padding: '8px' }}>Type</th>
                    <th style={{ width: '700px', border: '1px solid #ccc', padding: '8px' }}>Function Examples</th>
                    <th style={{ width: '150px', border: '1px solid #ccc', padding: '8px' }}>Directory</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item) => (
                    <tr key={item.id}>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                            <img src={item.typeImg} alt="Type" />
                        </td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.functionExample}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.folder}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table1Component;