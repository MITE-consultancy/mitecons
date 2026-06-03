import "./Hero.css";

import heroVideo from "../../assets/videos/hero-video.mp4";

export default function Hero() {
  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
      </div>

    </section>
  );
}