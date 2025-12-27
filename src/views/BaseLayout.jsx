import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <h1>
          <Link to="/" style={{ textDecoration: 'none', color: '#ff6b35' }}>
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/available-cats">
                Available cats
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/donate">
                Donate
              </Link>
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
