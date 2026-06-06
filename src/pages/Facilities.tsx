import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import FacilitiesHero from "../components/FacilitiesPage/FacilitiesHero";
import FacilitiesGrid from "../components/FacilitiesPage/FacilitiesGrid";
import FacilitiesCTA from "../components/FacilitiesPage/FacilitiesCTA";

export default function Facilities() {
  return (
    <>
      <Navbar />

      <FacilitiesHero />

      <FacilitiesGrid />

      <FacilitiesCTA />

      <Footer />
    </>
  );
}