import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/home.js';
import Login from './components/login.js';

const App = () => {
  return (
    <div className="root background">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
