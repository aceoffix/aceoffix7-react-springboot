import React, { useState, useEffect } from "react";
import service from "../../api";
import { AceBrowser } from "js-aceoffix";

const Index = () => {
  const [userName, setUserName] = useState("Tom");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a GET request to the backend's /index endpoint to retrieve data. This is not necessary in a real application.
        const response = await service.get("/index");
        console.log("result=" + response);
      } catch (error) {
        console.error("An error occurred during the request:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  const openAceoffix = () => {
    AceBrowser.openWindow(
      "/SetDrByUserWord2/Word",
      "width=1200px;height=800px;",
      userName
    );
  };

  return (
    <div className="Word">
        <div style={{ textAlign: "center", margin: "0 auto" }}>
          <div>Please select the login user:</div>
          <br />
          <select
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: "100px" }}
          >
            <option value="Tom">Tom</option>
            <option value="Jack">Jack</option>
          </select>
          <br />
          <br />
          <input type="button" onClick={openAceoffix} value="Open File" />
          <br />
          <br />
          <div style={{ color: "Red" }}>
            Different users will have different editable areas in the document
            after logging in.
          </div>
        </div>
    </div>
  );
};

export default Index;
