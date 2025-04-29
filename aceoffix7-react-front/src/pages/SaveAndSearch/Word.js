/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Button, Row, Col, Alert } from "antd";
import service from "../../api";

const WordDocument = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Aceoffix control initialization callback
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
  };

  // Document save handler
  const Save = () => {
    try {
     const params = JSON.parse(aceoffixctrl.WindowParams);
     const id = params.id;
      aceoffixctrl.SaveFilePage = `/SaveAndSearch/save?id=${id}`;
      aceoffixctrl.WebSave();
    } catch (error) {
      console.error("Save operation failed:", error);
      setErrorMessage("Failed to save document");
    }
  };

  // Keyword highlighting control
  const handleKeywordHighlight = (visible) => {
    if (!searchKey.trim()) {
      setErrorMessage("Keyword cannot be empty");
      return;
    }
    setErrorMessage(null);

    try {
      aceoffixctrl.word.HomeKey(6);
      let found = true;
      
      while (found) {
        if (aceoffixctrl.word.FindNextText(searchKey)) {
          aceoffixctrl.word.SetHighlightToSelection(visible ? 7 : 0);
        } else {
          aceoffixctrl.word.HomeKey(6);
          found = false;
        }
      }
    } catch (error) {
      console.error("Highlight operation failed:", error);
      setErrorMessage("Failed to process document content");
    }
  };

  useEffect(() => {
    const initializeDocument = async () => {
      try {
        const params = JSON.parse(aceoffixctrl.WindowParams);
        const fileName = params.fileName;
        const response = await service.post(`/SaveAndSearch/Word?fileName=${fileName}`);
        setAceHtmlCode(response);
        setSearchKey(params.key);
      } catch (error) {
        console.error("Document initialization failed:", error);
        setErrorMessage("Failed to load document");
      }
    };

    window.ACEPageMounted = { 
      OnAceoffixCtrlInit,
      Save
    };

    initializeDocument();

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="document-container">
      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          closable
          style={{ marginBottom: 16 }}
        />
      )}

      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col>
          <Button 
            type="primary"
            onClick={() => handleKeywordHighlight(true)}
          >
            Highlight Keywords
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => handleKeywordHighlight(false)}
          >
            Clear Highlights
          </Button>
        </Col>
      </Row>

      {/* Aceoffix control container */}
      <div
        style={{ 
          position: "relative",
          width: "100%",
          height: "92vh",
          border: "1px solid #d9d9d9",
          borderRadius: 4
        }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default WordDocument;