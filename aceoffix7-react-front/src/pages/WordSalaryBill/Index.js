import React, {useEffect, useState } from 'react';
import { Button, Card, Table } from 'antd';
import service from "../../api";
import { AceBrowser } from 'js-aceoffix';

const SalaryManagement = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableData, setTableData] = useState([]);

  // 列配置
  const columns = [
    {
      title: 'Operation',
      dataIndex: 'id',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record.id)}>
            Edit
          </Button>
          <Button type="link" onClick={() => handleView(record.id)}>
            View
          </Button>
        </>
      ),
    },
    // 根据实际数据添加其他列
  ];

  // 生成工资条
  const handleGenerate = () => {
    if (selectedRowKeys.length === 0) {
      alert('Please select at least one record');
      return;
    }
    AceBrowser.openWindow("Compose", 'width=1200px;height=800px;', selectedRowKeys);
  };

  // 编辑工作条
  const handleEdit = (id) => {
    AceBrowser.openWindow("Edit", 'width=1000px;height=700px;', id);
  };

  // 查看工作条
  const handleView = (id) => {
    AceBrowser.openWindow("View", 'width=1000px;height=700px;', id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.post("/WordSalaryBill/index");
        if (response) {
            setTableData(response);
         
        }
      } catch (error) {
        console.error("An error occurred during the request:", error);
      }
    };

    fetchData();

    return () => {
    };
  }, []);

  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: '0 auto', 
      padding: 24 
    }}>
      <Card>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ 
            color: 'red', 
            fontSize: 14,
            marginBottom: 16,
            lineHeight: 1.6
          }}>
            <p>1. Click "Edit" in the Operation column to modify employee work records&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>2. Click "View" in the Operation column to check employee work records&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>3. Select multiple records and click "Generate Salary Slips" to create salary documents</p>
          </div>

          <Button 
            type="primary" 
            style={{ marginTop: 24 }}
            onClick={handleGenerate}
          >
            Generate Salary Slips
          </Button>
        </div>

        {/* AntD 表格示例 */}
        <Table
          rowSelection={{
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
          columns={columns}
          dataSource={[tableData]} // 替换为实际数据源
          rowKey="id"
          bordered
          pagination={false}
          style={{ marginTop: 24 }}
        />
      </Card>
    </div>
  );
};

export default SalaryManagement;