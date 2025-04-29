/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { Layout, Input, Table, Button, Space } from 'antd';
import service from "../../api";
import './Word.css';

const { Sider, Content } = Layout;

const DataRegionEditor = () => {
  const [searchKey1, setSearchKey1] = useState('');
  const [searchKey2, setSearchKey2] = useState('');
  const [definedDataRegions, setDefinedDataRegions] = useState([]);
  const [dataRegions, setDataRegions] = useState([]);
  const [availableDataRegions, setAvailableDataRegions] = useState([]);
  const [aceHtmlCode, setAceHtmlCode] = useState('');
  const definedRegionsRef = useRef(definedDataRegions);

  const columnsAvailable = [
    {
      title: 'Data Region',
      dataIndex: 'name',
      width: 160,
    },
    {
      title: 'Display Text',
      dataIndex: 'value',
      width: 140,
    },
    {
      title: 'Action',
      render: (_, record, index) => (
        <Button type="primary" size="small" onClick={() => addRegion(index, record)}>
          Add
        </Button>
      ),
    },
  ];

  const columnsAdded = [
    {
      title: 'DataRegion',
      dataIndex: 'name',
    },
    {
      title: 'Action',
      render: (_, record, index) => (
        <Space>
          <Button danger size="small" onClick={() => deleteRegion(index, record)}>
            Delete
          </Button>
          <Button type="default" size="small" onClick={() => locateRegion(record)}>
            Locate
          </Button>
        </Space>
      ),
    },
  ];

  const loadData = () => {
    const currentDataRegions = JSON.parse(aceoffixctrl.word.DataRegionsAsJson);
    setDataRegions(currentDataRegions);

    filterAvailableRegions(definedRegionsRef.current, currentDataRegions, searchKey1);
    filterAddedRegions(currentDataRegions, searchKey2);
  };

  const addRegion = (index, row) => {
    aceoffixctrl.word.AddDataRegion(row.name, row.value);
    const newAvailable = [...availableDataRegions];
    newAvailable.splice(index, 1);
    setAvailableDataRegions(newAvailable);

    aceoffixctrl.word.RefreshDataRegionList();
    setDataRegions(prev => [...prev, { name: row.name, value: row.value }]);
  };

  const deleteRegion = (index, row) => {
    const currentValue = aceoffixctrl.word.GetValueFromDataRegion(row.name);
    const defaultValue = definedDataRegions.find(
      item => item.name === row.name
    )?.value || '';

    setAvailableDataRegions(prev => [
      ...prev,
      { name: row.name, value: currentValue || defaultValue }
    ]);

    aceoffixctrl.word.RefreshDataRegionList();
    aceoffixctrl.word.DeleteDataRegion(row.name);
    setDataRegions(prev => prev.filter((_, i) => i !== index));
  };

  const locateRegion = (row) => {
    aceoffixctrl.word.LocateDataRegion(row.name);
  };

  const filterAvailableRegions = (definedDR, currentDR, keyword) => {
    let filtered = definedDR.filter(defItem => 
      !currentDR.some(drItem => drItem.name === defItem.name)
    );

    if (keyword) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    setAvailableDataRegions(filtered);
  };

  const filterAddedRegions = (currentDR, keyword) => {
    if (keyword) {
      const filtered = currentDR.filter(item =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setDataRegions(filtered);
    }
  };

  const fetchData = async () => {
    try {
      const response = await service.post("/DataRegionEdit/Word");
      setAceHtmlCode(response.result.aceHtml);
      setDefinedDataRegions(response.result.dataRegions);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const OnAceoffixCtrlInit = () => {
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
  };
  
  const AfterDocumentOpened = () => {
    loadData();
  };
  
  const Save = () => {
    aceoffixctrl.SaveFilePage = "/DataRegionEdit/save";
    aceoffixctrl.WebSave();
  };

  useEffect(() => {
    fetchData();
    definedRegionsRef.current = definedDataRegions;

    window.ACEPageMounted = {
      OnAceoffixCtrlInit,
      AfterDocumentOpened,
      Save
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, [definedDataRegions]);

  return (
    <Layout className="Word">
      <Sider width={500} className="left-container">
        <div className="left-title">Define Data Regions</div>
        <Input
          addonBefore={<span className="custom-addon">To Add Regions:</span>}
          placeholder="Enter keyword to search data regions"
          value={searchKey1}
          onChange={(e) => {
            setSearchKey1(e.target.value);
            loadData();
          }}
          style={{ marginBottom: 16 }}
        />
        <Table
          columns={columnsAvailable}
          dataSource={availableDataRegions}
          bordered
          scroll={{ y: 480 }}
          rowKey="name"
          pagination={false}
        />

        <Input
          addonBefore={<span className="custom-addon">Added Regions:</span>}
          placeholder="Enter keyword to search data regions"
          value={searchKey2}
          onChange={(e) => {
            setSearchKey2(e.target.value);
            loadData();
          }}
          style={{ margin: '20px 0 16px' }}
        />
        <Table
          columns={columnsAdded}
          dataSource={dataRegions}
          bordered
          scroll={{ y: 480 }}
          rowKey="name"
          pagination={false}
        />
      </Sider>

      <Content className="right-container">
        <div id="podiv" dangerouslySetInnerHTML={{ __html: aceHtmlCode }} />
      </Content>
    </Layout>
  );
};

export default DataRegionEditor;