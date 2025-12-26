import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header-horizontal-blue">
        <div className="brand-logo">
          <Link to="/">Purrfect Adoption</Link>
        </div>
        
        <nav className="nav-links-container">
          <Link className="nav-item-link" to="/about">About us</Link>
          <Link className="nav-item-link" to="/available-cats">Available cats</Link>
          <Link className="nav-item-link" to="/donate">Donate</Link>
          <Link className="nav-item-link" to="/contact">Contact us</Link>
        </nav>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="footer-blue">
        <p>© Copyright 2024 - Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;