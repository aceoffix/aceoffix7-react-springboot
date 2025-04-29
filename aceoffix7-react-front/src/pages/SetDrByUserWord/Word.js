/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  const [userName, setUserName] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
  };

  const Save = () => {
    aceoffixctrl.SaveFilePage = "/SetDrByUserWord/save";
    aceoffixctrl.WebSave();
  };

  const AfterDocumentOpened = () => {
    // Write the code here that will be automatically triggered after the document is opened.
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.post(`/SetDrByUserWord/Word?userName=`+aceoffixctrl.WindowParams);
        if (response) {
          setAceHtmlCode(response.aceoffix);
          setUserName(response.userName);

        }
      } catch (error) {
        console.error("An error occurred during the request:", error);
      }
    };

    fetchData();

    window.ACEPageMounted = { OnAceoffixCtrlInit, AfterDocumentOpened, Save };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      <span style={{ width: "100px" }}> </span>
      <strong>Current User:</strong>
      <span style={{ color: "red" }}>{userName}</span>
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: "absolute", width: "98%", height: "90%" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
