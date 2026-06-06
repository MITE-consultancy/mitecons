import "./ExpertiseDomains.css";

const domains = [
  {
    title: "Structural Engineering",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    description:
      "Advanced structural design, analysis and consultancy services for commercial, industrial and public infrastructure."
  },

  {
    title: "Transportation Engineering",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    description:
      "Highway design, mobility planning, traffic engineering and transportation consultancy."
  },

  {
    title: "Water Resources",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    description:
      "Water supply systems, treatment facilities, watershed studies and sustainability solutions."
  },

  {
    title: "Artificial Intelligence & Data Science",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description:
      "Machine learning, predictive analytics, computer vision and intelligent decision-support systems."
  },

  {
    title: "IoT & Smart Infrastructure",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description:
      "Smart monitoring systems, IoT solutions and digital transformation initiatives."
  }
];

export default function ExpertiseDomains() {
  return (
    <section className="domains-section">

      {domains.map((domain, index) => (

        <div
          key={index}
          className={`domain-row ${
            index % 2 !== 0
              ? "reverse"
              : ""
          }`}
        >

          <div className="domain-image">
            <img
              src={domain.image}
              alt={domain.title}
            />
          </div>

          <div className="domain-content">

            <h2>
              {domain.title}
            </h2>

            <p>
              {domain.description}
            </p>

            <button>
              Learn More →
            </button>

          </div>

        </div>

      ))}

    </section>
  );
}