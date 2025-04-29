/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import service from "../../api";
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");

  // Event handler for when the Aceoffix control is initialized.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.CustomToolbar = false;
  };

  // Event handler that runs after the document has been opened.
  const AfterDocumentOpened = () => {
    /**
     * aceoffixctrl.word.InsertWebImage(ImageURL, Transparent, Position);
     * ImageURL: String, the path to the image.
     * Transparent: Boolean, optional parameter indicating whether the image is transparent. Default value: FALSE (not transparent); TRUE means the image is transparent. Note: The transparent color is white.
     * Position: Integer, optional parameter indicating whether the image floats above or below the text. Default value: 4 (image floats above the text). 5 indicates the image is placed behind the text.
     */
    // This method inserts an image at the current cursor position by default. If you want to insert an image at a specific location in the document, you can insert a bookmark at that location, then set the cursor position to the bookmark before inserting the image.
    locateBookMark();
    // Insert the image at the current cursor position with default transparency and floating above the text.
    aceoffixctrl.word.InsertWebImage("/doc/InsertImgForJs/logo.png", false, 4);
  };

  // Function to position the cursor to a bookmark location.
  const locateBookMark = () => {
    var bkName = "ACE_logo";
    // Position the cursor at the bookmark's location.
    aceoffixctrl.word.LocateDataRegion(bkName);
  };
  const openFile = async () => {
    try {
      const response = await service.post("/InsertImgForJs/Word");
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
      AfterDocumentOpened,
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="showDoc">
      {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{ position: "absolute", width: "99%", height: "99%" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
