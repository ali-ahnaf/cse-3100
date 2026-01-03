import { NavLink, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light p-3">
        <h1 className="m-0">
          <NavLink className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </NavLink>
        </h1>
        <div className="flex-grow-1"></div>
        <nav aria-label="Main navigation">
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                to="/available-cats"
              >
                Available Cats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light text-center p-3">
        <p className="mb-0">© Copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
