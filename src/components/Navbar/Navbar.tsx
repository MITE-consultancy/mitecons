import "./Navbar.css";
import logo from "../../assets/images/mitecons-logo.png";

import {
  ChevronDown,
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

            <li className="nav-item">
              <span>Area of Expertise</span>

              <ChevronDown
                size={12}
                className="nav-chevron"
              />
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

            <li className="nav-item">
              <span>Facilities</span>

              <ChevronDown
                size={12}
                className="nav-chevron"
              />
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

            <li className="nav-item">
              <span>Contact</span>
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

          <li>Area of Expertise</li>

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

          <li>Facilities</li>

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

          <li>Contact</li>

        </ul>

      </div>
    </>
  );
}