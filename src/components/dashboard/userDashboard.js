import React, { useState } from "react";
import { Typography, Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Header, Content } from "antd/lib/layout/layout";

const UserDashboard = () => {
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
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
        </Sider>
        <Layout>
          <Header
            className="header"
            style={{
              display: "flex",
              justifyContent: "end",
              height: "50px",
              lineHeight: "50px",
            }}
          ></Header>
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
