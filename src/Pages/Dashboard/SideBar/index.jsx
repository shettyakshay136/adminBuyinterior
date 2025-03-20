import React from 'react';
import './index.css';

const Sidebar = ({ setActivePage, activePage }) => (
  <aside className="sidebar">
    <img
      style={{ width: 160, height: 120 }}
      src="./logoIM.jpeg"
      alt="logo"
      className="logo"
    />
    <nav className="nav-links-Profile">
      <a
        href="#"
        className={`nav-link-Profile ${
          activePage === "dashboard" ? "active" : ""
        }`}
        onClick={() => setActivePage("dashboard")}
      >
        <i className="ri-dashboard-line"></i>
        <span>Dashboard</span>
      </a>
      <a
        href="#"
        className={`nav-link-Profile ${
          activePage === "Downloads" ? "active" : ""
        }`}
        onClick={() => setActivePage("Downloads")}
      >
        <i className="ri-shopping-bag-line"></i>
        <span>Downloads</span>
      </a>
    </nav>
  </aside>
);

export default Sidebar;