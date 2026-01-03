import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="fixed-top bg-dark text-white px-4 py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h4 m-0">
              <Link className="text-white text-decoration-none" to="/">Purrfect Adoption</Link>
            </h1>
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/available-cats">Available Cats</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/donate">Donate</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-5" id="content">
        <Outlet />
      </main>

      <footer className="bg-secondary text-white text-center py-3 mt-5">
        <p className="mb-0">© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
