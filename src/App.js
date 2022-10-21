import React, { useState } from "react";
import "antd/dist/antd.min.css";
import routes from "./routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/index";

import Login from "./components/auth/login";
import { Navigate } from 'react-router-dom';

function App() {
  const isLoggedIn = localStorage.getItem("authorize");

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {(isLoggedIn) ? (
            <Route exact path="/" element={<MainLayout />}>
              {routes.map(({ path, component }, key) => (
                <Route exact path={path} element={component} key={key} />
              ))}
            </Route>
          ) : (
            <Route exact path="/login" element={<Login />} />
          )}

          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
