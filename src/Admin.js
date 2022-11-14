import React from "react";
import { Route } from "react-router-dom";
import { AppRoutes } from "./routes";

export function getAdminRoutes() {
  const routes = [];
  AppRoutes.map(({ path, component, access }, key) => {
    console.log("access..............", access);
    if (access.includes("admin")) {
      routes.push(
        <Route exact path={"/admin" + path} element={component} key={key} />
      );
    }
  });
  return routes;
}

export function getManagerRoutes() {
  const routes = [];
  AppRoutes.map(({ path, component, access }, key) => {
    console.log("access..............", access);
    if (access.includes("manager")) {
      routes.push(
        <Route exact path={"/manager" + path} element={component} key={key} />
      );
    }
  });
  return routes;
}
export function getRiderRoutes() {
  const routes = [];
  AppRoutes.map(({ path, component, access }, key) => {
    console.log("access..............", access);
    if (access.includes("rider")) {
      routes.push(
        <Route exact path={"/rider" + path} element={component} key={key} />
      );
    }
  });
  return routes;
}
export function getUserRoutes() {
  const routes = [];
  AppRoutes.map(({ path, component, access }, key) => {
    console.log("access..............", access);
    if (access.includes("customer")) {
      routes.push(
        <Route exact path={"/customer" + path} element={component} key={key} />
      );
    }
  });
  return routes;
}
