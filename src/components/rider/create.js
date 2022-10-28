import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Typography,
  Upload,
  AutoComplete,
  Spin,
} from "antd";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UploadOutlined, CaretLeftOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { RiderCreateUpdate } from "../../api/index";

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
    RiderCreateUpdate(id, form, navigate, values);
    setLoading(true);
  };

  const { Title } = Typography;

  return (
    <React.Fragment>
      <Row className="my-2 align-items-center">
        <Col span={21}>
          <Title level={3} className="my-2">
            {id != "" ? "Edit" : "Add"} Rider{" "}
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
          <Spin spinning={loading}>
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
                  min: 10,
                  message: "Must be a valid phone number",
                },
              ]}
            >
              <div>
                <span
                  style={{
                    position: "absolute",
                    zIndex: "3",
                    padding: "7px",
                    background: "#eee",
                    top: "1px",
                    left: "1px",
                  }}
                  className="prefix_num"
                >
                  +92
                </span>
                <IMaskInput
                  mask="(300)00-00000"
                  style={{ width: "100%", paddingLeft: "45px" }}
                  onAccept={(value, mask) => console.log(value, mask)}
                  value={location?.state?.phone_number || null}
                  placeholder="Phone eg +92(331)27-40314"
                  className="ant-input ant-input-status-success"
                />
              </div>
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
                {id != "" ? "Update" : "Create"}
              </Button>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </React.Fragment>
  );
};
export default RiderCreate;
