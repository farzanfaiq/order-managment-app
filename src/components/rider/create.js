import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Typography,
  Upload,
  AutoComplete,
} from "antd";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UploadOutlined, CaretLeftOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { RiderCreateUpdate } from '../../api/index';

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const RiderCreate = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state != null ? location.state.id : null;

  let fileList = "";
  if (location.state != null) {
    fileList = [{
      uid: '-1',
      name: `${location.state.picture}`,
      status: 'done',
      url: `${process.env.REACT_APP_IMAGE_URL}/${location.state.picture}`,
      thumbUrl: `${process.env.REACT_APP_IMAGE_URL}/${location.state.picture}`,
    }];
  }

  const onFinish = (values) => {
    RiderCreateUpdate(id, form, navigate, values);
  };

  const { Title } = Typography;
  const [options, setOptions] = useState([]);
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  return (
    <React.Fragment>
      <Row className="my-2 align-items-center">
        <Col span={21}>
          <Title level={3} className="my-2">
            {id != null ? "Edit" : "Add"} Rider{" "}
          </Title>
        </Col>

        <Col span={3}>
          <Button type="pink" htmlType="button">
            <Link to="/rider">
              <CaretLeftOutlined /> Back
            </Link>
          </Button>
        </Col>
      </Row>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Form
          {...layout}
          className="oma-form"
          name="nest-messages"
          form={form}
          onFinish={onFinish}
          validateMessages={validateMessages}
          autoComplete="off"
          initialValues={location.state}
        >
          <Form.Item
            name="name"
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
            name="phone"
            label="Phone"
            mask="#########"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
              {
                min: 16,
                message: "Must be a valid phone number",
              },
            ]}
          >
            <IMaskInput
              mask="+{92}(300)00-00000"
              style={{ width: "100%" }}
              onAccept={(value, mask) => console.log(value, mask)}
              placeholder="Phone eg +92(331)27-40314"
              className="ant-input ant-input-status-success"
            />
          </Form.Item>

          <Form.Item
            name="area_name"
            label="Area Name"
            rules={[
              {
                required: true,
                message: "Please input your area!",
              },
            ]}
          >
            <AutoComplete
              options={options}
              onSelect={onSelect}
              onSearch={onSearch}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="photo"
            label="Picture"
            rules={[
              {
                type: "file",
                required: true,
                message: "Please upload your pic!",
              },
            ]}
          >
            <Upload
              listType="picture"
              className="upload-list-inline"
              defaultFileList={fileList}
              accept="image/*"
              maxCount={1}
              beforeUpload={() => false}
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
              {id != null ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
};
export default RiderCreate;
