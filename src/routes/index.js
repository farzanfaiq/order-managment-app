import React from "react";

// Index
import AreaManger from '../components/area_manager/index';
import Rider from '../components/rider/index';
// Create
import AreaManagerCreate from "../components/area_manager/create";
import RiderCreate from "../components/rider/create";

const routes = [
    // Index
    { path: '/area-manager', component: <AreaManger /> },
    { path: '/rider', component: <Rider /> },

    // Create
    { path: '/area-manager/create', component: <AreaManagerCreate /> },
    { path: '/rider/create', component: <RiderCreate /> }
];

export default routes;
