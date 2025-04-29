/* eslint-disable no-undef */
import React from 'react';
import { AceBrowser } from 'js-aceoffix';

const Table4Component = () => {
  /**
   *4.Other Tips table
   */
  const handleClick = (url, size, param) => {
    AceBrowser.openWindow(url, size, param);
  };

  const tableData = [
    {
        id: 41,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                4.1
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("WordAddBKMK/Word", "width=1200px;height=900px;", "");
                    }}>
                    Insert Bookmark at Current Cursor in Word
                </a>
                <p>
                    Demonstrates the use of JavaScript to insert a bookmark into a
                    document.
                </p>
            </>
        ),
        folder: "/WordAddBKMK",
    },
    {
        id: 42,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                4.2
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("WordLocateBKMK/Word", "width=1200px;height=900px;", "");
                    }}>
                    JavaScript Locate Cursor to Bookmark
                </a>
                <p>
                    Demonstrates using JavaScript to locate the cursor to the position
                    of a bookmark, which can be used to achieve the effect of
                    automatically stamping at a specified location.
                </p>
            </>
        ),
        folder: "/WordLocateBKMK",
    },
    {
        id: 43,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                4.3
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("WordGetSelection/Word", "width=1200px;height=900px;", "");
                    }}>
                    JavaScript Get Selected Text in Word
                </a>
                <p>
                    Demonstrates using JavaScript to retrieve the currently selected
                    text content in the document.
                </p>
            </>
        ),
        folder: "/WordGetSelection",
    },
    {
        id: 44,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                4.4
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("InsertImgForJs/Word", "width=1200px;height=900px;", "");
                    }}>
                    Insert Image Using JavaScript (Example with Word)
                </a>
                <p>
                    Demonstrates inserting an image into a document at a specified
                    location using JavaScript.
                </p>
            </>
        ),
        folder: "/InsertImgForJs",
    },
    {
        id: 45,
        typeImg: "/assets/images/office-1.png",
        functionExample: (
            <>
                4.5
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("JsInsertWaterMark/Word", "width=1200px;height=900px;", "");
                    }}>
                    Insert Watermark in Word Document Using JavaScript
                </a>
                <span style={{ color: "red" }}>(Ultimate Edition)</span>
                <p>
                    Demonstrates inserting a watermark into a Word document using
                    JavaScript.
                </p>
            </>
        ),
        folder: "/JsInsertWaterMark",
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

export default Table4Component;
