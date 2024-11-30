import React from 'react';
import './sidenav.css'; // CSS for styling the side navigation

const SideNav = () => {
  return (
    <div className="side-navbar">
      <h3 className="side-navbar-title">Get Help</h3>
      <ul className="side-navbar-list">
        <li>
          <a href="/national-helpline" className="side-navbar-link">National Helpline</a>
        </li>
        <li>
          <a href="/disaster-distress-helpline" className="side-navbar-link">Disaster Distress Helpline</a>
        </li>
        <li>
          <a href="/suicide-crisis-helpline" className="side-navbar-link">Suicide Crisis Helpline</a>
        </li>
        <li>
          <a href="/example-help=website" className="side-navbar-link">Example Help Website</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
