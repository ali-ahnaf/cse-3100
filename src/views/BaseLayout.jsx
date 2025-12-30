import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const BaseLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="layout">
      <header className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="cat-icon">🐾</span>
            <Link to="/" onClick={closeMenu}>
              Purrfect Adoption
            </Link>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/available-cats" onClick={closeMenu}>
              Available Cats
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
            <Link to="/donate" className="donate-link" onClick={closeMenu}>
              Donate
            </Link>
          </nav>
        </div>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
