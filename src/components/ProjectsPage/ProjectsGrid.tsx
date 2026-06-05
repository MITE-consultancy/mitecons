import "./ProjectsGrid.css";

const projects = [
  {
    title: "Urban Transportation Corridor",
    category: "Transportation",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },

  {
    title: "High Rise Structural Design",
    category: "Structural Engineering",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
  },

  {
    title: "Smart Water Resource Management",
    category: "Water Resources",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
  },

  {
    title: "AI Based Infrastructure Analytics",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  },

  {
    title: "IoT Smart Campus Platform",
    category: "IoT",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },

  {
    title: "Industrial Consultancy Project",
    category: "Industry Collaboration",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c"
  }
];

export default function ProjectsGrid() {
  return (
    <section className="projects-grid-section">

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            key={index}
            className="project-card"
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-card-content">

              <span>
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}