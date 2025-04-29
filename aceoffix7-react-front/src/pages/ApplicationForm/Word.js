/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { Modal, message, Form, Input, Button, Radio } from 'antd';
import service from "../../api";

const Word = () => {
  const [aceHtmlCode, setAceHtmlCode] = useState('');
  const [taxModalVisible, setTaxModalVisible] = useState(false);
  const [appModalVisible, setAppModalVisible] = useState(false);
  const [modal, contextHolder] = Modal.useModal();
  const [taxForm] = Form.useForm();
  const [appForm] = Form.useForm();

  // Handle form submissions
  const handleTaxSubmit = (values) => {
    aceoffixctrl.word.SetValueToDataRegion('ACE_name', values.name);
    aceoffixctrl.word.SetValueToDataRegion('ACE_gender', values.gender);
    aceoffixctrl.word.SetValueToDataRegion('ACE_ID', values.idNumber);
    aceoffixctrl.word.SetValueToDataRegion('ACE_date', values.date);
    aceoffixctrl.word.SetValueToDataRegion('ACE_position', values.position);
    aceoffixctrl.word.SetValueToDataRegion('ACE_monthly_income', values.salary);
    setTaxModalVisible(false);
  };

  const handleAppSubmit = (values) => {
    aceoffixctrl.word.SetValueToDataRegion('ACE_taxpayer_name', values.applicantName);
    aceoffixctrl.word.SetValueToDataRegion('ACE_taxpayer_gender', 
      values.applicantGender === '1' ? '☑Male □Female' : '□Male ☑Female');
    aceoffixctrl.word.SetValueToDataRegion('ACE_age', values.age);
    aceoffixctrl.word.SetValueToDataRegion('ACE_nationality', values.nationality);
    aceoffixctrl.word.SetValueToDataRegion('ACE_identification', values.idType);
    aceoffixctrl.word.SetValueToDataRegion('ACE_identification_nubmer', values.applicantId);
    aceoffixctrl.word.SetValueToDataRegion('ACE_reason', values.reason);
    setAppModalVisible(false);
  };

  // Initialize Aceoffix controls
  const initializeAceoffixControls = () => {
    aceoffixctrl.AddCustomToolButton("Fill Certificate", "showCertificateModal()", 3);
    aceoffixctrl.AddCustomToolButton("Fill Application Form", "showApplicationModal()", 3);
  };

  // Modal handlers
  const showCertificateModal = () => {
    aceoffixctrl.word.LocateDataRegion("ACE_certificate");
    aceoffixctrl.Enabled = false;
    setTaxModalVisible(true);
  };

  const showApplicationModal = () => {
    aceoffixctrl.word.LocateDataRegion("ACE_application_form");
    aceoffixctrl.Enabled = false;
    setAppModalVisible(true);
  };

  // Unified close handler
  const handleAfterClose = () => {
    aceoffixctrl.Enabled = true;
  };

  useEffect(() => {
    const loadDocument = async () => {
      try {
        const response = await service.post("/ApplicationForm/Word");
        setAceHtmlCode(response);
      } catch (error) {
        message.error("Failed to load document");
      }
    };

    loadDocument();
    window.ACEPageMounted = { 
      OnAceoffixCtrlInit: initializeAceoffixControls,
      showCertificateModal,
      showApplicationModal
    };

    return () => {
      delete window.ACEPageMounted;
    };
  }, []);

  return (
    <div className="document-container">
      {contextHolder}

      {/* Tax Form Modal */}
      <Modal
        title="Tax Form"
        visible={taxModalVisible}
        onCancel={() => setTaxModalVisible(false)}
        afterClose={handleAfterClose}
        maskClosable={false}
        keyboard={false}
        footer={null}
        destroyOnClose
      >
        <Form form={taxForm} onFinish={handleTaxSubmit}>
          <Form.Item label="Full Name" name="name">
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item label="Gender" name="gender">
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="ID Number" name="idNumber">
            <Input placeholder="Enter your ID number" />
          </Form.Item>

          <Form.Item label="Date" name="date">
            <Input placeholder="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item label="Position" name="position">
            <Input placeholder="Enter your position" />
          </Form.Item>

          <Form.Item label="Monthly Salary (USD)" name="salary">
            <Input type="number" placeholder="Enter monthly amount" />
          </Form.Item>

          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => {
              setTaxModalVisible(false);
              taxForm.resetFields();
            }}>Clear</Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
              Confirm
            </Button>
          </div>
        </Form>
      </Modal>

      {/* Application Form Modal */}
      <Modal
        title="Application Form"
        visible={appModalVisible}
        onCancel={() => setAppModalVisible(false)}
        afterClose={handleAfterClose}
        maskClosable={false}
        keyboard={false}
        footer={null}
        destroyOnClose
      >
        <Form form={appForm} onFinish={handleAppSubmit}>
          <Form.Item label="Full Name" name="applicantName">
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item label="Age" name="age">
            <Input type="number" placeholder="Enter your age" />
          </Form.Item>

          <Form.Item label="Gender" name="applicantGender">
            <Radio.Group>
              <Radio value="1">Male</Radio>
              <Radio value="2">Female</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Nationality" name="nationality">
            <Input placeholder="Enter nationality" />
          </Form.Item>

          <Form.Item label="ID Type" name="idType">
            <Input placeholder="Enter ID type (e.g. Passport)" />
          </Form.Item>

          <Form.Item label="ID Number" name="applicantId">
            <Input placeholder="Enter ID number" />
          </Form.Item>

          <Form.Item label="Application Reason" name="reason">
            <Input.TextArea rows={4} placeholder="State your application reason" />
          </Form.Item>

          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => {
              setAppModalVisible(false);
              appForm.resetFields();
            }}>Clear</Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
              Confirm
            </Button>
          </div>
        </Form>
      </Modal>

      <div
        style={{ width: "auto", height: "900px" }}
        dangerouslySetInnerHTML={{ __html: aceHtmlCode }}
      />
    </div>
  );
};

export default Word;