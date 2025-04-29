/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import service from "../../api";
import { AceBrowser, filemakerctrl } from "js-aceoffix";

const Default = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [files, setFiles] = useState([
    { id: 1, name: "Aceoffix Product Overview", checked: false },
    { id: 2, name: "Aceoffix Trial Limits, Ltd", checked: false },
    { id: 3, name: " Aceoffix License Policy", checked: false },
    { id: 4, name: " Introduction to Aceoffix", checked: false },
  ]);
  const [singleProgress, setSingleProgress] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate sending a GET request to the backend's /index interface to return data. This is not required in an actual application.
        const response = await service.get("/index");
        console.log("result=" + response);
      } catch (error) {
        console.error("The request has gone wrong:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  const toggleAllCheckboxes = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setFiles(files.map((file) => ({ ...file, checked: newSelectAll })));
  };

  const handleFileCheck = (index) => {
    const newFiles = [...files];
    newFiles[index].checked = !newFiles[index].checked;
    setFiles(newFiles);
  };

  const convertFiles = () => {
    const selectedFiles = files
      .filter((file) => file.checked)
      .map((file) => file.id);
    if (selectedFiles.length === 0) {
      alert("Please select at least one document.");
      return;
    }
    setIsButtonDisabled(true);
    convertFile(selectedFiles, 0);
  };

  const convertFile = (idArr, index) => {
    filemakerctrl.SaveFilePage = `/FileMakerConvertPDFs/save?id=${idArr[index]}`;

    filemakerctrl.CallFileMaker({
      url: `/FileMakerConvertPDFs/convert?id=${idArr[index]}`,
      success: (res) => {
        console.log(res);
        setSingleProgress(100);
        const newIndex = index + 1;
        setOverallProgress(Math.round((newIndex / idArr.length) * 100));

        if (newIndex < idArr.length) {
          convertFile(idArr, newIndex);
        } else {
          setIsButtonDisabled(false);
        }
      },
      progress: (pos) => {
        setSingleProgress(pos);
      },
      error: (msg) => {
        setErrorMsg(`error: ${msg}`);
        setIsButtonDisabled(false);
      },
    });
  };

  const openAceoffix = (vuePageUrl, param) => {
    AceBrowser.openWindow(vuePageUrl, "width=1200px;height=800px;", param);
  };

  return (
    <div className="Word">
      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <h2>Demo: Batch Convert to PDF</h2>
        <div style={{ width: "600px", margin: "0 auto", fontSize: "14px" }}>
          <p style={{ textAlign: "left" }}>
            <br />
            Instructions:
            <br />
            1. Check the files below;
            <br />
            2. Click on the "Batch Convert PDF Documents" button;
            <br />
            3. After generation is complete, you can find the batch-generated PDF files in the "FileMakerConvertPDFs/doc" directory.
            <br />
            <br />
          </p>
        </div>
        <h3>File List</h3>
        <table
          style={{ border: "solid 1px #ccc", width: "600px", margin: "20px" }}
        >
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleAllCheckboxes}
                />
              </th>
              <th>No.</th>
              <th>File Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleFileCheck(index)}
                  />
                </td>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openAceoffix("Edit", item.id);
                    }}
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button id="Button1" disabled={isButtonDisabled} onClick={convertFiles}>
          Generate Word Files to PDF in Batch
        </button>

        <div
          style={{
            width: "400px",
            margin: "10px auto",
            textAlign: "left",
            fontSize: "14px",
            border: "solid 1px #1a73e8",
            padding: "10px 20px",
            color: "#1a73e8",
          }}
        >
          <div>Single File Progress:</div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#eee",
              borderRadius: "5px",
              padding: "3px",
              boxShadow: "inset 2px 2px 3px 3px #ccc",
            }}
          >
            <div
              style={{
                width: `${singleProgress}%`,
                height: "20px",
                backgroundColor: "#1a73e8",
                borderRadius: "5px",
                textAlign: "center",
                lineHeight: "20px",
                color: "white",
              }}
            >
              {singleProgress}%
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>Overall Progress:</div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#eee",
              borderRadius: "5px",
              padding: "3px",
              boxShadow: "inset 2px 2px 3px 3px #ccc",
            }}
          >
            <div
              style={{
                width: `${overallProgress}%`,
                height: "20px",
                backgroundColor: "#1a73e8",
                borderRadius: "5px",
                textAlign: "center",
                lineHeight: "20px",
                color: "white",
              }}
            >
              {overallProgress}%
            </div>
          </div>

          <div style={{ color: "red", marginTop: "10px" }}>{errorMsg}</div>
        </div>
      </div>
    </div>
  );
};

export default Default;
