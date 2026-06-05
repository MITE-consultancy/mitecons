import "./ExpertiseSection.css";
import { useState } from "react";

const expertiseAreas = [
  {
    title: "Structural Engineering",
    description:
      "Innovative structural design, analysis and consultancy services for commercial, institutional and industrial projects.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
  },

  {
    title: "Transportation Engineering",
    description:
      "Roadways, traffic systems, transportation planning and sustainable mobility solutions.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },

  {
    title: "Artificial Intelligence & Data Analytics",
    description:
      "Machine learning, predictive analytics, computer vision and intelligent decision support systems.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  },

  {
    title: "Water Resources",
    description:
      "Water supply systems, treatment plants, watershed management and sustainability consulting.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
  },

  {
    title: "IoT & Smart Infrastructure",
    description:
      "Connected systems, smart monitoring and intelligent infrastructure solutions.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

export default function ExpertiseSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="expertise-section">

      <div className="expertise-header">

        <div>
          <h2>
            Solutions that solve
            <br />
            complex challenges
          </h2>

          <p>
            We bring together engineering expertise,
            research and technology to deliver
            sustainable solutions that create impact.
          </p>
        </div>

        <button className="all-solutions-btn">
          ALL EXPERTISE
        </button>

      </div>

      <div className="expertise-feature">

        <div className="expertise-content">

          <h3>
            {expertiseAreas[selected].title}
          </h3>

          <p>
            {expertiseAreas[selected].description}
          </p>

          <button>
            Learn More →
          </button>

        </div>

        <div className="expertise-image">

          <img
            src={expertiseAreas[selected].image}
            alt={expertiseAreas[selected].title}
          />

        </div>

      </div>

      <div className="expertise-tabs">

        {expertiseAreas.map((area, index) => (
          <button
            key={index}
            className={
              selected === index
                ? "expertise-tab active"
                : "expertise-tab"
            }
            onClick={() => setSelected(index)}
          >
            {area.title}
          </button>
        ))}

      </div>

    </section>
  );
}