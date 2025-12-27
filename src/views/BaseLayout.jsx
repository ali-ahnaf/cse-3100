import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="layout">
      <header>
        <h1>
          <Link className="text-decoration-none text-dark" to="/" onClick={() => setMenuOpen(false)}>
            Purrfect Adoption
          </Link>
        </h1>

        <div style={{ flex: 1 }} />

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>

        <nav>
          <ul className={`nav ${menuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats" onClick={() => setMenuOpen(false)}>
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer>
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
