/* eslint-disable no-undef */
import React from 'react';
import { AceBrowser } from 'js-aceoffix';

const Table5Component = () => {
  /**
   *5.New Features table
   */
  const handleClick = (url, size, param) => {
    AceBrowser.openWindow(url, size, param);
  };

  const tableData = [
    {
      id: 51,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          5.1
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "DivMessage/Word",
                "width=1055px;height=900px;",
                ""
              );
            }}
          >
            Demonstrate the pop - up of message boxes
          </a>
          <p>Demonstrate the pop - up of message boxes.</p>
        </>
      ),
      folder: "/DivMessage",
    },
    {
      id: 52,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          5.2
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "ApplicationForm/Word",
                "width=1055px;height=900px;",
                ""
              );
            }}
          >
            Demonstrate filling out Word tables using a modal dialog box
          </a>
          <p>
            Demonstrate the effect of filling out tables in a Word document
            using a popped - up div modal box.
          </p>
        </>
      ),
      folder: "/ApplicationForm",
    },
    {
      id: 53,
      typeImg: "/assets/images/office-1.png",
      functionExample: (
        <>
          5.3
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(
                "FormToDataRegions/Word",
                "width=1500px;height=900px;",
                ""
              );
            }}
          >
            Dynamically populate the content of a Form into a Word document
          </a>
          <p>
            Dynamically populate the content of a Form into a Word document.
          </p>
        </>
      ),
      folder: "/FormToDataRegions",
    },
    {
      id: 54,
      typeImg: "/assets/images/pdf.jpg",
      functionExample: (
        <>
          5.4
          <a href="FileMakerToPDF/Default" target="_blank">
            Use FileMaker to convert a single Word document to PDF
          </a>
          <span style={{ color: "red" }}>
            (Enterprise Edition, Ultimate Edition)
          </span>
          <p>
            Demonstrate that under Aceoffix 7.0, when using FileMaker to convert
            Word to PDF, there's no need for a pop - up window. The conversion
            can be directly completed on the system's main page, accompanied by
            the real - time conversion progress of the file. Note that this
            conversion utilizes Word's own conversion function, so there won't
            be any issues with format and layout in the generated PDF files. To
            achieve the effect of batch conversion, please refer to the example
            in (3.15. Batch conversion of Word files to PDF).
          </p>
        </>
      ),
      folder: "/FileMakerToPDF",
    },
  ];

  return (
    <table
      className="zz-talbe"
      style={{ margin: "20px auto", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th
            style={{ width: "45px", border: "1px solid #ccc", padding: "8px" }}
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
            Directory
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

export default Table5Component;
