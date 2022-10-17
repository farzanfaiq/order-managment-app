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
} from "antd";

const create = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    //     let navigate = useNavigate();
    //    navigate('/user/areamanager');
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout className="h-100 p-12">
      <Row className="align-items-center bg-white">
        <Col span={12}>
          <div className="text-center">
            <img
              width={500}
              height={500}
              src="https://img.freepik.com/free-vector/authentication-concept-illustration_114360-2168.jpg?size=338&ext=jpg&ga=GA1.2.777073396.1599399655"
              alt=""
            />
          </div>
        </Col>
        <Col span={12}>
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
              <Input placeholder="Enter Area" />
            </Form.Item>

            <Form.Item
              label="ZIP Code"
              name="zip code"
              rules={[
                {
                  required: true,
                  message: "Please input your ZIP Code!",
                },
              ]}
            >
              <Input placeholder="Enter ZIP Code" />
            </Form.Item>

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

export default create;
