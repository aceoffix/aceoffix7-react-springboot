/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { List, Button, Card } from "antd";
import service from "../../api";

const RevisionsList = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState("");
  const [Revisions, setRevisions] = useState([]);
  const [loading, setLoading] = useState(false);

  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
  };

  const Save = () => {
    aceoffixctrl.SaveFilePage = "/RevisionsList/save";
    aceoffixctrl.WebSave();
  };

  const AfterDocumentOpened = () => {
    refreshList();
  };

  // Get current Revisions list
  const refreshList = () => {
    setLoading(true);
    try {
      const RevisionsListJson = JSON.parse(aceoffixctrl.word.RevisionsAsJson);
      const formattedRevisions = RevisionsListJson.map((item) => ({
        id: item.id,
        date: dateFormat(item.date, "yyyy-MM-dd HH:mm"),
        author: item.author,
        content: aceoffixctrl.word.GetTextFromRevision(parseInt(item.id)),
      }));
      setRevisions(formattedRevisions);
    } catch (error) {
      console.error("Failed to fetch Revisions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Convert GMT to CST
  const dateFormat = (date, format) => {
    const d = new Date((date - 25569) * 86400 * 1000);
    d.setHours(d.getHours() - 8);
    const o = {
      "M+": d.getMonth() + 1,
      "d+": d.getDate(),
      "H+": d.getHours(),
      "m+": d.getMinutes(),
      "s+": d.getSeconds(),
      "q+": Math.floor((d.getMonth() + 3) / 3),
      S: d.getMilliseconds(),
    };

    if (/(y+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (d.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }

    for (const k in o) {
      if (new RegExp(`(${k})`).test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
        );
      }
    }
    return format;
  };

  // Navigate to Revision
  const goToRevision = (index) => {
    aceoffixctrl.word.SelectRevision(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.post("/RevisionsList/Word");
        setAceHtmlCode(response);
      } catch (error) {
        console.error("Request failed:", error);
      }
    };

    fetchData();
    window.ACEPageMounted = { OnAceoffixCtrlInit, AfterDocumentOpened, Save };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="Word">
      <div
        style={{
          display: "flex",
          width: "1300px",
          height: "850px",
          gap: 16, // Add spacing
        }}
      >
        {/* Left Revisions list */}
        <Card
          title="Revisions List"
          extra={
            <Button onClick={refreshList} loading={loading}>
              Refresh
            </Button>
          }
          style={{
            width: 300,
          }}
        >
          <List
            loading={loading}
            dataSource={Revisions}
            renderItem={(item) => (
              <List.Item
                style={{ cursor: "pointer", padding: "8px 0" }}
                onClick={() => goToRevision(item.id)}
              >
                <List.Item.Meta
                  title={<span style={{ color: "#1890ff" }}>{item.date}</span>}
                  description={
                    <>
                      <div>[{item.author}]</div>
                      <div style={{ marginTop: 4 }}>{item.content}</div>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        {/* Right operations area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          ></div>

          <div
            style={{
              flex: 1,
              border: "1px solid #f0f0f0",
              borderRadius: 8,
              overflow: "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
          />
        </div>
      </div>
    </div>
  );
};

export default RevisionsList;
