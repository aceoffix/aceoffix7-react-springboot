/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import service from "../../api";
import { filemakerctrl } from "js-aceoffix";

const Default = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState("0%");
  const [progressBarText, setProgressBarText] = useState("0%");

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

  const setProgress = (percent) => {
    setProgressBarWidth(`${percent}%`);
    setProgressBarText(`${percent}%`);
  };

  const handleConvertFile = () => {
    setIsButtonDisabled(true);

    filemakerctrl.SaveFilePage = "/FileMakerToPDF/save";

    filemakerctrl.CallFileMaker({
      url: "/FileMakerToPDF/FileMakerToPDF",
      success: (res) => {
        console.log(res);
        console.log("completed successfully.");
        setProgress(100);
        setIsButtonDisabled(false);
      },
      progress: (pos) => {
        console.log("running " + pos + "%");
        setProgress(pos);
      },
      error: (msg) => {
        console.log("error occurred: " + msg);
        setIsButtonDisabled(false);
      },
    });
  };

  return (
    <div className="Word">
      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <h3 style={{ margin: "20px" }}>
        Demo: Dynamically Word Template to Generate PDF
        </h3>
        <div style={{ width: "650px", margin: "0 auto", fontSize: "14px" }}>
          <p style={{ textAlign: "left" }}>
            Demo Content:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;This example demonstrates using the FileMaker object to dynamically convert Word to PDF on the client side, automatically upload to the server without opening the file online, simulating server-side PDF generation.
          </p>
          <p style={{ textAlign: "left" }}>
            Instructions:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;1. Click the "Generate PDF" button to dynamically convert the certificate template "template.docx" into PDF format.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;2. After generation, you can find the generated PDF file "zhengshu.pdf" in the "FileMakerToPDF/doc" directory.
          </p>
        </div>
        <button
          id="Button1"
          type="button"
          onClick={handleConvertFile}
          disabled={isButtonDisabled}
        >
            Generate PDF
        </button>
        <br />
        <br />
        <div id="progressBarContainer">
          <div
            style={{
              width: progressBarWidth,
              height: "20px",
              backgroundColor: "#76b900",
              borderRadius: "5px",
              textAlign: "center",
              lineHeight: "20px",
              color: "white",
            }}
          >
            {progressBarText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
