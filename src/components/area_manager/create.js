import { Row, Col, Button, Form, Input, InputNumber, Typography } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AreaManagerCreate = () => {
  const onFinish = (values) => {
    console.log(values);
    };
    const { Title } = Typography;
    return (
        <React.Fragment>
      <Row className="my-2 align-items-center">
              <Col span={21}>
                  <Title>Add Area Manager</Title>
              </Col>
              
              <Col span={3}>
                <Button type="pink" htmlType="button">
                    <Link to="/rider">Back</Link>
                </Button>
              </Col>
          </Row>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <Form {...layout} className="oma-form" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 3,
        }}
      >
        <Button type="pink" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
            </div>
            </React.Fragment>
  );
};
export default AreaManagerCreate;