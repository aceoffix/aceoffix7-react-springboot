/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";

const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");

  const getSelectionText = () => {
      if (aceoffixctrl.word.GetTextFromSelection() != "") {
        alert(aceoffixctrl.word.GetTextFromSelection());
    } else {
        alert("You have not selected any text.");
    }   
  };


  const OnAceoffixCtrlInit = () => {
    // Adds a custom toolbar button that triggers the 'getSelectionText' function when clicked.
    aceoffixctrl.AddCustomToolButton("Retrieve Selected Text Content", "getSelectionText()", 5);
  };

  const openFile = async () => {
    try {
      const response = await service.post("/WordGetSelection/Word");
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
      getSelectionText
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      <div style={{ 
        fontSize: 12, 
        lineHeight: '20px',
        borderBottom: 'dotted 1px #ccc', 
        borderTop: 'dotted 1px #ccc', 
        padding: 5,
        marginBottom: 16
      }}>
        <span style={{ color: 'red' }}>Instructions:</span> 
        Select a portion of text in the Word file, then click the "Retrieve Selected Text Content" button.
        <br />
        Key Code: Right-click and select "View Source" to see the JS function {' '}
        <span style={{ backgroundColor: 'yellow', padding: '2px 4px' }}>
          getSelectionText()
        </span>
      </div>

      <button
        onClick={getSelectionText}
        style={{
          marginBottom: 16,
          padding: '6px 16px',
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}
      >
        Retrieve Selected Text Content
      </button>

      <div 
        style={{ 
          height: 850,
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