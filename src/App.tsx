import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/team" element={<Team />} />
      <Route path="/projects" element={<Projects />}/>
      <Route path="/facilities" element={<Facilities />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  );
}