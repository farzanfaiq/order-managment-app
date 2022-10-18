import React, { useState } from "react";
import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


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
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];
const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
       <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo my-1">
        <img src="/logo192.png" width={50} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    )
}

export default SidebarLayout;