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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <>
      <nav className="navbar">

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
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            aria-label="Toggle Menu"
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

          <li>
            <Link
              to="/about"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/expertise"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Area of Expertise
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/facilities"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Facilities
            </Link>
          </li>

          <li>
            <Link
              to="/team"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Team
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>
    </>
  );
}