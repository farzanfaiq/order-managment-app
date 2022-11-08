import React, { useContext, useEffect } from "react";
import { Header, Content } from "antd/lib/layout/layout";
import { Menu, Dropdown, Space } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import "./layout.scss";
import { LogoutUser } from "../../../api/index";
import { LoginContext, LoginDispatchContext } from "../../../loginContext";

const BodyLayout = () => {
  const setUserDetails = useContext(LoginDispatchContext);
  const authUser = useContext(LoginContext);

  const navigate = useNavigate();
  const token = localStorage.getItem("admin_token");
  if (!token) {
    navigate("/");
  }
  const items1 = ["1"].map((key) => ({
    key,
    label: localStorage.getItem("admin_loginName"),
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

  return (
    <React.Fragment>
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

      <Content style={{ margin: "0 16px" }}>
        <Outlet />
      </Content>
    </React.Fragment>
  );
};
export default BodyLayout;