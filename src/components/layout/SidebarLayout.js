import React, { useState } from "react";
import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
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
  getItem((
      <Link to="/area-manager">
        Area Manager
      </Link>
  ), '1', <UserOutlined />),
  getItem((
      <Link to="/rider">
        Rider
      </Link>
  ), '2', <DesktopOutlined />),
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
