import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <h1 className="logo">
          <Link className="text-decoration-none text-white" to="/">
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
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer>
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
