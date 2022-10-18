import React from "react";

import AreaManger from "../components/area_manager/index";
import CreateManager from "../components/area_manager/create";
import Rider from "../components/rider/index";

const routes = [
  { path: "/area-manager", component: <AreaManger /> },
  { path: "/area-manager/create", component: <CreateManager /> },
  { path: "/rider", component: <Rider /> },
];

export default routes;
