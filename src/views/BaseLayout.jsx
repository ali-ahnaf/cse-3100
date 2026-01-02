import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <h1>
          <Link to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer>
        <p>© Copyright 2024 Purrfect Adoption. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
