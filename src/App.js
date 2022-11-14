import React, { Component, Fragment, useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import { AppRoutes } from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Admin Layout/index";
import Login from "./components/auth/login";
import { LoginProvider } from "./loginContext";
import NothingFound from "./components/notfound";
// import UserMainLayout from "./components/layout/User Layout/index";
import Userlogin from "./components/auth/user/userlogin";
import Usersignup from "./components/auth/user/usersignup";
import Home from "./components/Home";
import {
  getAdminRoutes,
  getManagerRoutes,
  getRiderRoutes,
  getUserRoutes,
} from "./Admin";

const role = localStorage.getItem("login_role");

function App() {
  // const [role, setRole] = useState([]);
  // useEffect(() => {
  //   setRole(localStorage.getItem("login_role"));
  // }, []);
  return (
    <React.Fragment>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/admin/login" element={<Login />} />
            <Route exact path="/customer/login" element={<Userlogin />} />
            <Route exact path="/customer/signup" element={<Usersignup />} />
            <Route exact path="/" element={<Home />} />

            <Route exact path="/" element={<MainLayout />}>
              {getAdminRoutes()}
              {getManagerRoutes()}
              {getRiderRoutes()}
              {getUserRoutes()}
            </Route>
            {/* <Route exact path="/user" element={<UserMainLayout />}>
              {UserRoutes.map(({ path, component }, key) => (
                <Route exact path={path} element={component} key={key} />
              ))}
            </Route> */}
            <Route path="*" element={<NothingFound />} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </React.Fragment>
  );
}

export default App;
