import { Link } from 'react-router-dom';

const BaseLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      {/* design */}
      <nav className="site-navbar">
        <div className="nav-container">
          <Link className="site-logo" to="/">
            Purrfect Adoption
          </Link>
          
          <div className="nav-menu">
            <Link className="menu-item" to="/">Home</Link>
            <Link className="menu-item" to="/available-cats">Available Cats</Link>
            <Link className="menu-item" to="/about">About Us</Link>
            <Link className="menu-item contact-btn" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="content-container">
          {children}
        </div>
      </main>

      <footer className="site-footer">
        <p>© 2025 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;