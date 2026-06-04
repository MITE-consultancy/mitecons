import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter basename="/mitecons">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;