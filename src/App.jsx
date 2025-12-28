import { Routes, Route } from "react-router-dom";

import BaseLayout from "./views/BaseLayout";
import Home from "./views/Home";
import About from "./views/About";
import Donate from "./views/Donate";
import AvailableCats from "./views/AvailableCats";
import Contact from "./views/Contact";

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
