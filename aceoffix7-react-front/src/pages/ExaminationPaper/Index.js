/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Table, Button, Card } from 'antd';
import service from "../../api";
import { AceBrowser } from 'js-aceoffix';

const ExamPaper = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: 'Select',
      width: 55,
      render: (_, record) => (
        <input 
          type="checkbox"
          checked={selectedRowKeys.includes(record.id)}
          onChange={e => handleSelectChange(record.id, e.target.checked)}
        />
      )
    },
    {
      title: 'Question Bank ID',
      dataIndex: 'id',
      width: 180
    },
    {
      title: 'Question Bank Name',
      width: 180,
      render: (_, record) => (
        <span>Question {record.id}</span>
      )
    },
    {
      title: 'Action',
      width: 180,
      render: (_, record) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          Edit
        </Button>
      )
    }
  ];

  const fetchData = async () => {
    try {
      const response = await service.get('/ExaminationPaper/index');
      setTableData(response);
    } catch (error) {
      console.error('Data fetch failed:', error);
    }
  };

  const handleSelectChange = (id, checked) => {
    setSelectedRowKeys(prev => 
      checked ? [...prev, id] : prev.filter(key => key !== id)
    );
  };

  const generateExamPaper = () => {
    AceBrowser.openWindow("Compose", 'width=1150px;height=900px;', selectedRowKeys);
  };

  const handleEdit = (row) => {
    AceBrowser.openWindow("Word", 'width=1150px;height=900px;', row.id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '24px'
    }}>
      <Card style={{ width: 620 }}>
        <h3 style={{ marginBottom: 16 }}>Demo: Dynamic Exam Paper Generation</h3>
        <div style={{ 
          width: 600,
          marginBottom: 16,
          textAlign: 'center',
          fontSize: 14
        }}>
          <p>Please select questions first, then click the Generate Exam Paper button to proceed.</p>
        </div>

        <Table
          columns={columns}
          dataSource={tableData}
          rowKey="id"
          bordered
          pagination={false}
        />

        <div style={{ 
          marginTop: 16,
          textAlign: 'center'
        }}>
          <Button 
            type="primary" 
            onClick={generateExamPaper}
          >
            Generate Exam Paper
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ExamPaper;