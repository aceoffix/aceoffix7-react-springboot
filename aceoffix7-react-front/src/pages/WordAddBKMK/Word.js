/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";

const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  const [bkName, setBkName] = useState("test");
  const [bkText, setBkText] = useState("[test]");


  const handleBkNameChange = (e) => setBkName(e.target.value);
  const handleBkTextChange = (e) => setBkText(e.target.value);

  const addBookMark = () => {
    aceoffixctrl.word.AddDataRegion(bkName, bkText);
  };

  const delBookMark = () => {
    aceoffixctrl.word.DeleteDataRegion(bkName);
  };


  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Add BookMark", "addBookMark()", 5);
    aceoffixctrl.AddCustomToolButton("Delete BookMark", "delBookMark()", 5);
  };

  const AfterDocumentOpened = () => {};

  const openFile = async () => {
    try {
      const response = await service.post("/WordAddBKMK/Word");
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
      addBookMark,
      delBookMark
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      <div style={{ color: 'red', marginBottom: 16 }}>
        Note: When inserting a bookmark, please enter the name and text of the bookmark first. 
        When deleting a bookmark, please enter the corresponding bookmark name. 
        Bookmark names must be unique when inserting.
      </div>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="txtBkName">BookMark Name:</label>
        <input 
          type="text" 
          id="txtBkName" 
          name="txtBkName" 
          value={bkName}
          onChange={handleBkNameChange}
          style={{ marginLeft: 8 }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="txtBkText">BookMark Value:</label>
        <input 
          type="text" 
          id="txtBkText" 
          name="txtBkText" 
          value={bkText}
          onChange={handleBkTextChange}
          style={{ marginLeft: 8 }}
        />
      </div>

      <div style={{ marginBottom: 24 }}>
        <button 
          type="button" 
          onClick={addBookMark}
          style={{ marginRight: 16 }}
        >
          Add Bookmark
        </button>
        
        <button 
          type="button" 
          onClick={delBookMark}
        >
          Delete Bookmark
        </button>
      </div>

      <div
        style={{ 
          position: "absolute", 
          width: "99%", 
          height: "90%",
          border: "1px solid #f0f0f0",
          borderRadius: 4
        }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;