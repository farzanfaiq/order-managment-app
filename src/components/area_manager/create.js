import React from "react";
import {
  Button,
  Divider,
  Table,
  Layout,
  Row,
  Typography,
  Col,
  Input,
  Form,
  Upload,
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;
const CreateManager = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const onFinish = (values) => {
    console.log("Success:", values);
    //     let navigate = useNavigate();
    //    navigate('/user/areamanager');
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <Row className="align-items-start">
        <Col span={24}>
          <Title level={3} className="my-2">
            Add Area Manager
          </Title>
          <Divider />
        </Col>
        <Col span={6}>
          <Form.Item
            label="Uplaod Profile Pic"
            name="upload"
            rules={[
              {
                required: true,
                message: "Please upload your Profile Picture!",
                type: "file",
              },
            ]}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={18}>
          <Title level={3} className="my-2">
            Add Details
          </Title>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="oma-form"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="Enter Name" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input placeholder="Enter Phone Number" />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email_address"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Enter Email Address" />
            </Form.Item>

            <Form.Item
              label="Area"
              name="area"
              rules={[
                {
                  required: true,
                  message: "Please input your area!",
                },
              ]}
            >
              <Select placeholder="Select Area">
                <Option value="Clifton">Clifton</Option>
                <Option value="Tariq Road">Tariq Road</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="ZIP Code"
              name="zip_code"
              rules={[
                {
                  required: true,
                  message: "Please input your ZIP Code!",
                },
              ]}
            >
              <Input placeholder="Enter ZIP Code" />
            </Form.Item>
            {/* <Form.Item
              label="Uplaod Profile Pic"
              name="upload"
              rules={[
                {
                  required: true,
                  message: "Please upload your Profile Picture!",
                  type: "file",
                },
              ]}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item> */}

            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateManager;
