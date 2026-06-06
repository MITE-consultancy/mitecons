import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ExpertiseHero from "../components/ExpertisePage/ExpertiseHero";
import ExpertiseDomains from "../components/ExpertisePage/ExpertiseDomains";
import ExpertiseCTA from "../components/ExpertisePage/ExpertiseCTA";

export default function Expertise() {
  return (
    <>
      <Navbar />

      <ExpertiseHero />

      <ExpertiseDomains />

      <ExpertiseCTA />

      <Footer />
    </>
  );
}