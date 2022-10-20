import React from "react";
import { Header, Content } from "antd/lib/layout/layout";
import { Breadcrumb, Menu, Dropdown, Space } from "antd";
import { Outlet } from "react-router-dom";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import "./layout.scss";

const BodyLayout = () => {
  const items1 = ["1"].map((key) => ({
    key,
    label: "User",
    icon: <UserOutlined />,
  }));
  const menu = (
    <Menu
      className="dropdown-menu"
      items={[
        {
          label: <a className="dropdown-item">Logout</a>,
          key: "1",
        },
      ]}
    />
  );

  return (
    <React.Fragment>
      {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        /> */}

      <Header
        className="header"
        style={{
          display: "flex",
          justifyContent: "end",
          height: "50px",
          lineHeight: "50px",
        }}
      >
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        /> */}
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
        {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}

        <Outlet />
      </Content>
    </React.Fragment>
  );
};
export default BodyLayout;
