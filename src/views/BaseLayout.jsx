import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light">
        <h1>
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
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-column footer-brand">
              <h3>Purrfect Adoption</h3>
              <p className="footer-tagline">
                Finding forever homes for cats, one paw at a time.
              </p>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/available-cats">Available Cats</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li><a href="mailto:info@purrfectadoption.com.bd">info@purrfectadoption.com.bd</a></li>
                <li><a href="tel:+8801712345678">+880 1712-345678</a></li>
                <li>Dhanmondi, Dhaka, Bangladesh</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" className="social-link">Facebook</a>
                <a href="#" aria-label="Instagram" className="social-link">Instagram</a>
                <a href="#" aria-label="WhatsApp" className="social-link">WhatsApp</a>
                <a href="#" aria-label="YouTube" className="social-link">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-container">
            <p className="footer-copyright">© 2024 Purrfect Adoption. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
