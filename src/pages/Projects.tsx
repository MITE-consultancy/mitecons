import Navbar from "../components/Navbar/Navbar";
import ProjectsHero from "../components/ProjectsPage/ProjectsHero";
import ProjectsGrid from "../components/ProjectsPage/ProjectsGrid";
import Footer from "../components/Footer/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />

      <ProjectsHero />

      <ProjectsGrid />

      <Footer />
    </>
  );
}