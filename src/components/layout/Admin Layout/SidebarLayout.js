import React, { useEffect, useMemo, useState } from "react";
import Sider from "antd/lib/layout/Sider";
import { Collapse, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { AdminRoutes } from "../../../routes/index";
import "./layout.scss";

const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("");
  const items = useMemo(() => {
    let arr = [];
    AdminRoutes.forEach((route, key) => {
      if (route.shownav) {
        arr.push({
          key: key,
          label: <Link to={route.path}>{route.label}</Link>,
          icon: route.icon,
          path: route.path,
        });
      }
    });
    return arr;
  }, []);

  useEffect(() => {
    for (var i in items) {
      if (location.pathname.startsWith(items[i].path)) {
        setSelectedKey(items[i].key);
      }
    }
  }, [location]);
  console.log("items", items);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      // collapsedWidth="0"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        selectedKeys={[selectedKey.toString()]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default SidebarLayout;
