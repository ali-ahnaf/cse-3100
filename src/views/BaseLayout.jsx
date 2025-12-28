import { Link, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* HEADER */}
      <header className="bg-light py-3">
        <div className="container d-flex align-items-center">
          <h1 className="me-auto mb-0">
            <Link className="text-decoration-none text-dark" to="/">
              Purrfect Adoption
            </Link>
          </h1>

          <nav>
            <ul className="nav align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/available-cats">
                  Available cats
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-primary" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="container my-4">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-light py-3 text-center">
        <p className="mb-0">© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
