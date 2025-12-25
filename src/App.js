import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AvailableCats from "./components/AvailableCats";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="site-shell">
        <header className="site-header">
          <h1>Purrfect Adoption</h1>
          <nav>
            <Link to="/">Available cats</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
          </nav>
        </header>

        <main className="site-main">
          <Routes>
            <Route path="/" element={<AvailableCats />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">Prepared by: 20230104003</footer>
      </div>
    </Router>
  );
}

export default App;
