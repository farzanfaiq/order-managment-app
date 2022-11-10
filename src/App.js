import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { AppRoutes } from "./routes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/Admin Layout/index";
import Login from "./components/auth/login";
import { LoginProvider } from "./loginContext";
import NothingFound from "./components/notfound";
// import UserMainLayout from "./components/layout/User Layout/index";
import Userlogin from "./components/auth/user/userlogin";
import Usersignup from "./components/auth/user/usersignup";
import Home from "./components/Home";

function App() {
  const role = localStorage.getItem("login_role");
  return (
    <React.Fragment>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* {
              AppRoutes.access ? (
                <Route exact path="/" element={<MainLayout />}>
                  {AppRoutes.map(({ path, component }, key) => (
                    <Route exact path={path} element={component} key={key} />
                  ))}{" "}
                </Route>
              ) : (
                <Route path="*" element={<NothingFound />} />
              )
              // </Route>
            } */}
            <Route exact path="/" element={<MainLayout />}>
              {AppRoutes.map(({ path, component, access }, key) => (
                <Route exact path={path} element={component} key={key} />
              ))}
            </Route>
            {/* <Route exact path="/user" element={<UserMainLayout />}>
              {UserRoutes.map(({ path, component }, key) => (
                <Route exact path={path} element={component} key={key} />
              ))}
            </Route> */}
            <Route exact path="/admin/login" element={<Login />} />
            <Route exact path="/user/login" element={<Userlogin />} />
            <Route exact path="/user/signup" element={<Usersignup />} />
            <Route path="*" element={<NothingFound />} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </React.Fragment>
  );
}

export default App;
