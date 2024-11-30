import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/home.js';
import Login from './components/login.js';
import Nav from "./components/nav.js";
import SideNav from "./components/sidenav.js";


import './styles.css';


const App = () => {
  return (
    <div className="root background">

      <Nav />
      <div className="layout">
        <SideNav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
