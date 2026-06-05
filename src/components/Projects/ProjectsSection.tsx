import "./ProjectsSection.css";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Transportation Infrastructure",
    description:
      "Design and consultancy services for highways, transportation corridors and urban mobility systems.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },

  {
    title: "Structural Engineering",
    description:
      "Delivering innovative structural solutions for commercial, industrial and public infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
  },

  {
    title: "Smart Water Systems",
    description:
      "Engineering sustainable water resource and treatment solutions for future-ready communities.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
  }
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % projects.length
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextProject = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % projects.length
    );
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) =>
        prev === 0
          ? projects.length - 1
          : prev - 1
    );
  };

  return (
    <section className="projects-section">

      <div className="projects-header">

        <h2 className="projects-title">
          Featured Projects
        </h2>

        <p className="projects-subtitle">
          Delivering engineering excellence through
          innovative and sustainable solutions.
        </p>

      </div>

      <div className="projects-content">

        <div className="projects-image">

          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
          />

        </div>

        <div className="projects-details">

          <h3>
            {projects[currentIndex].title}
          </h3>

          <p>
            {projects[currentIndex].description}
          </p>

          <Link
            to="/projects"
            className="projects-button"
            >
            View Project →
        </Link>

          <div className="projects-footer">

            <div className="projects-dots">

              {projects.map((_, index) => (
                <span
                  key={index}
                  className={
                    currentIndex === index
                      ? "active-dot"
                      : ""
                  }
                />
              ))}

            </div>

            <div className="projects-controls">

              <button
                onClick={prevProject}
                aria-label="Previous Project"
                title="Previous Project"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextProject}
                aria-label="Next Project"
                title="Next Project"
              >
                <ChevronRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}