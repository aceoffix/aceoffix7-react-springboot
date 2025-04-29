/* eslint-disable no-undef */
import { useState, useEffect, useRef } from "react";
import service from "../../api";

const Word1 = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  const [openParams, setOpenParams] = useState(null);
  const paramsRef = useRef();

  useEffect(() => {
    paramsRef.current = openParams;
  }, [openParams]);

  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
  };

  const Save = () => {
    aceoffixctrl.SaveFilePage = `/ConcurrencyCtrl/save?fileName=${paramsRef.current.fileName}`;
    aceoffixctrl.WebSave();
  };

  const AfterDocumentOpened = () => {
    try {
      console.log("Current params:", paramsRef.current);
      updateEditorStatus(paramsRef.current.id, paramsRef.current.userName);
    } catch (error) {
      console.error(error);
    }
  };

  const OnBeforeBrowserClosed = () => {
    try {
      updateEditorStatus(paramsRef.current.id, "");
      aceoffixctrl.CloseWindow(true);
    } catch (error) {
      console.error("Failed to release document lock:", error);
    }
  };

  const updateEditorStatus = async (id, userName) => {
    const response = await service.put(
      `/ConcurrencyCtrl/updateEditorById?id=${id}&userName=${userName}`
    );
    if (response > 0) {
      console.log("Editor status updated successfully");
    }
  };

  const loadDocument = async () => {
    try {
      const params = JSON.parse(aceoffixctrl.WindowParams);
      setOpenParams(params);
      const response = await service.post(`/ConcurrencyCtrl/Word1`, params);
      setAceHtmlCode(response);
    } catch (error) {
      console.error("Failed to load document:", error);
    }
  };

  useEffect(() => {
    loadDocument();
    window.ACEPageMounted = {
      OnAceoffixCtrlInit,
      AfterDocumentOpened,
      Save,
      OnBeforeBrowserClosed,
    };
    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div
      style={{ width: "auto", height: "850px" }}
      dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
    />
  );
};

export default Word1;
