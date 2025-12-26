// src/views/BaseLayout.jsx
import { Link, Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <div className="layout">
      {/* Purple Header */}
      <header>
        <div className="container">
          <div className="header-content">
            <h1>
              <Link to="/">Purrfect Adoption</Link>
            </h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/available-cats">Available Cats</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2025 Purrfect Adoption. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}