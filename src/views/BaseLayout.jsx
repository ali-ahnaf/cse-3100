import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="navbar">
        <h1 className="navbar-brand">
          <Link to="/">Purrfect Adoption</Link>
        </h1>
        <nav className="navbar-nav">
          <Link className="nav-link" to="/about-us">
            About us
          </Link>
          <Link className="nav-link" to="/available-cats">
            Available cats
          </Link>
          <Link className="nav-link" to="/donate">
            Donate
          </Link>
          <Link className="nav-link" to="/contact-us">
            Contact us
          </Link>
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
