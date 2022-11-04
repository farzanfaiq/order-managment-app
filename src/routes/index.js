import React from "react";

// Index
import AreaManger from "../components/area_manager/index";
import Rider from "../components/rider/index";
// Create
import AreaManagerCreate from "../components/area_manager/create";
import RiderCreate from "../components/rider/create";
import Dashboard from "../components/dashboard";
import UserDashboard from "../components/dashboard/userDashboard";
import Userlogin from "../components/auth/user/userlogin";
import Usersignup from "../components/auth/user/usersignup";
import Items from "../components/products/items/items";
import AddItem from "../components/products/items/create";
import {
  PieChartOutlined,
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const AdminRoutes = [
  // Index
  {
    path: "/admin/dashboard",
    component: <Dashboard />,
    label: "Dashboard",
    shownav: true,
    icon: <DashboardOutlined />,
  },
  {
    path: "/admin/area-manager",
    component: <AreaManger />,
    label: "Area Manager",
    shownav: true,
    icon: <UserOutlined />,
  },
  {
    path: "/admin/rider",
    component: <Rider />,
    label: "Rider",
    shownav: true,
    icon: <UserOutlined />,
  },
  {
    path: "/admin/items",
    component: <Items />,
    label: "Items",
    shownav: true,
    icon: <PieChartOutlined />,
  },
  { path: "/admin", component: <Dashboard /> },

  // Create
  { path: "/admin/area-manager/create", component: <AreaManagerCreate /> },
  { path: "/admin/rider/create", component: <RiderCreate /> },
  { path: "/admin/items/create", component: <AddItem /> },

  // Edit
  { path: "/admin/area-manager/edit/:id", component: <AreaManagerCreate /> },
  { path: "/admin/rider/edit/:id", component: <RiderCreate /> },
  { path: "/admin/items/edit/:id", component: <AddItem /> },
];

const UserRoutes = [
  {
    path: "/user/dashboard",
    component: <UserDashboard />,
    label: "Dashboard",
    shownav: true,
    icon: <DashboardOutlined />,
  },
  // { path: "/user/dashboard", component: <UserDashboard /> },
];

export { AdminRoutes, UserRoutes };
