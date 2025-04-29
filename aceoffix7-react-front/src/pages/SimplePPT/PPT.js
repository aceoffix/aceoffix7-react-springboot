/* eslint-disable no-undef */
import React, { useState, useEffect} from 'react';
import service from '../../api';
const Excel = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState('');
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
    aceoffixctrl.AddCustomToolButton("SaveAs", "SaveAs", 5);
    aceoffixctrl.AddCustomToolButton("FullScreen", "IsFullScreen", 4);
    aceoffixctrl.AddCustomToolButton("Close", "Close", 9);
  };

  const Save = () => {
    // Use the SaveFilePage property to set the Controller route address of the backend save method. This address must start with "/"
    aceoffixctrl.SaveFilePage = "/SimplePPT/save";
    // Write your code here before saving.
    aceoffixctrl.WebSave();
    // Write your code here after saving. For example, you can check the save result using aceoffixctrl.CustomSaveResult.
  };

  const SaveAs = () => {
    aceoffixctrl.ShowDialog(3);
  };
  const Close = () => {
    aceoffixctrl.CloseWindow();
  };
  const IsFullScreen = () => {
    aceoffixctrl.FullScreen = !aceoffixctrl.FullScreen;
  };

  const AfterDocumentOpened = () => {
  // Write the code here that will be automatically triggered after the document is opened.
  };

  const openFile = async () => {
    try {
        const response = await service.post('/SimplePPT/PPT');
        return response;
    } catch (error) {
        console.error('Error fetching file:', error);
        return null;
    }
};

useEffect(() => {
    openFile().then((response) => {
        if (response) {
            setAceHtmlCode(response);
        }
    });

    window.ACEPageMounted = { OnAceoffixCtrlInit, AfterDocumentOpened, Save, SaveAs, Close, IsFullScreen };

    return () => {
        delete window.ACEPageMounted;
    };
}, []);

  return (
    <div className="showDoc">
     {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{position:'absolute', width: '100%', height: '100%' }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Excel;