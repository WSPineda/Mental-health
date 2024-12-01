import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import SideNav from "./components/sidenav";
import GuidedExercises from "./components/guidedexercises";
import CounselingPage from "./components/counselingpage";
import Donate from "./components/donatepage";
import Contact from "./components/contact";
import NotFound from "./components/NotFound";
import "./styles.css";

const App = () => {
  return (
    <div className="root background" role="application" aria-label="Mental Health Support App">
      <a href="#main-content" className="skip-link">
        Skip to Content
      </a>
      <Nav />
      <div className="layout">
        <SideNav />
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counseling" element={<CounselingPage />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/guided-exercises" element={<GuidedExercises />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
