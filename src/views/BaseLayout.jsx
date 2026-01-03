import { Link, Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Purrfect Adoption</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/available-cats">Available Cats</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="main-container">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          &copy; {new Date().getFullYear()} Purrfect Adoption. All rights reserved.
        </div>
      </footer>
    </>
  );
}
