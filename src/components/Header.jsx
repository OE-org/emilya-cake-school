import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/images/emilya-logo-3.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="emilya ismayilova logo" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-links">
            <li className="header__nav-link">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                home
              </NavLink>
            </li>
            <li className="header__nav-link">
              <NavLink
                to="/cake-baku"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                cake baku
              </NavLink>
            </li>
            <li className="header__nav-link">
              <NavLink
                to="/cake-school"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                cake school
              </NavLink>
            </li>
            <li className="header__nav-link">
              <NavLink
                to="/catering"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                catering baku
              </NavLink>
            </li>
            <li className="header__nav-link">
              <a href="#contact">contact</a>
            </li>
          </ul>
          <button className="header__nav-btn">
            <FaBars />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
