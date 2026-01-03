import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* Header with navigation links */}
      <header className="d-flex align-items-center justify-content-between bg-light p-3">
        <h1>
          {/* FIX: Link to Home page */}
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>

        <nav>
          <ul className="nav">
            {/* FIX: Added proper navigation links */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
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

      {/* FIX: Outlet renders the child route page */}
      <main id="content" className="p-3">
        <Outlet />
      </main>

      <footer className="bg-light text-center p-3 mt-auto">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;