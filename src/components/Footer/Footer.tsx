import "./Footer.css";

import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      {/* =====================================
          TOP
      ===================================== */}

      <div className="footer-top">

        <div className="footer-intro">

          <p>
            MITECONS brings together faculty expertise,
            research, innovation and consultancy services
            to solve engineering and technology challenges
            for industry, government and society.
          </p>

        </div>

        <div className="footer-column">

          <h4>Explore</h4>

          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Team</a>
          <a href="#">Facilities</a>
          <a href="#">Contact</a>

        </div>

        <div className="footer-column">

          <h4>Expertise</h4>

          <a href="#">Structural Engineering</a>
          <a href="#">Transportation</a>
          <a href="#">Water Resources</a>
          <a href="#">AI & Data Science</a>
          <a href="#">IoT & Smart Infrastructure</a>

        </div>

        <div className="footer-column">

          <h4>Institution</h4>

          <a href="#">Industry Consultancy</a>
          <a href="#">Research Collaboration</a>
          <a href="#">Technology Transfer</a>
          <a href="#">Training & Workshops</a>


        </div>

      </div>

      {/* =====================================
          CONNECT
      ===================================== */}

      <div className="footer-connect">

        <span>Connect</span>

        <div className="footer-socials">

          <a href="#">
            <span>LinkedIn</span>
          </a>

          <a href="#">
            <Mail size={22} />
          </a>

          <a href="#">
            <Phone size={22} />
          </a>

          <a href="#">
            <MapPin size={22} />
          </a>

        </div>

      </div>

      <div className="footer-divider" />

      {/* =====================================
          BIG BRAND
      ===================================== */}

      <div className="footer-brand">

        MITECONS

      </div>

      <div className="footer-tagline">

        Engineering Consultancy • Research • Innovation

      </div>

        <div className="footer-institution">
            A Consultancy Initiative of
            <br />
            Mangalore Institute of Technology & Engineering
        </div>

      <div className="footer-divider" />

      {/* =====================================
          BOTTOM
      ===================================== */}

      <div className="footer-bottom">

        <p>
          © 2026 MITECONS. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms of Use
          </a>

          <a href="#">
            Accessibility
          </a>

        </div>

      </div>

    </footer>
  );
}