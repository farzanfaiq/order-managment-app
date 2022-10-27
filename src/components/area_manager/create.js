import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Typography,
  message,
  Upload,
  AutoComplete,
} from "antd";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UploadOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { IMaskInput } from "react-imask";

import { ManagerCreateUpdate } from "../../api/index";

import { useParams } from "react-router-dom";

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
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

/* eslint-enable no-template-curly-in-string */
const AreaManagerCreate = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state != null ? location.state.id : null;

  let fileList = "";
  if (location.state != null) {
    fileList = [
      {
        uid: "-1",
        name: `${location.state.picture}`,
        status: "done",
        url: `${process.env.REACT_APP_IMAGE_URL}/${location.state.picture}`,
        thumbUrl: `${process.env.REACT_APP_IMAGE_URL}/${location.state.picture}`,
      },
    ];
  }

  const onFinish = (values) => {
    ManagerCreateUpdate(id, form, navigate, values);
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
            {id != null ? "Edit" : "Add"} Area Manager{" "}
          </Title>
        </Col>

        <Col span={3}>
          <Button type="pink" htmlType="button">
            <Link to="/area-manager">
              {" "}
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
          autoComplete="off"
          onFinish={onFinish}
          validateMessages={validateMessages}
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
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone_number"
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
            name="zip_code"
            label="Zip Code"
            mask="#####"
            rules={[
              {
                required: true,
                message: "Please input your area zipcode!",
              },
              {
                pattern: /^\d{5}$/,
                message: "Zipcode must consist on 5 numbers",
              },
            ]}
          >
            <Input type="number" min={0} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="picture"
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
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              className="upload-list-inline"
              defaultFileList={[...fileList]}
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
export default AreaManagerCreate;
