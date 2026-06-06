import "./FacilitiesGrid.css";

const facilities = [
  {
    title: "Artificial Intelligence & Machine Learning Lab",
    description:
      "Advanced computing facilities supporting AI, Machine Learning, Data Science and research activities."
  },

  {
    title: "IoT & Smart Systems Lab",
    description:
      "Embedded systems, sensor networks and smart infrastructure development facilities."
  },

  {
    title: "Civil Engineering Laboratories",
    description:
      "Material testing, geotechnical engineering, surveying and structural testing facilities."
  },

  {
    title: "Computer Networks & Cloud Lab",
    description:
      "Infrastructure supporting networking, cybersecurity and cloud computing solutions."
  },

  {
    title: "Research & Innovation Centers",
    description:
      "Facilities promoting interdisciplinary research, innovation and consultancy projects."
  },

  {
    title: "High Performance Computing Resources",
    description:
      "Computational resources supporting simulation, AI research and engineering analysis."
  }
];

export default function FacilitiesGrid() {
  return (
    <section className="facilities-grid-section">

      <div className="facilities-header">

        <h2>
          Facilities Supporting Consultancy
        </h2>

        <p>
          Modern infrastructure enabling
          research, testing, innovation and
          industry collaboration.
        </p>

      </div>

      <div className="facilities-grid">

        {facilities.map((facility, index) => (

          <div
            key={index}
            className="facility-card"
          >

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>
              {facility.title}
            </h3>

            <p>
              {facility.description}
            </p>

          </div>

        ))}

      </div>

      <div className="stats-section">

        <div className="stat-item">
          <h3>20+</h3>
          <p>Laboratories</p>
        </div>

        <div className="stat-item">
          <h3>100+</h3>
          <p>Faculty Experts</p>
        </div>

        <div className="stat-item">
          <h3>15+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-item">
          <h3>Multi</h3>
          <p>Disciplinary Expertise</p>
        </div>

      </div>

    </section>
  );
}