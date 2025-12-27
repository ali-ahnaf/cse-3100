import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="header-inner">
          <h1 className="site-brand">
            <Link className="site-brand-link" to="/">
              Purrfect Adoption
            </Link>
          </h1>
          <nav className="site-nav" aria-label="Main navigation">
            <ul className="site-nav-list">
              <li>
                <Link className="site-nav-link" to="/available-cats">
                  Available Cats
                </Link>
              </li>
            </ul>
          </nav>
        </div>
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
