import { Routes, Route } from "react-router-dom";
import BaseLayout from "./views/BaseLayout";
import Home from "./views/Home";
import AvailableCats from "./views/AvailableCats";
import About from "./views/About";
import Contact from "./views/Contact";
import Donate from "./views/Donate";

export default function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/available" element={<AvailableCats />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
