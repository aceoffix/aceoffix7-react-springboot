/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Excel = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.CustomToolbar = false; // Hide the custom toolbar
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.post("/DefinedNameTable/Excel2?tempFileName="+aceoffixctrl.WindowParams);
        if (response) {
          setAceHtmlCode(response);
        }
      } catch (error) {
        console.error("An error occurred during the request:", error);
      }
    };

    fetchData();

    window.ACEPageMounted = { OnAceoffixCtrlInit};

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
    The table data is filled using backend programming. 
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: "absolute", width: "98%", height: "98%" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Excel;
