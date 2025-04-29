/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.Caption = "Demo: Return value of saving";
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
  };

  
  const Save = () => {
    aceoffixctrl.SaveFilePage = "/SaveReturnValue/save";
    aceoffixctrl.WebSave();
    // The value returned by aceoffixctrl.CustomSaveResult is defined by the background code fs.CustomSaveResult = "OK"; in the save page.
    alert("Saved successfully. The return value is: " + aceoffixctrl.CustomSaveResult);
  };

  const AfterDocumentOpened = () => {
    // Write the code here that will be automatically triggered after the document is opened.
  };

  const openFile = async () => {
    try {
      const response = await service.post("/SaveReturnValue/Word");
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

    window.ACEPageMounted = {
      OnAceoffixCtrlInit,
      AfterDocumentOpened,
      Save
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: "absolute", width: "100%", height: "100%" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
