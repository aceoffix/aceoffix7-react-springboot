/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useParams } from "react-router-dom";
import service from "../../api";
import { AceBrowser } from "js-aceoffix";

const List = () => {
  const [tableData, setTableData] = useState([]);
  const [imageSrc] = useState(process.env.PUBLIC_URL + "/assets/images/office-1.png");
  const [userName, setUserName] = useState("");
  const { username } = useParams();

  const columns = [
    {
      title: "Document Type",
      key: "type",
      width: 300,
      render: () => <img src={imageSrc} alt="Document Type" />,
    },
    {
      title: "File Name",
      dataIndex: "subject",
      key: "subject",
      width: 300,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            size="small"
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => handleView(record)}
          >
            View
          </Button>
        </>
      ),
    },
  ];

  const fetchData = async () => {
    try {
      const response = await service.get("/ConcurrencyCtrl/index");
      setTableData(response);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleEdit = async (row) => {
    try {
      const response = await service.get("/ConcurrencyCtrl/selectDocById", {
        params: { id: row.id },
      });

      if (!response.editor || response.editor === userName) {
        const params = {
          id: row.id,
          userName,
          subject: row.subject,
          fileName: row.fileName,
        };
        AceBrowser.openWindow(
          "/ConcurrencyCtrl/Word1",
          "width=1200px;height=900px",
          JSON.stringify(params)
        );
      } else {
        alert(
          `Document is being edited by "${response.editor}". Please try later or use View for read-only mode.`
        );
      }
    } catch (error) {
      console.error("Edit error:", error);
    }
  };

  const handleView = (row) => {
    const params = {
      id: row.id,
      userName,
      subject: row.subject,
      fileName: row.fileName,
    };
    AceBrowser.openWindow(
      "/ConcurrencyCtrl/Word2",
      "width=1200px;height=900px",
      JSON.stringify(params)
    );
  };

  useEffect(() => {
    fetchData();
    setUserName(username);
  }, [username]);

  return (
    <div style={{ padding: 24 }}>
      <h3 style={{ float: "right", fontSize: 25, marginRight: 20 }}>
        Current User: {userName}
      </h3>
      <h4 style={{ fontSize: 20, fontWeight: 700 }}>Shared Documents</h4>
      <Table
        columns={columns}
        dataSource={tableData}
        rowKey="id"
        bordered
        pagination={false}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default List;
