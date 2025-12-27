import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light px-3 py-2 border-bottom">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about-us">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/available-cats">
                Available cats
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact-us">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="bg-light py-3 border-top">
        <div className="container text-end">
          <p className="mb-0">© Copyright 2024 Purrfect Adoption</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;