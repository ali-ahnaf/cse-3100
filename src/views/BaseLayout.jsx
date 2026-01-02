import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header-bar">
        <Link className="logo-link" to="/">
          Purrfect Adoption
        </Link>

        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/some-other-route">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/some-other-route">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
