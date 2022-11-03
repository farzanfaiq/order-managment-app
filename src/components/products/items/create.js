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
  Spin,
  InputNumber,
} from "antd";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UploadOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { ItemsCreateUpdate } from "../../../api";
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
};

const AddItem = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state != null ? location.state.id : "";
  const [loading, setLoading] = useState(false);
  let fileList = "";
  if (location?.state?.picture) {
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
    setLoading(true);
    ItemsCreateUpdate(id, form, navigate, values);
    console.log(values);
  };
  const { Title } = Typography;
  return (
    <React.Fragment>
      <Row className="my-2 align-items-center">
        <Col span={21}>
          <Title level={3} className="my-2">
            {id != "" ? "Edit" : "Add"} Item{" "}
          </Title>
        </Col>

        <Col span={3}>
          <Button type="pink" htmlType="button">
            <Link to="/admin/items">
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
          <Spin spinning={loading}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input Item Name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="desc"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please input Item Description",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: "Please input Item Price",
                },
                {
                  pattern: /^\d{1,5}$/,
                  message: "Please input only number",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tax"
              label="Tax (in %)"
              rules={[
                // {
                //   required: true,
                //   message: "Please input Tax",
                // },
                {
                  pattern: /^(100|[1-9]?[0-9])$/,
                  message: "Please input number between 1 and 100",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="discount"
              label="Discount (in %)"
              rules={[
                // {
                //   required: true,
                //   message: "Please input Discount",
                // },
                {
                  pattern: /^(100|[1-9]?[0-9])$/,
                  message: "Please input number between 1 and 100",
                },
              ]}
            >
              <Input />
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
                accept="image/*"
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
                {id != "" ? "Update" : "Create"}
              </Button>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default AddItem;
