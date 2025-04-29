/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Show Document A", "ShowFile1View()", 0);
    aceoffixctrl.AddCustomToolButton("Show Document B", "ShowFile2View()", 0);
    aceoffixctrl.AddCustomToolButton("Show Comparison Result", "ShowCompareView()", 0);

  };

  const ShowFile1View = () => {
    aceoffixctrl.word.ShowCompareView(1);
}

const ShowFile2View = () => {
    aceoffixctrl.word.ShowCompareView(2);
}

const ShowCompareView = () => {
    aceoffixctrl.word.ShowCompareView(0);
}

  const AfterDocumentOpened = () => {
    // Write the code here that will be automatically triggered after the document is opened.
  };

  const openFile = async () => {
    try {
      const response = await service.post("/WordCompare/Word");
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
      ShowCompareView,
      ShowFile1View,
      ShowFile2View
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: "absolute", width: "99%", height: "99%" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
