/* eslint-disable no-undef */
import React from 'react';
import { AceBrowser } from 'js-aceoffix';

const Table2Component = () => {
  /**
   *2.Advanced Features table
   */
  const handleClick = (url, size, param) => {
    AceBrowser.openWindow(url, size, param);
  };

  const tableData = [
    {
        id: 1,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.1
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('ReadOnly/OpenWord', 'width=1200px;height=900px;','');
                    }}>
                    Online secure browsing of files (taking Word as an example)
                </a>
                <p>
                    Open a Word file online in read-only mode, prohibiting editing,
                    copying, printing, and saving as. <br />
                    Secure document browsing prohibits operations such as editing,
                    copying, pasting, right-click menus, selection, downloading, saving
                    as, downloading via F12, and screen capture using PrintScreen.
                </p>
            </>
        ),
        folder: "/ReadOnly",
    },
    {
        id: 2,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.2
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('DataBase/Word', 'width=1200px;height=900px;','');
                    }}>
                    Open and save files in the database (taking Word as an example)
                </a>
                <p>
                    Demonstrate how to use Aceoffix to open files saved in the database
                    in a streaming manner. It is not recommended to save files in the
                    database as it is not convenient for debugging and affects the
                    database query speed.
                </p>
            </>
        ),
        folder: "/DataBase",
    },
    {
        id: 3,
        typeImg: "/assets/images/pdf.jpg",
        functionExample: (
            <>
                2.5
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('SaveAsPDF/Word', 'width=1200px;height=900px;','');
                    }}>
                    Convert Office files to PDF files (taking Word as an example)
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Demonstrate the effect of opening a Word file and saving it as a PDF
                    format on the server.
                </p>
            </>
        ),
        folder: "/SaveAsPDF",
    },
    {
        id: 4,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.6
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('WordResWord/Word', 'width=1200px;height=900px;','');
                    }}>
                   Insert Word Files into DataRegions via Backend Programming
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                This example demonstrates how, through backend programming, multiple Word files are inserted into the specified positions of a template when the file is opened, resulting in the effect of generating a merged document.
                </p>
            </>
        ),
        folder: "/WordResWord",
    },
    {
        id: 5,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.7
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('WordResImage/Word', 'width=1200px;height=900px;','');
                    }}>
                 Insert Images into DataRegions via Backend Programming
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                This example is a modification based on Example 9, achieving the effect of inserting a mixture of images and Word files into the specified positions of a template to generate a merged document.
                </p>
            </>
        ),
        folder: "/WordResImage",
    },
    {
        id: 6,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.8
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('WordResExcel/Word', 'width=1200px;height=900px;','');
                    }}>
                   Insert Excel Files into DataRegions via Backend Programming
                </a>
                <span style={{ color: "red" }}>
                    (Ultimate Edition)
                </span>
                <p>
                This example is a modification based on the previous example, achieving the effect of inserting a mixture of Word and Excel files into the specified positions of a template to generate a merged document.
                </p>
            </>
        ),
        folder: "/WordResExcel",
    },
    {
        id: 7,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.9
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('AddWaterMark/Word', 'width=1200px;height=900px;','');
                    }}>
                  Add Watermarks to Word Documents
                </a>
                <span style={{ color: "red" }}>
                    (Ultimate Edition)
                </span>
                <p>
                Add watermarks to Word documents by setting the WaterMark property.
                </p>
            </>
        ),
        folder: "/AddWaterMark",
    },
    {
        id: 8,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.10
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('WordDataTag/Word', 'width=1200px;height=900px;','');
                    }}>
                    Fill Word Files with Formatted Data Using Data Tags (DataTag)
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Assign values to the data tags (DataTag) in the Word template. For
                    the requirement of having the same data in multiple positions in the
                    template, data tags can be used to repeatedly mark multiple
                    positions that need to be filled with the same data, and then
                    program the data tags to fill the template and generate a file.
                </p>
            </>
        ),
        folder: "/WordDataTag",
    },
    {
        id: 9,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.11
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('DataRegionCreate/Word', 'width=1200px;height=900px;','');
                    }}>
                    Dynamically Create Data Regions in Word
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates the function of dynamically adding data
                    regions using the CreateDataRegion method. Dynamically adding data
                    regions provides more flexibility when generating Word files. You
                    can even create a rich-media Word file from a blank one (see the
                    "Advanced Features" example for details).
                </p>
            </>
        ),
        folder: "/DataRegionCreate",
    },
    {
        id: 10,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.13
                <a href="FileMakerSingle/Default" target="_blank">
                    FileMaker Convert a Single Document (Taking Word as an Example)
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates the effect of dynamically generating a
                    file using the FileMaker object. Although the file is still
                    generated on the client-side and then saved to the server, it is not
                    explicitly opened on the client.
                </p>
            </>
        ),
        folder: "/FileMakerSingle",
    },
    {
        id: 11,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.14
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('WordTable/Word', 'width=1200px;height=900px;','');
                    }}>
                    Insert New Rows into a Table in a Word Document and Assign Values
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates the function of Aceoffix to insert new
                    rows into a table in a Word document. It also shows how to add new
                    rows to a table with vertically merged cells.
                </p>
            </>
        ),
        folder: "/WordTable",
    },
    {
        id: 12,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.16
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('DataRegionTable/Word', 'width=1200px;height=900px;','');
                    }}>
                    Retrieve Table Data from a Word File
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates how to retrieve data from a table in a
                    Word document. The prerequisite for retrieving table data is that
                    the table must be within a data region. You can use the OpenTable
                    method of the data region object to obtain the data in each cell of
                    the table.
                </p>
            </>
        ),
        folder: "/DataRegionTable",
    },
    {
        id: 13,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.17
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('DataRegionText/Word', 'width=1200px;height=900px;','');
                    }}>
                    Control the Style of Text in a DataRegion
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates how to use a program to control the style
                    of text in a data region, including setting the font, font size,
                    color, and alignment of the text.
                </p>
            </>
        ),
        folder: "/DataRegionText",
    },
    {
        id: 14,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.18
                <a href="SetDrByUserWord/Index" target="_blank">
                    Control Different Users to Edit Different Regions in a Word Document
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates how to use a program to control different
                    users so that they can only edit their own regions in a Word
                    document after opening the file.
                </p>
            </>
        ),
        folder: "/SetDrByUserWord",
    },
    {
        id: 19,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.19
                <a href="SetDrByUserWord2/Index" target="_blank">
                    Control Different Users to Edit Different Regions in a Word Document
                    (Allowing Simultaneous Editing)
                </a>
                <span style={{ color: "red" }}>(Ultimate Edition)</span>
                <p>
                    This example demonstrates how to use a program to control different
                    users so that they can only edit their own regions in a Word
                    document after opening the file. With this method, multiple users
                    can open a file simultaneously and edit their respective regions
                    without interfering with each other.
                </p>
            </>
        ),
        folder: "/SetDrByUserWord2",
    },
    {
        id: 21,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.21
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("MergeWordCell/Word", "width=1200px;height=900px;", "");
                    }}>
                    Merge Cells in a Table of a Word File and Assign Values Using a Program
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates using the MergeTo method to merge
                    specified cells in a table of a Word file, fill in text data, and
                    set the font, style, and alignment of the text.
                </p>
            </>
        ),
        folder: "/MergeWordCell",
    },
    {
        id: 23,
        typeImg: "/assets/images/office-2.png",
        functionExample: (
            <>
                2.23
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("MergeExcelCell/Excel", "width=1200px;height=900px;", "");
                    }}>
                    Merge Excel Cells, Set Format, and Assign Values Using a Program
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates using a program to merge specified Excel
                    cells, set the text format, and assign values.
                </p>
            </>
        ),
        folder: "/MergeExcelCell",
    },
    {
        id: 24,
        typeImg: "/assets/images/office-2.png",
        functionExample: (
            <>
                2.24
                <a href="SetXlsTableByUser/Index" target="_blank">
                    Control Different Users to Edit Different Regions in an Excel Document
                </a>
                <span style={{ color: "red" }}>
                    (Professional Edition, Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates how to use a program to control different
                    users so that they can only edit their own regions in an Excel
                    document after opening the file.
                </p>
            </>
        ),
        folder: "/SetXlsTableByUser",
    },
    {
        id: 25,
        typeImg: "/assets/images/office-2.png",
        functionExample: (
            <>
                2.25
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("SetExcelCellBorder/Excel", "width=1200px;height=900px;", "");
                    }}>
                    "Draw" Excel Table Lines Using a Program
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates how to program the ExcelWriter object to
                    set the border style of each cell or region in an Excel document,
                    that is, to set the style of the Excel table lines.
                </p>
            </>
        ),
        folder: "/SetExcelCellBorder",
    },
    {
        id: 26,
        typeImg: "/assets/images/office-2.png",
        functionExample: (
            <>
                2.26
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("SetExcelCellText/Excel", "width=1200px;height=900px;", "");
                    }}>
                    Set the Font, Color, Alignment, and Background Color of Excel Cell Text Using a Program
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates how to program the ExcelWriter object to
                    set the font and color of the text in each Excel cell, as well as
                    the alignment and background color of the cells.
                </p>
            </>
        ),
        folder: "/SetExcelCellText",
    },
    {
        id: 27,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.27
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("DataRegionFill2/Word", "width=1200px;height=900px;", "");
                    }}>
                    Assign Values to and Set Styles for Data Regions (DataRegion) in a Word Document
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This is the simplest example of assigning values to Word data
                    regions. Manually set some DataRegions in a Word document in
                    advance. With Aceoffix, you can dynamically fill content at the
                    marked positions in the document and set the text styles.
                </p>
            </>
        ),
        folder: "/DataRegionFill2",
    },
    {
        id: 29,
        typeImg: "/assets/images/office-2.png",
        functionExample: (
            <>
                2.29
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("ExcelFill2/Excel", "width=1200px;height=900px;", "");
                    }}>
                    Simply Assign Values to Excel Cells and Set Text Color
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates using a program to fill data into Excel
                    cells and set the text color.
                </p>
            </>
        ),
        folder: "/ExcelFill2",
    },
    {
        id: 30,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.30
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("DataRegionEdit/Word", "width=1200px;height=900px;", "");
                    }}>
                    The location of the data area (DataRegion) in the user-defined template
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This demonstrates the use of the data area management window
                    encapsulated by Aceoffix to achieve the effect of allowing users to
                    edit templates on their own and define the positions of various data
                    areas in the templates.
                </p>
            </>
        ),
        folder: "/DataRegionEdit",
    },
    {
        id: 31,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.31
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("DataTagEdit/Word", "width=1200px;height=900px;", "");
                    }}>
                    Allow Users to Customize the Positions of Data Tags (DataTag) in a Template
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates using the pre-packaged data tag
                    management window in Aceoffix to allow users to edit the template
                    themselves and define the positions of each data tag in the
                    template.
                </p>
            </>
        ),
        folder: "/DataTagEdit",
    },
    {
        id: 32,
        typeImg: "/assets/images/office-2.png",
        functionExample: (
            <>
                2.32
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("DefinedNameCell/Excel", "width=1200px;height=900px;", "");
                    }}>
                    Assign Values to Cells with Defined Names in an Excel Template
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Excel has a "Define Name" function that allows you to define a name
                    for any cell. For example, you can define the name of a cell as
                    "testA1". This example demonstrates how to assign a value to the
                    cell named "testA1".
                </p>
            </>
        ),
        folder: "/DefinedNameCell",
    },
    {
        id: 33,
        typeImg: "/assets/images/office-2.png",
        functionExample: (
            <>
                2.33
                <a href="DefinedNameTable/Index" target="_blank">
                    Assign Values to a Region with a Defined Name in an Excel Template
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Excel has a "Define Name" function that allows you to define a name
                    for a selected region (in the concept of Aceoffix, this region is
                    called a Table). For example, you can define the name of the region
                    "B4:F13" as "report". This example demonstrates how to assign a
                    value to the Table named "report".
                </p>
            </>
        ),
        folder: "/DefinedNameTable",
    },
    {
        id: 34,
        typeImg: "/assets/images/pdf.jpg",
        functionExample: (
            <>
                2.34
                <a href="FileMakerPDF/Default" target="_blank">
                    FileMaker Convert a Single Document to PDF (Taking Word as an Example)
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates using the FileMaker object to dynamically
                    generate a PDF file. Although the PDF file is still generated on the
                    client-side and then saved to the server, it is not explicitly
                    opened on the client.
                </p>
            </>
        ),
        folder: "/FileMakerPDF",
    },
    {
        id: 35,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.35
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("WordCompare/Word", "width=1200px;height=900px;", "");
                    }}>
                    Demonstrate the Function of Comparing Two Versions of a Word Document
                </a>
                <span style={{ color: "red" }}>(Ultimate Edition)</span>
                <p>
                    Use Aceoffix to open two versions of a Word document online
                    simultaneously. You can switch to display one of the documents or
                    display both documents at the same time to compare the document
                    content, realizing the online document content comparison function.
                </p>
            </>
        ),
        folder: "/WordCompare",
    },
    {
        id: 36,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.36
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("WordTextBox/Word", "width=1200px;height=900px;", "");
                    }}>
                    Assign Values to Data Regions in Word Text Boxes
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Assign values to data regions within text boxes in a Word document
                    to achieve the effect of filling data into specific positions in the
                    Word file.
                </p>
            </>
        ),
        folder: "/WordTextBox",
    },
    {
        id: 39,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.39
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("SplitWord/Word", "width=1200px;height=900px;", "");
                    }}>
                    Split a Word Document: Save the Content in Data Regions as Sub-documents
                </a>
                <span style={{ color: "red" }}>(Ultimate Edition)</span>
                <p>
                    When saving the file, extract the content from data regions with the
                    property SubmitAsFile = true in the Word document and save it as a
                    sub-file.
                </p>
            </>
        ),
        folder: "/SplitWord",
    },
    {
        id: 40,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.40
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("CommentsList/Word", "width=1300px;height=900px;", "");
                    }}>
                    Two Ways to Create New Annotations and the Effect of the Annotation List in Word
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates the effect of displaying all keyboard
                    annotations in the current document in a list form and creating new
                    keyboard annotations.
                </p>
            </>
        ),
        folder: "/CommentsList",
    },
    {
        id: 41,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.41
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("RevisionsList/Word", "width=1300px;height=900px;", "");
                    }}>
                    Display the Revision List in Word
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates the effect of displaying all keyboard
                    annotations in the current document in a list form and creating new
                    keyboard annotations.
                </p>
            </>
        ),
        folder: "/RevisionsList",
    },
    {
      id: 43,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          2.43
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "WordCreateTable/Word",
                "width=1200px;height=900px;",
                ""
              );
            }}
          >
            Dynamically Create Tables and Assign Values in a Word Document
          </a>
          <span style={{ color: "red" }}>
            (Enterprise Edition, Ultimate Edition)
          </span>
          <p>
            This example demonstrates how to dynamically create multiple tables
            and assign values in a Word document.
          </p>
        </>
      ),
      folder: "/WordCreateTable",
    },
    {
      id: 46,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          2.46
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "SaveFirstPageAsImg/Word",
                "width=1200px;height=900px;",
                ""
              );
            }}
          >
            Save the First Page of a Word Document as an Image
          </a>
          <span style={{ color: "red" }}>(Ultimate Edition)</span>
          <p>
            This example demonstrates how to use JavaScript to call the
            WebSaveAsimg() method to save the first page of a Word document as
            an image.
          </p>
        </>
      ),
      folder: "/SaveFirstPageAsImg",
    },
    {
      id: 47,
      typeImg: "/assets/images/office-2.png",
      functionExample: (
        <>
          2.47
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "ExcelAdjustRC/Excel",
                "width=1200px;height=900px;",
                ""
              );
            }}
          >
            Adjust Rows and Columns in Excel Read - only Mode
          </a>
          <span style={{ color: "red" }}>
            (Enterprise Edition, Ultimate Edition)
          </span>
          <p>
            This example demonstrates how to allow users to manually adjust the
            row height and column width of an Excel table in read - only mode.
          </p>
        </>
      ),
      folder: "/ExcelAdjustRC",
    },
    {
      id: 48,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          2.48
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "WordDeleteRow/Word",
                "width=1200px;height=900px;",
                ""
              );
            }}
          >
            Delete the Row Containing the Specified Cell in a Word Table
          </a>
          <span style={{ color: "red" }}>(Ultimate Edition)</span>
          <p>
            This example demonstrates how to use the server - side method
            removeRowAt(cell) to delete the row containing the specified cell in
            a Word table.
          </p>
        </>
      ),
      folder: "/WordDeleteRow",
    },
    {
      id: 49,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          2.49
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "InsertPageBreak2/Word",
                "width=1200px;height=900px;",
                ""
              );
            }}
          >
            Insert Page Breaks in Word Using Server - side Methods
          </a>
          <span style={{ color: "red" }}>
            (Enterprise Edition, Ultimate Edition)
          </span>
          <p>
            This example demonstrates how to use the server - side method
            wordDocument.insertPageBreak() to insert page breaks, ensuring that
            the formatting of each document remains unchanged when multiple
            documents are merged.
          </p>
        </>
      ),
      folder: "/InsertPageBreak2",
    },
    {
      id: 50,
      typeImg: "/assets/images/office-2.png",
      functionExample: (
        <>
          2.50
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "ExcelInsertImage/Excel",
                "width=1200px;height=900px;",
                ""
              );
            }}
          >
            Insert an Image into an Excel Cell
          </a>
          <span style={{ color: "red" }}>(Ultimate Edition)</span>
          <p>
            This example demonstrates how to insert an image into a specified
            Excel cell. The main method used is:
            cell.setValue("[image]/ExcelInsertImage/image/logo.jpg[/image]").
          </p>
        </>
      ),
      folder: "/ExcelInsertImage",
    },
    {
      id: 51,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          2.51
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "WordTableSetImg/Word",
                "width=1200px;height=900px;",
                ""
              );
            }}
          >
            Insert an Image into a Cell in a Word Table
          </a>
          <span style={{ color: "red" }}>
            (Enterprise Edition, Ultimate Edition)
          </span>
          <p>
            This example demonstrates using
            cell.setValue("[image]/WordTableSetImg/doc/wang.gif[/image]") to
            fill a cell in a Word table with an image.
          </p>
        </>
      ),
      folder: "/WordTableSetImg",
    },
    {
      id: 52,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          2.52
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "WordTableBorder/Word",
                "width=1200px;height=900px;",
                ""
              );
            }}
          >
            Set the Style of a Word Table
          </a>
          <span style={{ color: "red" }}>
            (Enterprise Edition, Ultimate Edition)
          </span>
          <p>
            This example demonstrates how to use the Border class and Font class
            to set the border style and font style of a Word table.
          </p>
        </>
      ),
      folder: "/WordTableBorder",
    },
    {
        id: 53,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.53
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("ExtractImage/Word", "width=1200px;height=900px;", "");
                    }}>
                    Extract Images from a Word Document
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates how to use the Shape class to obtain
                    images from a Word document.
                </p>
            </>
        ),
        folder: "/ExtractImage",
    },
    {
        id: 55,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.55
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("DisableCopyOut/Word", "width=1055px;height=900px;", "");
                    }}>
                    Prohibit Copying Content from an Online-Edited Word Document to the Outside
                </a>
                <span style={{ color: "red" }}>(Ultimate Edition)</span>
                <p>
                    This example demonstrates the special effect of prohibiting the
                    copying of content from an online Word document to the outside while
                    allowing the copying of external content into the online Word file
                    when opening a Word document online in edit mode.
                </p>
            </>
        ),
        folder: "/DisableCopyOut",
    },
    {
        id: 56,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.56
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("InsertImageSetSize/Word", "width=1055px;height=900px;", "");
                    }}>
                    Dynamically Insert an Image into a Word Data Region and Set the Image Size via Backend Programming
                </a>
                <span style={{ color: "red" }}>(Ultimate Edition)</span>
                <p>
                    This example demonstrates using backend programming to dynamically
                    insert an image into a Word data region and set the image size.
                </p>
            </>
        ),
        folder: "/InsertImageSetSize",
    },
    {
        id: 57,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                2.57
                <a href="FileMakerModify/Default" target="_blank">
                    FileMaker Modify the Content of a Specified Region in a Document
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    This example demonstrates that FileMaker can directly modify the
                    content of a specified region in a document without opening the file
                    and automatically upload it to the server. The document interface
                    will not be displayed during the whole process.
                </p>
            </>
        ),
        folder: "/FileMakerModify",
    }
  ];

  return (
    <table
      className="zz-talbe"
      style={{ margin: "20px auto", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th
            style={{ width: "37px", border: "1px solid #ccc", padding: "8px" }}
          >
            Type
          </th>
          <th
            style={{ width: "700px", border: "1px solid #ccc", padding: "8px" }}
          >
            Function Example
          </th>
          <th
            style={{ width: "150px", border: "1px solid #ccc", padding: "8px" }}
          >
            Folder
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <img src={item.typeImg} alt="Type" />
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {item.functionExample}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {item.folder}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table2Component;
