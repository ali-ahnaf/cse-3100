import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand brand" to="/">
            Purrfect Adoption
          </Link>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">Available Cats</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main id="content">
        <div className="site-shell">
          <div className="panel">
            <Outlet />
          </div>
        </div>
      </main>
      <footer className="bg-light">
        <div className="container d-flex justify-content-between align-items-center">
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
