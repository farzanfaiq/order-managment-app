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
import { Link } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";

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
const RiderCreate = () => {
  const { id } = useParams();
  const [form] = Form.useForm();

  let fileList = [];
  if (id != null) {
    form.setFieldsValue({
      name: "Farjad",
      phone_number: "289327234983",
      area: "Karachi",
    });

    fileList = [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ];
  }

  const onFinish = (values) => {
    message.success("This is a success message");
    console.log(values);
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
          <Title level={3} className="my-2">{id != null ? "Edit" : "Add"} Rider </Title>
        </Col>

        <Col span={3}>
          <Button type="pink" htmlType="button">
            <Link to="/rider">Back</Link>
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
            name="phone_number"
            label="Phone"
            mask="#########"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
              {
                pattern: /^\d{9}$/,
                message: "must be a valid phone number",
              },
            ]}
          >
            <Input
              type="number"
              min={0}
              addonBefore="03"
              style={{ width: "100%" }}
              controls={false}
            />
          </Form.Item>

          <Form.Item
            name="area"
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
            name="pic"
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
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              className="upload-list-inline"
              defaultFileList={[...fileList]}
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
              {id != null ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
};
export default RiderCreate;
