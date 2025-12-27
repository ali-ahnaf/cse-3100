import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* Header */}
      <header>
        <h1>
          <Link to="/" className="text-decoration-none text-dark">
            Purrfect Adoption
          </Link>
        </h1>

        <nav>
          <ul className="nav">
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
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <p>Prepared by: Ali Ahnaf © 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
