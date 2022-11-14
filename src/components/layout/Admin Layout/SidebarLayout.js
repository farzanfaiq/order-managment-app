import React, { useEffect, useMemo, useState } from "react";
import Sider from "antd/lib/layout/Sider";
import { Collapse, Menu } from "antd";
import { Link, Routes, useLocation } from "react-router-dom";
import { AppRoutes } from "../../../routes/index";
import "./layout.scss";
import { getRoles } from "@testing-library/react";

const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("");
  const role = localStorage.getItem("login_role");
  const items = useMemo(() => {
    let arr = [];
    AppRoutes.forEach((route, key) => {
      if (route.shownav && route.access.indexOf(role) > -1) {
        arr.push({
          key: key,
          label: <Link to={"/" + role + route.path}>{route.label}</Link>,
          icon: route.icon,
          path: "/" + role + route.path,
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
