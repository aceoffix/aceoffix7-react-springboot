/* eslint-disable no-undef */
import React from 'react';
import { AceBrowser } from 'js-aceoffix';

const Table3Component = () => {
  /**
   *3.Comprehensive Demonstration table
   */
  const handleClick = (url, size, param) => {
    AceBrowser.openWindow(url, size, param);
  };

  const tableData = [
    {
        id: 31,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                3.1
                <a href="FileMaker/Default" target="_blank">
                    FileMaker Batch Conversion of Documents (Example with Word)
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Demonstrates the effect of dynamically generating multiple Word
                    files.
                </p>
            </>
        ),
        folder: "/FileMaker",
    },
    {
        id: 32,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                3.2
                <a href="ExaminationPaper/Index" target="_blank">
                    Dynamically Generate an Exam Paper in a Word Document
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Demonstrates the effect of selecting questions from a question bank
                    and dynamically generating an exam paper.
                </p>
            </>
        ),
        folder: "/ExaminationPaper",
    },
    {
        id: 37,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                3.7
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("WordParagraph/Word", "width=1200px;height=900px;", "");
                    }}>
                    Fully Programmed Dynamic Generation of Word Files
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Demonstrates the use of classes provided in the WordWriter namespace
                    to programmatically generate a richly formatted Word document with
                    images and text from a blank Word file.
                </p>
            </>
        ),
        folder: "/WordParagraph",
    },
    {
        id: 38,
        typeImg: "/assets/images/office-2.png",
        functionExample: (
            <>
                3.8
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("DrawExcel/Excel", "width=1200px;height=900px;", "");
                    }}>
                    Fully Programmed Dynamic Generation of Excel Files
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Demonstrates the use of classes provided in the Excel namespace to
                    programmatically create an Excel file with complex formulas, table
                    lines, text colors, and perfectly formatted cells filled with data
                    from a blank Excel file.
                </p>
            </>
        ),
        folder: "/DrawExcel",
    },
    // {
    //     id: 310,
    //     typeImg: "/assets/images/office-1.png",
    //     functionExample: (
    //         <>
    //             3.10
    //             <a href="WordSalaryBill/Default" target="_blank">
    //                 Dynamic Generation of Pay Slips Using Word Table Templates
    //             </a>
    //             <span style={{ color: "red" }}>
    //                 (Enterprise Edition, Ultimate Edition)
    //             </span>
    //             <p>
    //                 Demonstrates inserting Word files, filling Word table data, merging
    //                 Word files, and looping table insertions.
    //             </p>
    //         </>
    //     ),
    //     folder: "/WordSalaryBill",
    // },
    {
        id: 313,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                3.13
                <a href="FileMakerPrintFiles/Default"  target="_blank">
                    Batch Printing of Files Using FileMaker (Example with Word)
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>Demonstrates the effect of batch printing Word files.</p>
            </>
        ),
        folder: "/FileMakerPrintFiles",
    },
    {
        id: 314,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                3.14
                <a href="SaveAndSearch/Index" target="_blank">
                    Full-text Search for Word Documents Containing Keywords
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Demonstrates how to perform a full-text search for Word documents
                    containing keywords and highlight the keywords when the document is
                    opened.
                </p>
            </>
        ),
        folder: "/SaveAndSearch",
    },
    {
        id: 315,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                3.15
                <a href="FileMakerConvertPDFs/Default" target="_blank">
                    Batch Conversion of Word Files to PDF
                </a>
                <span style={{ color: "red" }}>
                    (Enterprise Edition, Ultimate Edition)
                </span>
                <p>
                    Demonstrates how to use the FileMakerCtrl component to batch convert
                    Word files into PDF files.
                </p>
            </>
        ),
        folder: "/FileMakerConvertPDFs",
    },
    {
        id: 316,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                3.16
                <a href="ConcurrencyCtrl" target="_blank">
                    Opening Documents with "Concurrency Control" (Example with Word)
                </a>
                <p>
                    Demonstrates server-side locking of documents so that only the
                    locked user can open the document for editing, preventing other
                    users from opening or editing the document simultaneously, thus
                    avoiding file overwrite issues.
                </p>
            </>
        ),
        folder: "/ConcurrencyCtrl",
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

export default Table3Component;
