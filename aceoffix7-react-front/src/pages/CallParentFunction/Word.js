/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.CustomToolbar = false;
  };

  const increaseCount = (value) => {
    CallParentFunc({
      funcName: "updateCount",
      paramJson: value,
      success: function (strRet) {
        alert("Now the value of Count in the parent window is: " + strRet);
      },
      error: function (strRet) {
        if (strRet.indexOf("parentlost") > -1) {
          alert(
            "error: The parent page has been closed, redirected, or refreshed, causing the parent page function to fail to be called!"
          );
        } else {
          console.error(strRet);
        }
      },
    });
  };

  const increaseCountAndClose = (value) => {
    CallParentFunc({
      funcName: "updateCount",
      paramJson: value,
      success: function (strRet) {
        alert("Now the value of Count in the parent window is: " + strRet);
        aceoffixctrl.CloseWindow();
      },
      error: function (strRet) {
        if (strRet.indexOf("parentlost") > -1) {
          alert(
            "error: The parent page has been closed, redirected, or refreshed, causing the parent page function to fail to be called!"
          );
        } else {
          console.error(strRet);
        }
      },
    });
  };

  const openFile = async () => {
    try {
      const response = await service.post("/CallParentFunction/Word");
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
      increaseCount,
      increaseCountAndClose,
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      <input
        type="button"
        value="Increase the value of Count in the parent window by 1"
        onClick={() => increaseCount(1)}
      />
      <input
        type="button"
        value="Increase the value of Count in the parent window by 5 and close the window"
        onClick={() => increaseCountAndClose(5)}
      />
      <br />
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: "absolute", width: "99%", height: "99%" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
