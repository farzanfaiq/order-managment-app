import { Row, Col, Typography, Button, Checkbox, Form, Input, Layout } from 'antd';
import React from 'react';

import { useNavigate } from "react-router-dom";

const login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    //     let navigate = useNavigate();   
    //    navigate('/user/dashboard');
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    
    const { Title, Paragraph, Text, Link } = Typography;
    return (
        <Layout className='h-100 p-12'>
            <Row className='align-items-center bg-white'>
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
                    <img
                        width="150"
                        src='./logo.png'
                    />
              <Title level={3} className="my-2">Login to your account</Title>
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
                        className='oma-form'
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
        <Input placeholder='Enter Username' />
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
        <Input.Password placeholder='Enter Password' />
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
      </Layout>
            
  );
};
export default login;