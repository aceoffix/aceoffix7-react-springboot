/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
import "./Word.css";

const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // File List Data
  const [files] = useState([
    { id: 1, title: "test1.docx", fileName: "test1.docx" },
    { id: 2, title: "test2.docx", fileName: "test2.docx" },
    { id: 3, title: "test3.docx", fileName: "test3.docx" },
  ]);

  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.CustomToolbar = false;
  };

  const switchFile = async (fileName) => {
    try {
      const response = await service.post(
        `/SwitchFile/Word?fileName=${fileName}`
      );
      setAceHtmlCode(response);
      aceoffixctrl.Reload();

    } catch (error) {
      console.error("file load is failed:", error);
    }
  };

  useEffect(() => {
    const initialFile = files[0];
    setSelectedFile(initialFile);
    service
      .post(`/SwitchFile/Word?fileName=${initialFile.fileName}`)
      .then((res) => setAceHtmlCode(res));

    window.ACEPageMounted = {
      OnAceoffixCtrlInit,
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="word-container">
      <div className="sidebar">
        <h3>File List</h3>
        <ul>
          {files.map((file) => (
            <li
              key={file.id}
              className={`file-link ${
                selectedFile?.id === file.id ? "active" : ""
              }`}
              onClick={() => {
                setSelectedFile(file);
                switchFile(file.fileName);
              }}
            >
              {file.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h4>{selectedFile?.title}</h4>
        <div
          style={{ width: "auto", height: "90%" }}
          dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
        />
      </div>
    </div>
  );
};

export default Word;
