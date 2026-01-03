import { Outlet, Link } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <div className="layout">
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-2" to="/">Purrfect Adoption</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link fs-5" to="/available-cats">Available Cats</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5" to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="bg-light py-4 mt-auto">
        <div className="container text-center text-muted">
          © 2026 Purrfect Adoption. All rights reserved.
        </div>
      </footer>
    </div>
  );
}