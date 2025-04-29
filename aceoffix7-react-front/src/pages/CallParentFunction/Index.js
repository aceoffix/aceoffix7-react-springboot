import React, { useRef, useEffect } from "react";
import service from "../../api";
import { AceBrowser } from "js-aceoffix";
const Index = () => {
  const count = useRef(0);
  const inputText = useRef(null);

  const updateCount = (value) => {

    count.current = count.current + parseInt(value);

    if (inputText.current) {
      console.log(inputText.current.value);
      inputText.current.value = count.current;
    }

    return count.current.toString();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate sending a GET request to the backend's /index interface to return data. This is not required in an actual application.
        const response = await service.get("/index");
        console.log("result=" + response);
      } catch (error) {
        console.error("The request has gone wrong:", error);
      }
    };

    fetchData();

    window.ACEPageMounted = {
       updateCount,
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  const handleClick = (url, size, param) => {
    AceBrowser.openWindow(url, size, param);
  };

  return (
    <div className="page-container">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleClick(
            "/CallParentFunction/Word",
            "width=1200px;height=900px;",
            ""
          );
        }}
      >
        Open a Word Document Using AceBrowser
      </a>
      <br /><br />
      <div>
        Count=
        <input ref={inputText} type="text" defaultValue="0" />
      </div>
    </div>
  );
};

export default Index;
