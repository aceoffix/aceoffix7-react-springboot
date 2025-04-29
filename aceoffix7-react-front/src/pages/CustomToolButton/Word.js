/* eslint-disable no-undef */
import React, { useState, useEffect} from 'react';
import service from '../../api';
const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState('');
  // The callback function for the initialization event of Aceoffix. You can add custom buttons here.
  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Test Button", "myTest", 0);
  };

  const  myTest= () =>{
    alert("The test button has been clicked.");
}

  const AfterDocumentOpened = () => {
  // Write the code here that will be automatically triggered after the document is opened.
  };

  const openFile = async () => {
    try {
        const response = await service.post('/CustomToolButton/Word');
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

    window.ACEPageMounted = { OnAceoffixCtrlInit, AfterDocumentOpened, myTest};

    return () => {
        delete window.ACEPageMounted;
    };
}, []);

  return (
    <div className="showDoc">
  <p>Click the "Test Button" in the custom toolbar to see the effect.</p>
     {/* This div is used to load the Aceoffix control. The height and width of the div determine the size and position of the control. */}
      <div
        style={{position:'absolute', width: '98%', height: '98%' }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;