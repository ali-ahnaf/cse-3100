import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 2rem' }}>
        <h1 style={{ margin: 0 }}>
          <Link style={{ textDecoration: 'none', color: '#333' }} to="/">
            🐱 Purrfect Adoption
          </Link>
        </h1>
        <div style={{ flexGrow: 1 }}></div>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
            <li>
              <Link style={{ textDecoration: 'none', color: '#007bff', fontWeight: '500' }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: '#007bff', fontWeight: '500' }} to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: '#007bff', fontWeight: '500' }} to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: '#007bff', fontWeight: '500' }} to="/contact-us">
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
        <p>© 2024 Purrfect Adoption. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
