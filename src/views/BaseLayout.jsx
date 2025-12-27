import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center justify-content-between">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about-us">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/available-cats">
                Available cats
              </Link>
            </li>
            {/* Note: "Donate" is in mockup but no functionality requested yet */}
            <li className="nav-item">
              <span className="nav-link text-dark" style={{cursor: 'pointer'}}>Donate</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact-us">
                Contact us
              </Link>
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