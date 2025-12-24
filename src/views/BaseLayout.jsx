import { Link, NavLink, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light px-4">
        <h2>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h2>
        <div className="flex-grow-1"></div>

        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>

      <footer className="bg-light text-center mt-4 fw-bold">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
