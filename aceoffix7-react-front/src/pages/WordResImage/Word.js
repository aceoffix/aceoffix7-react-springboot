/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.CustomToolbar = false; // Hide the custom toolbar

  };

  const AfterDocumentOpened = () => {
    // Write the code here that will be automatically triggered after the document is opened.
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.post("/WordResImage/Word");
        if (response) {
          setAceHtmlCode(response);
        }
      } catch (error) {
        console.error("An error occurred during the request:", error);
      }
    };

    fetchData();

    window.ACEPageMounted = { OnAceoffixCtrlInit, AfterDocumentOpened };

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
