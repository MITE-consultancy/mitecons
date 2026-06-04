import "./WhyMitecons.css";

const strengths = [
  {
    title: "Faculty Expertise of 15+ Years",
    description:
      "Consultancy services backed by experienced faculty and domain experts across multiple engineering disciplines."
  },

  {
    title: "Research & Innovation",
    description:
      "Combining academic research, innovation and practical engineering solutions for industry challenges.",
    keywords: [
      "AI",
      "Civil",
      "IoT",
      "Data Science",
      "Software",
      "Research"
    ]
  },

  {
    title: "Industry Collaboration",
    description:
      "Working closely with government agencies, industries and institutions to deliver impactful outcomes."
  }
];

export default function WhyMitecons() {
  return (
    <section className="why-section">

      <div className="why-header">

        <h2 className="why-title">
          Why MITECONS
        </h2>

        <p className="why-subtitle">
          Delivering consultancy, innovation and engineering expertise through
          a unique blend of academia and industry.
        </p>

      </div>

      <div className="why-grid">

        {strengths.map((item, index) => (

          <div
            key={index}
            className="why-card"
          >

            <div className="why-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{item.title}</h3>

            {item.keywords && (
              <div className="keyword-slider">

                {item.keywords.map((word) => (
                  <span
                    key={word}
                    className="keyword-pill"
                  >
                    {word}
                  </span>
                ))}

              </div>
            )}

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}