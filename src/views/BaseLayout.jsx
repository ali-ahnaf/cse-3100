import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light px-3 py-2">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav className="ms-auto">
          <ul
            style={{
              display: 'flex',
              gap: '1rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link
                to="/available-cats"
                style={{
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  borderRadius: '4px',
                }}
              >
                Available Cats
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                style={{
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  borderRadius: '4px',
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                style={{
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ffc107',
                  color: '#000',
                  borderRadius: '4px',
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="bg-light text-center py-2">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
