/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.

  const Button1_onclick = () => {
    var bVisible = aceoffixctrl.Titlebar;
    aceoffixctrl.Titlebar = !bVisible;
  };

  // Hide/Show the custom toolbar
  const Button3_onclick = () => {
    var bVisible = aceoffixctrl.CustomToolbar;
    aceoffixctrl.CustomToolbar = !bVisible;
  };

  // Hide/Show the Office toolbar
  const Button4_onclick = () => {
    var bVisible = aceoffixctrl.OfficeToolbars;
    aceoffixctrl.OfficeToolbars = !bVisible;
  };

  const OnAceoffixCtrlInit = () => {
    // Hide the custom toolbar
    aceoffixctrl.CustomToolbar = false;
  };

  const openFile = async () => {
    try {
      const response = await service.post("/JsControlBars/Word");
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
      Button1_onclick,
      Button3_onclick,
      Button4_onclick,
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      <div className="showDoc">
  <input
    id="Button1"
    type="button"
    value="Hide/Show Title Bar"
    onClick={Button1_onclick}
  />
  <input
    id="Button3"
    type="button"
    value="Hide/Show Custom Toolbar"
    onClick={Button3_onclick}
  />
  <input
    id="Button4"
    type="button"
    value="Hide/Show Office Toolbar"
    onClick={Button4_onclick}
  />
  <br />
  <br />
  <div
    style={{ position: "absolute", width: "99%", height: "99%" }}
    dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
  />
</div>
      <br />
      <br />
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: "absolute", width: "99%", height: "99%" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
