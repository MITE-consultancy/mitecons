import "./Navbar.css";
import logo from "../../assets/images/mitecons-logo.png";

import {
  ChevronDown,
  Search,
  Menu,
  X
} from "lucide-react";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        <div className="navbar-logo">
          <img src={logo} alt="MITECONS Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center">

          <ul className="nav-links">

            <li className="nav-item">
              <span>About</span>
              <ChevronDown size={12} className="nav-chevron" />
            </li>

            <li className="nav-item">
              <span>Area of Expertise</span>
              <ChevronDown size={12} className="nav-chevron" />
            </li>

            <li className="nav-item">
              <span>Projects</span>
              <ChevronDown size={12} className="nav-chevron" />
            </li>

            <li className="nav-item">
              <span>Facilities</span>
              <ChevronDown size={12} className="nav-chevron" />
            </li>

            <li className="nav-item">
              <span>Team</span>
              <ChevronDown size={12} className="nav-chevron" />
            </li>

            <li className="nav-item">
              <span>Contact</span>
            </li>

          </ul>

        </div>

        {/* Desktop Search */}
        <div className="search-icon">
          <Search size={18} />
        </div>

        {/* Mobile Controls */}
        <div className="mobile-icons">

          <Search size={20} />

          <button
            className="menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${
          mobileMenuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <ul>

          <li>About</li>

          <li>Area of Expertise</li>

          <li>Projects</li>

          <li>Facilities</li>

          <li>Team</li>

          <li>Contact</li>

        </ul>

      </div>
    </>
  );
}