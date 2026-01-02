import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="site-header">
        <h1>
          <Link className="site-title" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="spacer" />
        <nav>
          <ul className="nav-links">
            <li>
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/available-cats">
                Available cats
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
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
