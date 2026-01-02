import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar-custom sticky-top">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="text-decoration-none">
            <h1 className="h3 m-0 fw-bold" style={{ color: '#2d3436' }}>
              Purrfect<span style={{ color: '#ff6b6b' }}>.</span>
            </h1>
          </Link>
          <div className="header-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/available-cats">Available Cats</Link>
            <Link className="nav-link" to="/about-us">About Us</Link>
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center">
        <div className="container">
          <p className="mb-1 fw-bold" style={{ color: '#2d3436' }}>Purrfect Adoption</p>
          <p className="small mb-0">© {new Date().getFullYear()}. Made with ❤️ for cats.</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;