import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center">
        <h1>
          <Link to="/" className="text-decoration-none text-dark">
            Purrfect Adoption
          </Link>
        </h1>

        <nav className="ms-auto">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">Available Cats</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
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
