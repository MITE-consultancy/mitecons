import "./Hero.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Engineering Expertise for Tomorrow's Infrastructure",
    description:
      "MITECONS provides innovative engineering consultancy services across structural engineering, geotechnical investigations, surveying, environmental engineering and infrastructure development.",
    buttonText: "Explore Services",
  },

  {
    title: "Building Sustainable Communities",
    description:
      "Our multidisciplinary team delivers sustainable and resilient solutions for transportation systems, water resources, urban planning and smart infrastructure projects.",
    buttonText: "View Projects",
  },

  {
    title: "Delivering Excellence Through Innovation",
    description:
      "From concept to execution, MITECONS combines engineering expertise, advanced technologies and industry best practices to create lasting value for clients.",
    buttonText: "Learn More",
  },
];

export default function HeroContentCard() {
  const [currentCard, setCurrentCard] = useState(0);
  const [animate, setAnimate] = useState(true);

  const changeCard = (newIndex: number) => {
    setAnimate(false);

    setTimeout(() => {
      setCurrentCard(newIndex);
      setAnimate(true);
    }, 300);
  };

  const nextCard = () => {
    changeCard((currentCard + 1) % cards.length);
  };

  const prevCard = () => {
    changeCard(
      currentCard === 0
        ? cards.length - 1
        : currentCard - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);

    return () => clearInterval(interval);
  });

  const card = cards[currentCard];

  return (
    <div className="hero-card">

      <div
        className={`hero-card-content ${
          animate ? "content-enter" : "content-exit"
        }`}
      >
        <h1 className="hero-card-title">
          {card.title}
        </h1>

        <p className="hero-card-description">
          {card.description}
        </p>

        <button className="hero-card-button">
          {card.buttonText}
        </button>
      </div>

      <div className="hero-card-footer">

        <div className="hero-card-arrows">

          <button
            className="hero-card-arrow"
            aria-label="Previous Slide"
            onClick={prevCard}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="hero-card-arrow"
            aria-label="Next Slide"
            onClick={nextCard}
          >
            <ChevronRight size={18} />
          </button>

        </div>

        <div className="hero-card-dots">

          {cards.map((_, index) => (
            <span
              key={index}
              className={
                index === currentCard
                  ? "hero-dot active"
                  : "hero-dot"
              }
            />
          ))}

        </div>

      </div>

    </div>
  );
}