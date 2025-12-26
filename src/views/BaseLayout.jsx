import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="site-header">
        <h1 className="brand">
          <Link className="brand-link" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="nav">
            <li>
              <Link className="nav-link" to="/available-cats">
                Available cats
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/donate">Donate</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about-us">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact-us">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
