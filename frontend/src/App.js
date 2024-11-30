import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/home.js';
import Nav from "./components/nav.js";
import SideNav from "./components/sidenav.js";
import GuidedExercises from './components/guidedexercises.js';
import CounselingPage from './components/counselingpage.js';
import Donate from './components/donatepage.js';
import Contact from './components/contact.js';


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
          <Route path="/counseling" element={<CounselingPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/guided-exercises" element={<GuidedExercises />} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
