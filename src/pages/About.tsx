import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../components/About/AboutHero";
import AboutOverview from "../components/About/AboutOverview";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <AboutOverview />

      <Footer />
    </>
  );
}