import "./AboutOverview.css";
import miteImage from "../../assets/images/mite.jpg";

export default function AboutOverview() {
  return (
    <section className="about-overview">

      <div className="overview-grid">

        <div>

          <h2>
            Who We Are
          </h2>

          <p>
            MITECONS is the consultancy and
            innovation initiative of Mangalore
            Institute of Technology & Engineering.
          </p>

          <p>
            We bring together experienced faculty,
            researchers and industry experts to
            solve engineering, technology and
            research challenges through consultancy,
            testing, training and innovation.
          </p>

        </div>

        <div className="overview-side">

          <div className="stat-box">
            <span>15+</span>
            <p>Years of Faculty Expertise</p>
          </div>

          <div className="stat-box">
            <span>Multi</span>
            <p>Disciplinary Consultancy</p>
          </div>

          <div className="stat-box">
            <span>MITE</span>
            <p>Research & Innovation Ecosystem</p>
          </div>

        </div>

      </div>

      {/* =====================================
          VISION & MISSION
      ===================================== */}

      <div className="mission-section">

        <div>
          <h3>Vision</h3>

          <p>
            To be a trusted consultancy partner
            delivering impactful engineering and
            technology solutions.
          </p>
        </div>

        <div>
          <h3>Mission</h3>

          <p>
            To leverage academic excellence,
            research capabilities and industry
            collaboration to solve real-world
            challenges.
          </p>
        </div>

      </div>

      {/* =====================================
          MITE ADVANTAGE
      ===================================== */}

      <div className="institution-section">

        <div className="institution-image">

          <img
            src={miteImage}
            alt="MITE Campus"
          />

          <div className="image-overlay">
            Mangalore Institute of Technology & Engineering
          </div>

        </div>

        <div className="institution-content">

          <span className="institution-label">
            MITE ADVANTAGE
          </span>

          <h2 className="institution-title">
            Built on the strength of
            academic excellence.
          </h2>

          <p className="institution-description">
            MITECONS leverages the academic,
            research and innovation ecosystem
            of Mangalore Institute of Technology
            & Engineering to deliver consultancy
            solutions grounded in knowledge,
            practical expertise and emerging
            technologies.
          </p>

          <div className="institution-features">

            <div className="feature-item">
              Experienced Faculty & Researchers
            </div>

            <div className="feature-item">
              Modern Laboratories & Facilities
            </div>

            <div className="feature-item">
              Industry & Government Collaboration
            </div>

            <div className="feature-item">
              Research, Innovation & Consultancy
            </div>

            <div className="feature-item">
              Multi-disciplinary Expertise
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}