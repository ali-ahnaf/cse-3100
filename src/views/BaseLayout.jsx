import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header
        className="site-header"
        style={{
          backgroundColor: '#8B5E3C', 
          color: '#fff',
          padding: '1.4rem 2rem', 
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.95rem' }}>
          <Link
            className="site-title"
            to="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '600',
              letterSpacing: '1px',
            }}
          >
            Purrfect Adoption
          </Link>
        </h1>

        <div className="spacer" style={{ flexGrow: 1 }} />

        <nav>
          <ul
            className="nav-links"
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '1.5rem',
              margin: 0,
              padding: 0,
            }}
          >
            {['/about', '/available-cats', '/donate', '/contact'].map((path, idx) => {
              const text = path === '/about'
                ? 'About us'
                : path === '/available-cats'
                ? 'Available cats'
                : path === '/donate'
                ? 'Donate'
                : 'Contact us';
              return (
                <li key={idx}>
                  <Link
                    className="nav-link"
                    to={path}
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: '500',
                      padding: '0.45rem 0.9rem', 
                      borderRadius: '4px',
                      transition: 'background 0.3s',
                    }}
                    onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.2)')}
                    onMouseLeave={(e) => (e.target.style.background = 'transparent')}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer
        className="site-footer"
        style={{
          backgroundColor: '#8B5E3C',
          color: '#fff',
          textAlign: 'center',
          padding: '1rem',
          marginTop: '2rem',
        }}
      >
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
