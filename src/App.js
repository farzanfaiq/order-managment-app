import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { AdminRoutes, UserRoutes } from "./routes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/index";
import Login from "./components/auth/login";
import { LoginProvider } from "./loginContext";

function App() {

  return (
    <React.Fragment>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainLayout />}>
              {AdminRoutes.map(({ path, component }, key) => (
                <Route exact path={path} element={component} key={key} />
              ))}
            </Route>

            <Route exact path="/admin/login" element={<Login />} />
            
            {UserRoutes.map(({ path, component }, key) => (
              <Route exact path={path} element={component} key={key} />
            ))}
            
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </React.Fragment>
  );
}

export default App;
