import React from "react";
import "antd/dist/antd.min.css";
import routes from "./routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/index";

import Login from './components/auth/login';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Login />} />
          <Route exact path="/" element={<MainLayout />} >
              {
                routes.map((({ path, component }, key) => 
                  <Route path={path} element={component} key={key} />
                ))
              }
            </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
