/* eslint-disable no-undef */
import { useState, useEffect, useRef } from "react";
import { Menu, Modal, message } from "antd";
import service from "../../api";

const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [modal, contextHolder] = Modal.useModal();
  const disableCount = useRef(0);
  const updateAceEnabled = () => {
    aceoffixctrl.Enabled = disableCount.current === 0;
  };

  const menuItems = [
    {
      key: "primary",
      label: "Primary Menu",
      children: [
        {
          key: "message",
          label: "Show Message",
          onClick: () => message.info("This is an information message"),
        },
        {
          key: "input",
          label: "Input Dialog",
          onClick: () => showInputDialog(),
        },
        {
          key: "alert",
          label: "System Alert",
          onClick: () => message.warning("System Alert"),
        },
      ],
    },
    {
      key: "secondary",
      label: "Secondary Menu",
      children: [
        {
          key: "native-alert",
          label: "Native Alert",
          onClick: () => alert("Browser native alert"),
        },
        {
          key: "text-input",
          label: "Text Input",
          onClick: () => showCustomDialog(),
        },
        {
          key: "confirmation",
          label: "Confirmation",
          onClick: () =>
            window.confirm("Confirm this action?") &&
            message.success("Action confirmed"),
        },
      ],
    },
    {
      key: "help",
      label: "Help",
      onClick: () => message.info("Help content"),
    },
  ];

  const showInputDialog = () => {
    disableCount.current += 1;
    updateAceEnabled();
    modal.confirm({
      title: "Input Required",
      content: (
        <input
          placeholder="Please enter your email"
          style={{ width: "100%", marginTop: 10 }}
        />
      ),
      okText: "Submit",
      cancelText: "Cancel",
      onOk: () => {
        disableCount.current -= 1;
        updateAceEnabled();
      },
      onCancel: () => {
        disableCount.current -= 1;
        updateAceEnabled();
      },
    });
  };

  const showCustomDialog = () => {
    disableCount.current += 1;
    updateAceEnabled();
    setDialogOpen(true);
  };

  const closeCustomDialog = () => {
    setDialogOpen(false);
    disableCount.current -= 1;
    updateAceEnabled();
  };

  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Open Dialog", "showCustomDialog()", 0);
  };

  useEffect(() => {
    const loadDocument = async () => {
      try {
        const response = await service.post("/DivMessage/Word");
        setAceHtmlCode(response);
      } catch (error) {
        message.error("Failed to load document");
      }
    };

    loadDocument();
    window.ACEPageMounted = { OnAceoffixCtrlInit,showCustomDialog};

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="document-container">
      {contextHolder}

      <Menu
        mode="horizontal"
        theme="dark"
        items={menuItems}
        triggerSubMenuAction="click"
        onOpenChange={(openKeys) => {
          const isOpening = openKeys.length > 0;
          disableCount.current += isOpening ? 1 : -1;
          disableCount.current = Math.max(0, disableCount.current);
          updateAceEnabled();
        }}
      />

      <Modal
        title="Custom Dialog"
        open={dialogOpen}
        onCancel={closeCustomDialog}
        onOk={closeCustomDialog}
      >
        <p>Custom HTML content area</p>
      </Modal>

      <div
        style={{ width: "auto", height: "850px" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;
