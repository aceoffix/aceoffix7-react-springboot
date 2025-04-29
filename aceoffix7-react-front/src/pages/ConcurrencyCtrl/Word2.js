/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import service from "../../api";

const Word2 = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");

  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.CustomToolbar = false;
  };

  const loadDocument = async () => {
    try {
      const params = JSON.parse(aceoffixctrl.WindowParams);

      const response = await service.post("/ConcurrencyCtrl/Word2", params);

      setAceHtmlCode(response);
    } catch (error) {
      console.error("Failed to load document:", error);
    }
  };

  useEffect(() => {
    loadDocument();

    window.ACEPageMounted = {
      OnAceoffixCtrlInit,
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

export default Word2;
