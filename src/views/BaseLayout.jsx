import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header-section">
        <div className="header-content">
          <h1 className="logo">
            <Link className="text-decoration-none text-dark" to="/">
              🐱 Purrfect Adoption
            </Link>
          </h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/available-cats">
                  Available Cats
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donation">
                  Donate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Purrfect Adoption</h3>
            <p>Connecting loving cats with caring families since 2015.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/available-cats">Available Cats</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/donation">Donate</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Info</h3>
            <p>📍 House 45, Road 12, Dhanmondi</p>
            <p>Dhaka-1209, Bangladesh</p>
            <p>📞 +880 1712-345678</p>
            <p>✉️ info@purrfectadoption.com.bd</p>
          </div>
          
          <div className="footer-column">
            <h3>Hours</h3>
            <p>Sat-Thu: 10 AM - 7 PM</p>
            <p>Friday: 2 PM - 6 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Purrfect Adoption. All rights reserved. | Made with ❤️ for cats</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
