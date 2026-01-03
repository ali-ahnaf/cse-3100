import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center">
        <h1>
          <Link className="logo-link" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              {/* Changed to nav-button class for styling */}
              <Link className="nav-button" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-button" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-button" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-button" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content">
        <Outlet />
      </main>

    </div>
  );
};

export default BaseLayout;