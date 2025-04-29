/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Form, Input, Button, Select, Table } from "antd";
import service from "../../api";
import "./Word.css";
const ContractManagement = () => {
  // State management
  const [form] = Form.useForm();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [goodsList, setGoodsList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [aceHtmlCode, setAceHtmlCode] = useState("");

  // Product options data
  const productOptions = [
    {
      id: 1,
      name: "Quantum Computer",
      specification: "550A",
      model: "Entry-level",
      unit: "Unit",
      quantity: 1,
      unitPrice: "100USD",
    },
    {
      id: 2,
      name: "Quantum Computer",
      specification: "550C",
      model: "Flagship",
      unit: "Unit",
      quantity: 1,
      unitPrice: "200USD",
    },
    {
      id: 3,
      name: "Quantum Computer",
      specification: "550W",
      model: "Enthusiast",
      unit: "Unit",
      quantity: 1,
      unitPrice: "300USD",
    },
  ];

  // Initialize Aceoffix control
  useEffect(() => {
    const loadDocument = async () => {
      try {
        const response = await service.post("/FormToDataRegions/Word");
        setAceHtmlCode(response);
      } catch (error) {
        console.log("Failed to load document");
      }
    };

    loadDocument();
    window.ACEPageMounted = {
      OnAceoffixCtrlInit,
      Save,
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  function OnAceoffixCtrlInit() {
    // Callback function for the initialization event of . You can add custom buttons here.
    aceoffixctrl.AddCustomToolButton("Save", "Save", 1);
  }

  function Save() {
    aceoffixctrl.SaveFilePage = "/FormToDataRegions/save";
    aceoffixctrl.WebSave();
  }

  // Add product to list
  const handleAddProduct = () => {
    if (!selectedProduct) return;

    setGoodsList([...goodsList, selectedProduct]);
    updateTotalPrice([...goodsList, selectedProduct]);
    setSelectedProduct(null);
  };

  // Calculate total price
  const updateTotalPrice = (list) => {
    const total = list.reduce(
      (sum, item) => sum + parseInt(item.unitPrice.replace("USD", "")),
      0
    );
    setTotalPrice(total);
  };

  // Form submission handler
  const handleSubmit = async (values) => {
    try {
      // Set form values to data regions
      Object.entries(values).forEach(([key, value]) => {
        aceoffixctrl.word.SetValueToDataRegion(`ACE_${key}`, String(value));
      });
      aceoffixctrl.word.SetValueToDataRegion(
        "ACE_totalPrice",
        totalPrice.toString()
      );

      // Handle table data insertion
      await handleTableInsertion();

    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  // Insert table data into Word
 const handleTableInsertion = async () => {
  try {
    // Set basic form values to Word data regions
    const formValues = form.getFieldsValue();
    Object.entries(formValues).forEach(([field, value]) => {
      aceoffixctrl.word.SetValueToDataRegion(`ACE_${field}`, String(value));
    });
    aceoffixctrl.word.SetValueToDataRegion('ACE_rmb', totalPrice.toString());

    // Create required table rows
    for (let row = 1; row <= goodsList.length; row++) {
      aceoffixctrl.word.SelectTableCell("ACE_table", 1, row, 6);
      aceoffixctrl.word.AppendTableRow();
    }

    // Populate table cells
    goodsList.forEach((item, index) => {
      const rowNumber = index + 2; // Start from row 2 (after header)

      // Column mapping
      const columnData = {
        1: item.name,
        2: item.specification,
        3: item.model,
        4: item.unit,
        5: item.quantity.toString(),
        6: item.unitPrice
      };

      // Iterate through columns 1-6
      for (let col = 1; col <= 6; col++) {
        aceoffixctrl.word.SelectTableCell("ACE_table", 1, rowNumber, col);
        aceoffixctrl.word.SetTextToSelection(columnData[col]);
      }
    });

    message.success('Document updated successfully');
  } catch (error) {
    console.error('Table operation failed:', error);
    message.error('Failed to update document table');
  }
};

  // Table columns configuration
  const tableColumns = [
    { title: "Product Name", dataIndex: "name" },
    { title: "Specification", dataIndex: "specification" },
    { title: "Model", dataIndex: "model" },
    { title: "Unit", dataIndex: "unit" },
    { title: "Quantity", dataIndex: "quantity" },
    { title: "Unit Price", dataIndex: "unitPrice" },
  ];

  return (
    <div className="layout-container">
      {/* Aceoffix Document Viewer */}
      <div
        className="document-viewer-panel"
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />

      {/* Contract Form */}
      <div className="contract-form-panel">
      <div className="form-content-wrapper">
        <Form form={form} onFinish={handleSubmit}>
          {/* Company Information Section */}
          <Form.Item label="Project's Number" name="project_number">
            <Input placeholder="Project Number" />
          </Form.Item>

          <Form.Item label="Purchaser" name="purchaser">
            <Input placeholder="Enter Purchaser Name" />
          </Form.Item>

          <Form.Item label="Supplier" name="supplier">
            <Input placeholder="Enter Supplier Name" />
          </Form.Item>

          <Form.Item label="Buyer's Company" name="buyer_company">
            <Input placeholder="Enter Company Name" />
          </Form.Item>
          <hr></hr>
          <Button
            type="primary"
            onClick={handleAddProduct}
            disabled={!selectedProduct}
          >
            Add to List
          </Button>
          <Form.Item label="Select Product">
            <Select
              placeholder="Choose a product"
              onChange={(value) => setSelectedProduct(JSON.parse(value))}
              value={
                selectedProduct ? JSON.stringify(selectedProduct) : undefined
              }
            >
              {productOptions.map((option) => (
                <Select.Option key={option.id} value={JSON.stringify(option)}>
                  {`${option.name} (${option.specification}, ${option.model}, ${option.unit})`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* Goods List Table */}
          <Table
            className="goods-table"
            columns={tableColumns}
            dataSource={goodsList}
            pagination={false}
            rowKey="id"
          />

          {/* Total Price Display */}
          <div className="total-price-display">
            Total Contract Price: ${totalPrice}
          </div>

          {/* Form Actions */}
          <div className="form-actions-container">
            <Button htmlType="reset">Reset</Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default ContractManagement;
