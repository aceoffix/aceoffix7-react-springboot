/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.Caption =
      "Demo: Pass parameters to the save page and update personnel information";
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
    aceoffixctrl.AddCustomToolButton("Full screen", "IsFullScreen", 4);
  };

  const Save = () => {
    var myObject = {};
    myObject.id = "1";
    var params = new URLSearchParams(myObject);
    var saveUrl = "/SendParameters/save";
    aceoffixctrl.SaveFilePage = `${saveUrl}?${params.toString()}`;
    aceoffixctrl.WebSave();
    alert(aceoffixctrl.CustomSaveResult);
  };

  function IsFullScreen() {
    aceoffixctrl.FullScreen =
        !aceoffixctrl.FullScreen;
}
  const AfterDocumentOpened = () => {
    // Write the code here that will be automatically triggered after the document is opened.
  };

  const openFile = async () => {
    try {
      const response = await service.post("/SendParameters/Word");
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
      Save,
      IsFullScreen
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      <div style={{ fontSize: '14px' }}>
        <div style={{ border: '1px solid black' }}>
          Three ways for Aceoffix to pass values to the save page:
          <br />
          <span>
            1. Pass parameters to the save page by setting the '?' in the URL of
            the save page:
          </span>
          <br />
          <span>
            2. Pass parameters to the save page through the input hidden field:
          </span>
          <br />
          <span>
            3. Pass parameters to the save page through Form controls (here,
            Form controls include controls of types such as input boxes, drop -
            down boxes, radio buttons, checkboxes, and TextArea):
          </span>
          <br />
        </div>
        <span style={{ color: 'red' }}>Update personnel information:</span>
        <br />
        <input id="age" name="age" type="hidden" value={25} />
        <span style={{ color: 'red' }}>Name:</span>
        <input id="userName" name="userName" type="text" value="John" />
        <br />
      </div>
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: 'absolute', width: '99%', height: '84%' }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
