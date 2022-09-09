import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { useGlobalContext } from "../context/index";
import { useStickyHeader } from "../hooks";

const Header = () => {
  const { menuToggle, setMenuToggle } = useGlobalContext();
  const location = useLocation();
  const sticky = useStickyHeader(50);
  const headerClasses = `header ${sticky ? "sticky" : ""} `;
  const bgWhite = location.pathname === "/cake-school" ? "bg-white" : "";
  return (
    <header className={`${headerClasses} ${bgWhite}`}>
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
            <li className="header__nav-icons">
              <a
                className="header__nav-icon"
                href="https://wa.me/994552320616"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp />
              </a>
              <a
                className="header__nav-icon"
                href="https://www.instagram.com/cakeschool/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
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
