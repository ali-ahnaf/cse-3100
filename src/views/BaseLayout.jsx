import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <main id="content">
        <div className="page-frame">
          <header className="header-row d-flex align-items-center">
            <div className="brand">
              <h1 className="site-title mb-0">
                <Link to="/" className="brand-link">Purrfect Adoption</Link>
              </h1>
            </div>

            <nav className="ms-auto d-flex align-items-center gap-3">
              <Link to="/available-cats" className="nav-link">Available cats</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/contact" className="btn btn-donate">Donate</Link>
            </nav>
          </header>

          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} Purrfect Adoption</div>
          <div className="muted">Prepared by: Ali Ahnaf</div>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;