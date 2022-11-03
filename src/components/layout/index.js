import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import BodyLayout from "./BodyLayout";
import FooterLayout from "./FooterLayout";
import SidebarLayout from "./SidebarLayout";

const MainLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    alert("token. vs 12.....", token);
    navigate("/admin/login");
  }
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
