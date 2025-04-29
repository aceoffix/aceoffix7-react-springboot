import { useOutletContext } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import { useState } from "react";
const LoginForm = () => {
  const { handleLogin } = useOutletContext();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      handleLogin(values.username);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #d9d9d9",
        borderRadius: 6,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Form
        form={form}
        initialValues={{ password: "123456" }}
        layout="vertical"
        onFinish={onFinish}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          Login
        </div>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please select a username" }]}
        >
          <Select placeholder="Select username">
            <Select.Option value="John">John</Select.Option>
            <Select.Option value="Jane">Jane</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
              pattern: /^.{6,}$/,
              message: "Password must be at least 6 characters",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter password"
            visibilityToggle={false}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            style={{ height: 40 }}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
