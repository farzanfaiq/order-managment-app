import React, { useContext, useState } from "react";
import { Typography, Layout } from "antd";
import { Header, Content } from "antd/lib/layout/layout";
import { Menu, Dropdown, Space } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { LogoutUser } from "../../api/index";
import { LoginContext, LoginDispatchContext } from "../../loginContext";


const UserDashboard = () => {

  const setUserDetails = useContext(LoginDispatchContext);
  const authUser = useContext(LoginContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/user/login");
  }
  const items1 = ["1"].map((key) => ({
    key,
    label: localStorage.getItem("loginName"),
    icon: <UserOutlined />,
  }));
  const handleLogout = (e) => {
    e.preventDefault();
    LogoutUser(setUserDetails);
  };

  const menu = (
    <Menu
      className="dropdown-menu"
      items={[
        {
          label: (
            <a className="dropdown-item" onClick={handleLogout}>
              Logout
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );



  const { Title } = Typography;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
        className="ant-layout-has-sider"
      >

        <Layout>
          <Header
            className="header"
            style={{
              display: "flex",
              justifyContent: "end",
              height: "50px",
              lineHeight: "50px",
            }}
          >
            <Dropdown overlay={menu}>
              <a className="menu-dropdown" onClick={(e) => e.preventDefault()}>
                <Space>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={items1}
                    style={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  />
                  <div
                    style={{
                      background: "#D91D6D",
                      padding: "0 20px 0px 0px",
                    }}
                  >
                    <DownOutlined
                      style={{
                        color: "#fff",
                      }}
                    />
                  </div>
                </Space>
              </a>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Title level={3} className="my-2">
              User Dashboard
            </Title>
            <Title level={5} className="my-2">
              Welcome to the Dashboard !
            </Title>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default UserDashboard;
