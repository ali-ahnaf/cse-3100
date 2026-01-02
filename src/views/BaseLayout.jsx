import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* HEADER */}
      <header className="d-flex align-items-center justify-content-between bg-light p-3 shadow-sm">
        <h1 className="m-0">
          <Link className="text-decoration-none text-dark" to="/">
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
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main id="content" className="p-4">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-light text-center p-3 mt-auto border-top">
        <p>© 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
