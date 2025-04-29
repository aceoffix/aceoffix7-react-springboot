/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
    aceoffixctrl.AddCustomToolButton("Save as HTML", "SaveAsHtml", 1);
  };

  const SaveAsHtml = () => {
    aceoffixctrl.SaveFilePage = "/SaveAsHTML/save";
    aceoffixctrl.WebSaveAsHTML();
    alert("The HTML file has been saved to the server.");
  };

  const Save = () => {
    aceoffixctrl.SaveFilePage = "/SaveAsHTML/save";
    aceoffixctrl.WebSave();
  };

  const AfterDocumentOpened = () => {
    // Write the code here that will be automatically triggered after the document is opened.
  };

  const openFile = async () => {
    try {
      const response = await service.post("/SaveAsHTML/Word");
      return response;
    } catch (error) {
      console.error("Error fetching file:", error);
      return null;
    }
  };

  useEffect(() => {
    openFile().then((response) => {
      if (response) {
        setAceHtmlCode(response);
      }
    });

    window.ACEPageMounted = { OnAceoffixCtrlInit, AfterDocumentOpened, SaveAsHtml,Save };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: "absolute", width: "98%", height: "98%" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
