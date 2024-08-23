import React from "react";
import { FaBell, FaUser } from "react-icons/fa"; // Import icons

const Navbar = ({ onAddWidgetClick }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {/* Left Side: Navbar Brand and Links */}
          <a className="navbar-brand" href="/">
            WidgetHub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
            </ul>

            {/* Right Side: Search Box, Add Widget Button, Notification Icon, and User Icon */}
            <div className="d-flex ms-auto">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success me-2" type="submit">
                  Search
                </button>
                <button
                  className="btn btn-outline-success me-2"
                  onClick={onAddWidgetClick}
                  type="button"
                >
                  Add Widget
                </button>
              </form>

              {/* Icons for Notification and User */}
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/notifications">
                    <FaBell /> {/* Notification Icon */}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    <FaUser /> {/* User Icon */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
