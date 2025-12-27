import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <h1>
          <Link to="/">Purrfect Adoption</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/available-cats">Available Cats</Link>
            </li>
            <li>
              <Link to="/">Donate</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer>
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-section">
            <h3>Purrfect Adoption</h3>
            <p>
              Dedicated to rescuing, rehabilitating, and rehoming abandoned cats across Bangladesh. 
              Every cat deserves a loving home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/available-cats">Available Cats</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <strong>Email:</strong>
                <a href="mailto:info@purrfectadoption.bd">info@purrfectadoption.bd</a>
              </li>
              <li>
                <strong>Phone:</strong>
                <a href="tel:+8801700000000">+880 1700-000-000</a>
              </li>
              <li>
                <strong>Location:</strong>
                <span>Mohammadpur, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-icon">f</a>
              <a href="#" aria-label="Twitter" className="social-icon">𝕏</a>
              <a href="#" aria-label="Instagram" className="social-icon">📷</a>
              <a href="#" aria-label="YouTube" className="social-icon">▶</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Purrfect Adoption. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
