import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center justify-content-between p-3 border-bottom">
        <h1 className="m-0">
          <Link className="text-decoration-none text-dark" style={{ fontWeight: 'bold' }} to="/">
            Purrfect Adoption
          </Link>
        </h1>
        
        <nav>
          <ul className="nav">
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
      </header>

      <main id="content" className="container my-4">
        <Outlet />
      </main>

      <footer className="p-3 text-center border-top bg-light">
        <p className="mb-0">© Copyright 2024 - Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;