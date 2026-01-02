import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light">
        <h1 className="m-0">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav m-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light p-3 text-center">
        <p className="m-0">© Copyright 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;

