import React, { useState } from "react";
import "antd/dist/antd.min.css";
import routes from "./routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/index";

import Login from "./components/auth/login";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ setisLoggedIn }}>
        <BrowserRouter>
          <Routes>
            {isLoggedIn ? (
              <Route exact path="/" element={<MainLayout />}>
                {routes.map(({ path, component }, key) => (
                  <Route exact path={path} element={component} key={key} />
                ))}
              </Route>
            ) : (
              <Route exact path="/" element={<Login />} />
            )}
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
