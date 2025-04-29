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

    filemakerctrl.SaveFilePage = "/FileMakerSingle/save";

    filemakerctrl.CallFileMaker({
      url: "/FileMakerSingle/FileMakerSingle",
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
        Demo: Dynamically Data to Word
        </h3>
        <div style={{ width: "650px", margin: "0 auto", fontSize: "14px" }}>
          <p style={{ textAlign: "left" }}>
            Demo Content:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Demonstration: Effect of Dynamically Filling Data into a Word Template to Generate  File.
          </p>
          <p style={{ textAlign: "left" }}>
            Instructions:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;1. Click the "GenerateFile" button to execute the program that dynamically fills data into the certificate template "template.docx" .<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;2. After generation is complete, you will find the generated file "certificate.pdf" in the "FileMakerSingle/doc" directory.
          </p>
        </div>
        <button
          id="Button1"
          type="button"
          onClick={handleConvertFile}
          disabled={isButtonDisabled}
        >
            Generate File
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
