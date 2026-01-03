import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="logo">
          <Link to="/">Purrfect Adoption</Link>
        </h1>

        <nav>
          <ul className="nav-menu">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/available-cats">Available cats</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
