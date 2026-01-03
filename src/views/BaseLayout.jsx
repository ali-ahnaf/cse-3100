import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light">
        <h1 className="brand">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <div className="site-shell">
          <div className="panel">
            <Outlet />
          </div>
        </div>
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
