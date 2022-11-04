import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout } from "antd";
import React, { useEffect } from "react";
import UserBodyLayout from "../User Layout/UserBodyLayout";
import FooterLayout from "../Admin Layout/FooterLayout";
import UserSidebar from "../User Layout/UserSidebar";
import { useNavigate } from "react-router-dom";

const UserMainLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("customer_token");

  useEffect(() => {
    if (!token) {
      return navigate("/user/login");
    }
  }, [token]);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
      className="ant-layout-has-sider"
    >
      <UserSidebar />
      <Layout className="site-layout">
        <UserBodyLayout />
        <FooterLayout />
      </Layout>
    </Layout>
  );
};
export default UserMainLayout;
