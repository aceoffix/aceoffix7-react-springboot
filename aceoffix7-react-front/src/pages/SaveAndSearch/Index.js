import React, { useState, useEffect } from 'react';
import { Input, Table, Button, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import service from "../../api";
import { AceBrowser } from 'js-aceoffix';

const FileSearch = () => {
  const [searchKey, setSearchKey] = useState('');
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const popularKeywords = ['License', 'Word', 'Trial'];

  const columns = [
    {
      title: 'Document Name',
      dataIndex: 'fileName',
      key: 'fileName',
      width: 700,
    },
    {
      title: 'Action',
      key: 'action',
      width: 150,
      render: (_, record) => (
        <Button 
          type="primary" 
          size="small"
          onClick={() => handleEdit(record)}
        >
          Edit
        </Button>
      ),
    },
  ];

  const handleKeywordClick = (keyword) => {
    setSearchKey(keyword);
    const filtered = tableData.filter(item =>
      item.content.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const fetchData = async () => {
    try {
      const response = await service.get('/SaveAndSearch/index');
      setTableData(response);
      setFilteredData(response);
    } catch (error) {
      console.error('Data fetch failed:', error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchKey(value);
    
    if (value) {
      const filtered = tableData.filter(item =>
        item.content.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(tableData);
    }
  };

  const handleEdit = (row) => {
    const params = {
      id: row.id,
      fileName: row.fileName,
      key: searchKey
    };
    AceBrowser.openWindow("Word", 'width=1150px;height=900px;', JSON.stringify(params));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ 
      width: 881,
      margin: '0 auto',
      padding: 24
    }}>
      <Card>
        <h3 style={{textAlign:'center', marginBottom: 16 }}>Demo: Search Files by Keywords</h3>
        
        <Input
          placeholder="Enter keywords to search"
          value={searchKey}
          onChange={handleSearchChange}
          suffix={<SearchOutlined />}
          style={{ 
            marginBottom: 16
          }}
        />

<div style={{ 
          fontSize: 15,
          marginBottom: 16,
          color: '#666'
        }}>
          Popular search keywords: 
          {popularKeywords.map((keyword, index) => (
            <React.Fragment key={keyword}>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleKeywordClick(keyword);
                }}
                style={{
                  color: '#1890ff',
                  marginLeft: 8,
                  textDecoration: 'none'
                }}
              >
                {keyword}
              </a>
              {index < popularKeywords.length - 1 && ' '}
            </React.Fragment>
          ))}
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          bordered
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default FileSearch;