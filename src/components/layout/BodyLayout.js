import React from "react";
import { Header, Content } from "antd/lib/layout/layout";
import { Breadcrumb, Menu } from "antd";
import { Outlet } from "react-router-dom";

const BodyLayout = () => {
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <React.Fragment>
      {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        /> */}

      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>

      <Content
        style={{
          margin: '0 16px',
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
  )
}
export default BodyLayout;