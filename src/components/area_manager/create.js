import { Row, Col, Button, Form, Input, InputNumber, Typography, message, Upload } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';



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
      message.success('This is a success message');
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
                    <Link to="/area-manager">Back</Link>
                </Button>
              </Col>
          </Row>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <Form {...layout} className="oma-form" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['manager', 'name']}
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
        name={['manager', 'email']}
        label="Email"
         rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
            <Form.Item
              name={['manager', 'phone']}
        label="Phone"
              rules={[
         {
            type: "regexp",
            pattern: new RegExp("([a-zA-Z]{3,30}\\s*)+"),
            message: "Format is wrong"
          },
          {
             required: true,
            message: 'Please input your phone number!',
          },
              ]}
            >
          <InputNumber  addonBefore="03" style={{ width: '100%' }} controls={false} />
            </Form.Item>

            <Form.Item name={['manager', 'areaname']} label="Area Name"
            rules={[
          {
             required: true,
            message: 'Please input your area!',
          },
              ]}
            >
        <Input />
      </Form.Item>
            <Form.Item name={['manager', 'zipcode']} label="Zip Code"
            rules={[
              {
            type: "number",
             required: true,
            message: 'Please input your area zipcode!',
          },
              ]}
            >
        <InputNumber  style={{ width: '100%' }} controls={false} />
            </Form.Item>
            
             <Form.Item name={['manager', 'pic']} label="Picture"
            rules={[
              {
            type: "file",
             required: true,
            message: 'Please upload your pic!',
          },
              ]}
            >
              <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
                className="upload-list-inline"
                maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
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