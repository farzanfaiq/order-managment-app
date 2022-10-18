import React, { useState } from "react";
import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Area Manager", "1", <UserOutlined />),
  getItem("Rider", "2", <UserOutlined />),
];
const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default SidebarLayout;
