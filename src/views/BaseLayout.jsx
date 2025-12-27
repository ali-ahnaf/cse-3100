import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          <Link className="text-decoration-none text-dark" to="/" style={{ marginLeft: '1.5em' }}>
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <Link className="nav-link" to="/about-us">
            About us
          </Link>

          <Link className="nav-link" to="/available-cats">
            Available Cats
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
      <footer className="bg-light">
        <p>© Copyright 2025</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
