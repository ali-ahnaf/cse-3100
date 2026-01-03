import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
        <div className="site-brand">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </div>
        <div className="header-actions d-flex align-items-center gap-3">
        <nav>
          <ul className="nav mb-0 d-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
        
          </ul>
        </nav>
    <Link className="btn-adopt" to="/donation">
      Donation
    </Link>
        </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
