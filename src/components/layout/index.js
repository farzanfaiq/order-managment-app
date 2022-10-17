import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import React, { useState } from "react";
import BodyLayout from "./BodyLayout";
import FooterLayout from "./FooterLayout";
import SidebarLayout from "./SidebarLayout";

const MainLayout = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
      className="ant-layout-has-sider"
    >
      <SidebarLayout />
      <Layout className="site-layout">
        <BodyLayout />
        <FooterLayout />
      </Layout>
    </Layout>
  );
};
export default MainLayout;
