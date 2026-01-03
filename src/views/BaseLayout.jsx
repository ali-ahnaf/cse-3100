import { NavLink, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center">
        <h1 className="m-0 fs-3">
          <NavLink className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </NavLink>
        </h1>

        <div className="flex-grow-1" />

        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/available-cats">
                Available cats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/donate">
                Donate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
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
