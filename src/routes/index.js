import React from "react";

import Login from "../components/auth/login";
import AreaManger from "../components/area_manager/index";

const routes = [
  { path: "/login", component: <Login /> },
  { path: "/", component: <AreaManger /> },
];

export default routes;
