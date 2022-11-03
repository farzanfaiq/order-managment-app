import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BodyLayout from "./BodyLayout";
import FooterLayout from "./FooterLayout";
import SidebarLayout from "./SidebarLayout";

const MainLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return navigate("/admin/login");
    }
  }, [token]);

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
