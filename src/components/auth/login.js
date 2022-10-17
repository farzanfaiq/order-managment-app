import { Row, Col, Typography, Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const login = () => {
    const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    
    const { Title, Paragraph, Text, Link } = Typography;
    return (
      <Row className='align-items-center h-100'>
          <Col span={12}>
              <div className='text-center'>
                  <img
                      width={500}
                      height={500}
                      src="https://img.freepik.com/free-vector/authentication-concept-illustration_114360-2168.jpg?size=338&ext=jpg&ga=GA1.2.777073396.1599399655" alt=""
                  />
              </div>
          </Col>
          <Col span={12}>
              <Title level={5}>Company Logo</Title>
              <Title level={3}>Login to your account</Title>
              <Form
                name="basic"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
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
            
  );
};
export default login;