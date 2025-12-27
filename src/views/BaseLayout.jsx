import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      
      <header className="custom-navbar">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">Purrfect Adoption</Link>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/available-cats">Available Cats</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      
      <main id="content">
        <Outlet />
      </main>

      <footer className="custom-footer">
        <p>© Copyright 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;