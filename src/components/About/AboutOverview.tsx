import "./AboutOverview.css";

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

    </section>
  );
}