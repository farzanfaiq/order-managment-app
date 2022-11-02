import React, { useState } from "react";
import "antd/dist/antd.min.css";
import routes from "./routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/index";

import Login from "./components/auth/login";
import { Navigate } from "react-router-dom";
import Userlogin from "./components/auth/user/userlogin";
import Usersignup from "./components/auth/user/usersignup";
import { LoginProvider } from "./loginContext";
import UserDashboard from "./components/dashboard/userDashboard";

function App() {
  const isLoggedIn = localStorage.getItem("authorize");

  // const isLoggedIn = authorize;

  return (
    <React.Fragment>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainLayout />}>
              {routes.map(({ path, component }, key) => (
                <Route exact path={path} element={component} key={key} />
              ))}
            </Route>

            <Route exact path="/admin/login" element={<Login />} />

            <Route path="user/login" element={<Userlogin />} />
            <Route path="user/signup" element={<Usersignup />} />
            <Route path="user/dashboard" element={<UserDashboard />} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </React.Fragment>
  );
}

export default App;
