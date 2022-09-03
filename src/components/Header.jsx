import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/index";
import { useStickyHeader } from "../hooks";

const Header = () => {
  let navigate = useNavigate();
  const { menuToggle, setMenuToggle } = useGlobalContext();
  const sticky = useStickyHeader(50);
  const headerClasses = `header ${sticky ? "sticky" : ""} `;
  return (
    <header className={headerClasses}>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src="/images/emilya-logo-5.png" alt="emilya ismayilova logo" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-links">
            <li className="header__nav-link">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Ana səhifə
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
          <button
            className="header__nav-btn"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <FaBars />
          </button>
        </nav>
      </div>
      <div className={`menu-overlay ${menuToggle ? "active" : ""}`}></div>
      <nav
        className={`menu__nav ${menuToggle ? "menu__nav-active" : ""}`}
        onClick={() => setMenuToggle(false)}
      >
        <ul className="menu__nav-links">
          <button
            className="header__nav-btn menu__nav-btn"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <FaTimes />
          </button>
          <li className="header__nav-link">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ana səhifə
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
      </nav>
    </header>
  );
};

export default Header;
