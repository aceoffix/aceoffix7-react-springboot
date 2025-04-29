/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Layout, Input, Table, Button, Space } from 'antd';
import service from '../../api';
import './Word.css';

const { Sider, Content } = Layout;

const DataTagEditor = () => {
  const [searchKey, setSearchKey] = useState('');
  const [definedDataTags, setDefinedDataTags] = useState([]);
  const [isFromStart, setIsFromStart] = useState(false);
  const [lastOpTag, setLastOpTag] = useState('');
  const [aceHtmlCode, setAceHtmlCode] = useState('');
  const [availableDataTags, setAvailableDataTags] = useState([]);


  const generateUniqueKey = (record) => {
    return `${record.name}_${record.value}`.replace(/\s+/g, '-');
  };

  const columns = [
    {
      title: 'DataTag',
      dataIndex: 'name',
    },
    {
      title: 'Action',
      render: (_, record) => (
        <Space>
          <Button type="primary" size="small" onClick={() => addDataTag(record)}>Add</Button>
          <Button danger size="small" onClick={() => deleteDataTag(record)}>Delete</Button>
          <Button type="default" size="small" onClick={() => locateDataTag(record)}>Locate</Button>
        </Space>
      ),
    },
  ];

  const addDataTag = (row) => {
    aceoffixctrl.word.SetTextToSelection(row.name);
  };

  const deleteDataTag = (row) => {
    const selectText = aceoffixctrl.word.GetTextFromSelection();
    if (row.name !== selectText) {
      alert(`Please locate '${row.name}' first before deleting.`);
    } else {
      aceoffixctrl.word.SetTextToSelection('');
    }
  };

  const locateDataTag = (row) => {
    aceoffixctrl.word.SelectionCollapse(0);
    
    if (isFromStart) {
      if (lastOpTag === row.name) {
        aceoffixctrl.word.HomeKey(6);
      }
      setIsFromStart(false);
    }

    const found = aceoffixctrl.word.FindNextText(row.name);
    if (!found) {
      alert('Reached end of document.');
      setIsFromStart(true);
    }

    setLastOpTag(row.name);
  };

  const filterAvailableTags = (tags, keyword) => {
    if (!keyword) return tags;
    return tags.filter(tag => 
      tag.name.toLowerCase().includes(keyword.toLowerCase()) ||
      tag.value?.toLowerCase().includes(keyword.toLowerCase())
    );
  };


  const fetchData = async () => {
    try {
      const response = await service.post('/DataTagEdit/Word');
      const rawTags = response.result.dataTags || [];
      

      const processedTags = rawTags.map(tag => ({
        ...tag,
        value: tag.value || ''
      }));

      setDefinedDataTags(processedTags);
      setAceHtmlCode(response.result.aceHtml);
    } catch (error) {
      console.error('Data fetch error:', error);
    }
  };

  useEffect(() => {
    const filtered = filterAvailableTags(definedDataTags, searchKey);
    setAvailableDataTags(filtered);
  }, [searchKey, definedDataTags]);


  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
  };

  const AfterDocumentOpened = () => {
    filterAvailableTags();
  };

  const Save = () => {
    aceoffixctrl.SaveFilePage = "/DataTagEdit/save";
    aceoffixctrl.WebSave();
  };

  useEffect(() => {
    fetchData();

    window.ACEPageMounted = {
      OnAceoffixCtrlInit,
      Save,
      AfterDocumentOpened,
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  useEffect(() => {
    filterAvailableTags();
  }, [searchKey, definedDataTags]);

  return (
    <Layout className="Word">
      <Sider width={500} className="left-container">
        <div className="left-title">Define DataTags</div>
        <Input
          addonBefore={<span className="custom-addon">Available Tags:</span>}
          placeholder="Search DataTags..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Table
          columns={columns}
          dataSource={availableDataTags}
          bordered
          scroll={{ y: 480 }}
          rowKey={generateUniqueKey}  
          pagination={false}
        />
      </Sider>

      <Content className="right-container">
        <div id="podiv" dangerouslySetInnerHTML={{ __html: aceHtmlCode }} />
      </Content>
    </Layout>
  );
};

export default DataTagEditor;