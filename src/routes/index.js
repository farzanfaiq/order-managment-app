import React, { useEffect, useState } from "react";

// Index
import AreaManger from "../components/area_manager/index";
import Rider from "../components/rider/index";
// Create
import AreaManagerCreate from "../components/area_manager/create";
import RiderCreate from "../components/rider/create";
import Dashboard from "../components/dashboard";
import UserDashboard from "../components/dashboard/userDashboard";
import Items from "../components/products/items/items";
import AddItem from "../components/products/items/create";
import { intersection } from "lodash";

import {
  PieChartOutlined,
  UserOutlined,
  DashboardOutlined,
  DashboardFilled,
} from "@ant-design/icons";
import { Navigate, Outlet, Route } from "react-router-dom";
import NothingFound from "../components/notfound";
import { Switch } from "antd";

const AppRoutes = [
  // Index
  {
    path: "/admin/dashboard",
    component: <Dashboard />,
    label: "Dashboard",
    shownav: true,
    icon: <DashboardFilled />,
    access: ["admin", "manager", "rider"],
  },
  {
    path: "/admin/area-manager",
    component: <AreaManger />,
    label: "Area Manager",
    shownav: true,
    icon: <UserOutlined />,
    access: ["admin"],
  },
  {
    path: "/admin/rider",
    component: <Rider />,
    label: "Rider",
    shownav: true,
    icon: <UserOutlined />,
    access: ["admin", "manager"],
  },
  {
    path: "/admin/items",
    component: <Items />,
    label: "Items",
    shownav: false,
    icon: <PieChartOutlined />,
    access: [],
  },
  { path: "/admin", component: <Dashboard />, access: [] },

  // Create
  {
    path: "/admin/area-manager/create",
    component: <AreaManagerCreate />,
    access: ["admin"],
  },
  {
    path: "/admin/rider/create",
    component: <RiderCreate />,
    access: ["admin", "manager"],
  },
  { path: "/admin/items/create", component: <AddItem />, access: [] },

  // Edit
  {
    path: "/admin/area-manager/edit/:id",
    component: <AreaManagerCreate />,
    access: ["admin"],
  },
  {
    path: "/admin/rider/edit/:id",
    component: <RiderCreate />,
    access: ["admin", "manager"],
  },
  { path: "/admin/items/edit/:id", component: <AddItem />, access: [] },
  // ];

  // const UserRoutes = [
  {
    path: "/user/dashboard",
    component: <UserDashboard />,
    label: "Dashboard",
    shownav: true,
    icon: <DashboardFilled />,
    access: ["customer"],
  },
  // { path: "/user/dashboard", component: <UserDashboard /> },
];
const roles = localStorage.getItem("login_roles");
export { AppRoutes };
