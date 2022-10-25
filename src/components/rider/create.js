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
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UploadOutlined, CaretLeftOutlined } from "@ant-design/icons";

import { useParams, useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { Navigate } from "react-router-dom";

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
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");

  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (id != null) {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      };

      fetch(`${process.env.REACT_APP_API_URL}rider/${id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          form.setFieldsValue({
            name: data.rider.name,
            phone_number: data.rider.phone,
            area_name: data.rider.area_name,
          });

          setFileList([
            {
              uid: "-1",
              name: data.rider.picture,
              status: "done",
              url: `${process.env.REACT_APP_IMAGE_URL + data.rider.picture}`,
            },
          ]);
        });
    }
  }, []);

  const onFinish = (values) => {
    let formData = new FormData();

    console.log(values);

    formData.append("name", values.name);
    formData.append("area_name", values.area_name);
    formData.append("phone_number", values.phone_number);

    if (typeof values.photo !== "undefined") {
      formData.append("photo", values.photo.file);
    }

    let url = `${process.env.REACT_APP_API_URL}rider/store`;
    if (id != null) {
      url = `${process.env.REACT_APP_API_URL}rider/update/${id}`;
    }
    const createObj = {
      method: "POST",
      body: formData,
    };
    fetch(url, createObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        message.success(data.msg);
        navigate("/rider");
        // form.resetFields()
      })
      .catch((error) => {
        console.log(error);
        message.error(error.msg);
        form.resetFields();
      });
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
