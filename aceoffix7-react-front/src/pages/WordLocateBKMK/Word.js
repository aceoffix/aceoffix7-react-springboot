/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";

const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  const [bkName, setBkName] = useState("ACE_test");


  const locateBookMark = () => {
    aceoffixctrl.word.LocateDataRegion(bkName);
  };

  const OnAceoffixCtrlInit = () => {
      // Adds a custom toolbar button that triggers the 'locateBookMark' function when clicked.
      aceoffixctrl.AddCustomToolButton("Locate Bookmark", "locateBookMark()", 5);
  };


  const openFile = async () => {
    try {
      const response = await service.post("/WordLocateBKMK/Word");
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
      locateBookMark
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      <div style={{ fontSize: 'small', marginBottom: 16 }}>
        <div style={{ marginBottom: 8 }}>
          <label>Key Code: Right-click and select "View Source" to see the JS function:</label>
          <span style={{ backgroundColor: 'yellow', padding: '2px 4px', marginLeft: 8 }}>
            function locateBookMark()
          </span>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>
            Position the cursor before the bookmark by entering the desired bookmark name in the text box 
            (you can click on the "Insert" → "Bookmark" in the Office toolbar to view all current bookmarks 
            in the Word document).
          </label>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="txtBkName">Bookmark Name:</label>
          <input 
            id="txtBkName" 
            type="text" 
            value={bkName}
            onChange={(e) => setBkName(e.target.value)}
            style={{ 
              marginLeft: 8,
              padding: '4px 8px',
              border: '1px solid #d9d9d9',
              borderRadius: 4
            }}
          />
          <button 
            onClick={locateBookMark}
            style={{ 
              marginLeft: 16,
              padding: '4px 16px',
              backgroundColor: '#1890ff',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer'
            }}
          >
            Locate Bookmark
          </button>
        </div>
      </div>
      <div 
        style={{ 
          height: 900,
          width: '100%',
          position: 'relative',
          border: '1px solid #f0f0f0',
          borderRadius: 4,
          overflow: 'hidden'
        }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;