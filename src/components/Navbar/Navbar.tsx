import "./Navbar.css";
import logo from "../../assets/images/mitecons-logo.png";

import {
  Search,
  Menu,
  X
} from "lucide-react";

import { useState } from "react";

import {
  Link,
  useLocation
} from "react-router-dom";

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">

        {/* =====================================
            LOGO
        ===================================== */}

        <div className="navbar-logo">

          <Link to="/">
            <img
              src={logo}
              alt="MITECONS Logo"
            />
          </Link>

        </div>

        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <div className="navbar-center">

          <ul className="nav-links">

            <li
              className={`nav-item ${
                location.pathname === "/about"
                  ? "active-nav"
                  : ""
              }`}
            >
              <Link to="/about">
                About
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/expertise"
                  ? "active-nav"
                  : ""
              }`}
            >
              <Link to="/expertise">
                Area of Expertise
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/projects"
                  ? "active-nav"
                  : ""
              }`}
            >
              <Link to="/projects">
                Projects
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/facilities"
                  ? "active-nav"
                  : ""
              }`}
            >
              <Link to="/facilities">
                Facilities
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/team"
                  ? "active-nav"
                  : ""
              }`}
            >
              <Link to="/team">
                Team
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/contact"
                  ? "active-nav"
                  : ""
              }`}
            >
              <Link to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* =====================================
            SEARCH
        ===================================== */}

        <div className="search-icon">
          <Search size={18} />
        </div>

        {/* =====================================
            MOBILE CONTROLS
        ===================================== */}

        <div className="mobile-icons">

          <Search size={20} />

          <button
            className="menu-button"
            aria-label="Toggle Menu"
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
          >
            {mobileMenuOpen
              ? <X size={24} />
              : <Menu size={24} />
            }
          </button>

        </div>

      </nav>

      {/* =====================================
          MOBILE MENU
      ===================================== */}

      <div
        className={`mobile-menu ${
          mobileMenuOpen
            ? "mobile-menu-open"
            : ""
        }`}
      >

        <ul>

          <li
            className={
              location.pathname === "/about"
                ? "mobile-active"
                : ""
            }
          >
            <Link
              to="/about"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          <li
            className={
              location.pathname === "/expertise"
                ? "mobile-active"
                : ""
            }
          >
            <Link
              to="/expertise"
              onClick={closeMenu}
            >
              Area of Expertise
            </Link>
          </li>

          <li
            className={
              location.pathname === "/projects"
                ? "mobile-active"
                : ""
            }
          >
            <Link
              to="/projects"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>

          <li
            className={
              location.pathname === "/facilities"
                ? "mobile-active"
                : ""
            }
          >
            <Link
              to="/facilities"
              onClick={closeMenu}
            >
              Facilities
            </Link>
          </li>

          <li
            className={
              location.pathname === "/team"
                ? "mobile-active"
                : ""
            }
          >
            <Link
              to="/team"
              onClick={closeMenu}
            >
              Team
            </Link>
          </li>

          <li
            className={
              location.pathname === "/contact"
                ? "mobile-active"
                : ""
            }
          >
            <Link
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>
    </>
  );
}