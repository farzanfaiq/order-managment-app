import React from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Checkbox,
  Form,
  Input,
  Layout,
  Select,
} from "antd";
import { IMaskInput } from "react-imask";
import "./user.scss";
import { SignupUser } from "../../../api/index";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const Usersignup = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const token = localStorage.getItem("customer_token");
  if (token) {
    window.location.replace("/user/dashboard");
  }

  const onFinish = (values) => {
    console.log(values);
    SignupUser(form, values, navigate);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Title, Paragraph, Text, Link } = Typography;
  return (
    <Layout
      style={{
        justifyContent: "center",
        background: "#EAEAEA",
        backgroundImage: "url(./loginbg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100%",
      }}
    //   className="h-100"
    >
      <Row
        style={{
          height: "100%",
        }}
        className="align-items-center"
      >
        <Col
          style={{
            background: "#FB2576",
            height: "100vh",
            marginRight: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          span={8}
        >
          <div className="text-center">
            <h1
              style={{
                color: "#fff",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              User Signup
            </h1>
            <h3
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Welcome to Order Management System
            </h3>
          </div>
        </Col>
        <Col span={14}>
          {/* <img width="150" src="./logo.png" /> */}
          <Title
            style={{
              color: "#3C4048",
            }}
            level={3}
            className="my-2"
          >
            <span style={{ color: "#FB2576" }}>Signup</span> to your account to
            manage all the services and explore our tools.
          </Title>
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
            className="oma-form"
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
              <Input
                style={{
                  borderRadius: "38px",
                }}
                placeholder="Please enter your name!"
              />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select gender!",
                },
              ]}
            >
              <Select className="genderSelect" placeholder="Select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
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
                style={{ width: "100%", borderRadius: "38px" }}
                onAccept={(value, mask) => console.log(value, mask)}
                placeholder="Phone eg +92(331)27-40314"
                className="ant-input ant-input-status-success"
              />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
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
              <Input
                style={{
                  borderRadius: "38px",
                }}
                placeholder="Enter Email"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              mask="######"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  pattern: /^\S{6,25}$/,
                  message:
                    "Password must consist of atleast 6 characters and not more than 15 characters",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                min={6}
                style={{
                  borderRadius: "38px",
                }}
                placeholder="Enter Password"
              />
            </Form.Item>
            <Form.Item
              name="c_password"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The password that you entered does not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                min={6}
                style={{
                  borderRadius: "38px",
                }}
                placeholder="Please Confirm Your Password"
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button
                style={{
                  background: "#36454F",
                  border: "#36454F",
                  borderRadius: "38px",
                  height: "50px",
                  transition: "all .3s ease-out",
                }}
                type="primary"
                htmlType="submit"
                className="submit-btn"
              >
                Signup
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Usersignup;
