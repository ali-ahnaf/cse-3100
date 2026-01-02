import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light p-3">
        <h1 className="mb-0 mx-auto"> {/* Center the title */}
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav className="ms-auto"> {/* Push nav to right */}
          <ul className="nav mb-0">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content" className="p-3">
        <Outlet />
      </main>
      <footer className="bg-light p-3 text-center mt-auto">
        <p className="mb-0">© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;