/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
const Save = () => {
    aceoffixctrl.SaveFilePage = "/SaveFirstPageAsImg/save";
    aceoffixctrl.WebSave();
}

const SaveFirstAsImg = () => {
    aceoffixctrl.SaveFilePage = "/SaveFirstPageAsImg/save";
    aceoffixctrl.WebSaveAsImage();
    alert('The image has been saved to the "SaveFirstPageAsImg/doc/" directory.');
}

const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save()", 1);
    aceoffixctrl.AddCustomToolButton("Save First Page as Image", "SaveFirstAsImg()", 1);
}
  const AfterDocumentOpened = () => {
    // Write the code here that will be automatically triggered after the document is opened.
  };

  const openFile = async () => {
    try {
      const response = await service.post("/SaveFirstPageAsImg/Word");
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

    window.ACEPageMounted = { OnAceoffixCtrlInit, AfterDocumentOpened, SaveFirstAsImg,Save };

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
