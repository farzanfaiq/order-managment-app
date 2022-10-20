import React from "react";

// Index
import AreaManger from "../components/area_manager/index";
import Rider from "../components/rider/index";
// Create
import AreaManagerCreate from "../components/area_manager/create";
import RiderCreate from "../components/rider/create";
import Dashboard from "../components/dashboard";

const routes = [
  // Index
  { path: "/", component: <Dashboard /> },
  { path: "/area-manager", component: <AreaManger /> },
  { path: "/rider", component: <Rider /> },

  // Create
  { path: "/area-manager/create", component: <AreaManagerCreate /> },
  { path: "/rider/create", component: <RiderCreate /> },

  // Edit
  { path: "/area-manager/edit/:id", component: <AreaManagerCreate /> },
  { path: "/rider/edit/:id", component: <RiderCreate /> },
];

export default routes;
