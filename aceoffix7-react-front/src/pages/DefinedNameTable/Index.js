import React, { useEffect } from "react";
import service from "../../api";
import { AceBrowser } from "js-aceoffix";

const Index = () => {
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

  const open_aceoffix = (url, param) => {
    alert(url);
    AceBrowser.openWindow(url, "width=1200px;height=800px;", param);
  };

  return (
    <div className="Word">
      <div style={{ textAlign: "left", marginTop: "30px" }}>
        <div>
          1. Demonstrate assigning values to a named range in an Excel template
          and retrieving the data from each cell in this range when saving:
          <br />
          <br />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              open_aceoffix("Excel", "");
            }}
          >
            Simple usage of the openTableByDefinedName method
          </a>
        </div>
        <br />
        <br />
        <div>
          2. Demonstrate how to fill data into two different user-defined Excel
          templates without modifying the code, showing different effects:
          <br />
          <br />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              open_aceoffix("Excel2", "temp1.xlsx");
            }}
          >
            Display effect of custom Excel template one
          </a>
          <br />
          <br />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              open_aceoffix("Excel2", "temp2.xlsx");
            }}
          >
            Display effect of custom Excel template two
          </a>
        </div>
        <br />
        <br />
        <div>
          3. Demonstrate the different effects of filling data into the same
          Excel template using the openTable and openTableByDefinedName methods,
          where dynamically filled data automatically expands based on the
          actual number of rows:
          <br />
          <br />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              open_aceoffix("Excel6", "");
            }}
          >
            Open template (test4.xls)
          </a>
          <br />
          <br />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              open_aceoffix("Excel4", "");
            }}
          >
            Effect after filling data into the template (test4.xls) using
            openTable ―― overlapping tables issue
          </a>
          <br />
          <br />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              open_aceoffix("Excel5", "");
            }}
          >
            Effect after filling data into the template (test4.xls) using
            openTableByDefinedName ―― tables do not interfere with each other
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
