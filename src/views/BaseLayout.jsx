import { Link, NavLink, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <div className="page-frame">
        <header>
          <div className="nav-bar">
            <h1 className="brand">
              <Link to="/">Purrfect Adoption</Link>
            </h1>
            <div style={{ flex: 1 }}></div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/available-cats">Available cats</NavLink>
                </li>
                <li>
                  <NavLink to="/donate">Donate</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="content">
          <Outlet />
        </main>

        <footer>
          <p>© Copyright 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default BaseLayout;
