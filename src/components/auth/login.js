import {
  Row,
  Col,
  Typography,
  Button,
  Checkbox,
  Form,
  Input,
  Layout,
} from "antd";
import React, { useContext, useEffect } from "react";
import "./login.scss";
import { LoginAdmin } from "../../api/index";
import { LoginContext, LoginDispatchContext } from "../../loginContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // const customertoken = localStorage.getItem("customer_token");
  // useEffect(() => {
  //   if (customertoken) {
  //     navigate("/user/dashboard");
  //   }
  // }, []);
  const setUserDetails = useContext(LoginDispatchContext);
  const authUser = useContext(LoginContext);

  const navigate = useNavigate();
  const token = localStorage.getItem("admin_token");
  if (token) {
    window.location.replace("/admin/dashboard");
  }

  const onFinish = (values) => {
    LoginAdmin(values, setUserDetails);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Title } = Typography;

  return (
    <Layout
      style={{
        justifyContent: "center",
        background: "#EAEAEA",
        backgroundImage: "url(./loginbg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="h-100"
    >
      <Row
        style={{
          height: "75vh",
        }}
        className="align-items-center"
      >
        <Col
          style={{
            background: "#FB2576",
            height: "100%",
            marginRight: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          span={10}
        >
          <div className="text-center">
            <h1
              style={{
                color: "#fff",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Admin Login
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
        <Col span={12}>
          {/* <img width="150" src="./logo.png" /> */}
          <Title
            style={{
              color: "#3C4048",
            }}
            level={3}
            className="my-2"
          >
            <span style={{ color: "#FB2576" }}>Login</span> to your account to
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
              name="remember"
              valuePropName="unchecked"
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
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};
export default Login;
