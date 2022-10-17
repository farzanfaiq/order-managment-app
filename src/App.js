import React from "react";
import 'antd/dist/antd.min.css';
import routes from './routes/index';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/layout/index";



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {
            routes.map((({ path, component }, key) => 
              <Route exact path={path} element={component} key={key} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
