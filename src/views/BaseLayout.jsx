import { Link, Outlet, NavLink } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex flex-column flex-md-row align-items-center bg-light px-4 py-3">
        <h2 className="mb-2 mx-4">
          <NavLink className="text-decoration-none text-dark fw-bold" to="/">
            <em>Purrfect Adoption</em>
          </NavLink>
        </h2>
        <div className="flex-grow-1"></div>
        <nav className="navbar">
          <ul className="navbar-nav flex-row gap-3 gap-md-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/available-cats">
                Available Cats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="bg-light text-center mt-4">
        <p className="fw-bold">© Copyright 2026 : <em>By who knows whom</em></p>
      </footer>
    </div>
  );
};

export default BaseLayout;
