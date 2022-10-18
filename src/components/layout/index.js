import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined, 
} from '@ant-design/icons';


import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import BodyLayout from './BodyLayout';
import FooterLayout from './FooterLayout';
import SidebarLayout from './SidebarLayout';


const {  Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
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