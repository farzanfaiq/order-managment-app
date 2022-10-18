import { Row, Col, Typography, Button, Checkbox, Form, Input, Layout } from 'antd';
import React from 'react';
import { Navigate } from "react-router-dom";

const login = () => {
  const onFinish = (values) => {
//       fetch("http://127.0.0.1:8000/api/auth/login", {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify(values)
// })
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
        // console.log('Success:', values);
       <Navigate to="/rider"></Navigate>
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    
    const { Title} = Typography;
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
        <Button type="pink" htmlType="submit">
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