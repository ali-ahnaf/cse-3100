import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="nav">
            <li>
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main><Outlet/></main>
      <footer>© Copyright 2026</footer>
    </div>
  );
};length

export default BaseLayout;
