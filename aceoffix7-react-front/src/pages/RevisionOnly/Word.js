/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
    aceoffixctrl.AddCustomToolButton("Hide Revisions", "hideRevision()", 0);
    aceoffixctrl.AddCustomToolButton("Show Revisions", "showRevision()", 0);
  };

  const Save = () => {
    aceoffixctrl.SaveFilePage = "/RevisionOnly/save";
    aceoffixctrl.WebSave();
  };

  const showRevision = () => {
    aceoffixctrl.ShowRevisions = true;
  };

  const hideRevision = () => {
    aceoffixctrl.ShowRevisions = false;
  };

  const openFile = async () => {
    try {
      const response = await service.post("/RevisionOnly/Word");
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
      Save,
      hideRevision,
      showRevision,
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
