import React from "react";

// Index
import AreaManger from "../components/area_manager/index";
import Rider from "../components/rider/index";
// Create
import AreaManagerCreate from "../components/area_manager/create";
import RiderCreate from "../components/rider/create";
import Dashboard from "../components/dashboard";
import Userlogin from "../components/auth/user/userlogin";
import Usersignup from "../components/auth/user/usersignup";
import UserDashboard from "../components/dashboard/userDashboard";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

const AdminRoutes = [
  // Index
  { path: "/admin/dashboard", component: <Dashboard />, label: "Dashboard", shownav: true, icon: <PieChartOutlined /> },
  { path: "/admin/area-manager", component: <AreaManger />, label: "Area Manager", shownav: true, icon: <UserOutlined /> },
  { path: "/admin/rider", component: <Rider />, label: "Rider", shownav: true, icon: <UserOutlined /> },

  // Create
  { path: "/admin/area-manager/create", component: <AreaManagerCreate /> },
  { path: "/admin/rider/create", component: <RiderCreate /> },

  // Edit
  { path: "/admin/area-manager/edit/:id", component: <AreaManagerCreate /> },
  { path: "/admin/rider/edit/:id", component: <RiderCreate /> },
];


const UserRoutes = [
  { path: "/user/login", component: <Userlogin /> },
  { path: "/user/signup", component: <Usersignup /> },
  { path: "/user/dashboard", component: <UserDashboard /> },
];

export {
  AdminRoutes,
  UserRoutes
}
