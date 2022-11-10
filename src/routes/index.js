import React from "react";

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
} from "@ant-design/icons";

const AppRoutes = [
  // Index
  {
    path: "/admin/dashboard",
    component: <Dashboard />,
    label: "Dashboard",
    shownav: true,
    icon: <DashboardOutlined />,
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
  },
  { path: "/admin", component: <Dashboard /> },

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
  { path: "/admin/items/create", component: <AddItem /> },

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
  { path: "/admin/items/edit/:id", component: <AddItem /> },
  // ];

  // const UserRoutes = [
  {
    path: "/user/dashboard",
    component: <UserDashboard />,
    label: "Dashboard",
    shownav: true,
    icon: <DashboardOutlined />,
    access: ["customer"],
  },
  // { path: "/user/dashboard", component: <UserDashboard /> },
];
export const getAllowedRoutes = (routes) => {
  const roles = JSON.parse(localStorage.getItem("login_roles"));
  return routes.filter(({ access }) => {
    if (!access) return true;
    else return intersection(access, roles).length;
  });
};

export { AppRoutes };
