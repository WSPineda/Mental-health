import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidenav.css';

const SideNav = () => {
  return (
    <div className="side-navbar">
      <h3 className="side-navbar-title">Get Help</h3>
      <ul className="side-navbar-list">
        <li>
          <NavLink
            to="/national-helpline"
            className={({ isActive }) =>
              isActive ? 'side-navbar-link active' : 'side-navbar-link'
            }
          >
            National Helpline
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/disaster-distress-helpline"
            className={({ isActive }) =>
              isActive ? 'side-navbar-link active' : 'side-navbar-link'
            }
          >
            Disaster Distress Helpline
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/suicide-crisis-helpline"
            className={({ isActive }) =>
              isActive ? 'side-navbar-link active' : 'side-navbar-link'
            }
          >
            Suicide Crisis Helpline
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/example-help-website"
            className={({ isActive }) =>
              isActive ? 'side-navbar-link active' : 'side-navbar-link'
            }
          >
            Example Help Website
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
