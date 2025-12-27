


import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <nav className="custom-navbar">
        <div className="nav-container">
          <Link className="logo" to="/">Purrfect Adoption</Link>
          
          <ul className="nav-links">
          
            <li><Link to="/available-cats">Available cats</Link></li>
            
            {/* The Dropdown Wrapper */}
            <li className="dropdown">
              <span className="dropdown-trigger">More ▾</span>
              <ul className="dropdown-content">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link className="donate-link" to="/donate">Donate</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <main className="content-area">
        <Outlet /> 
      </main>

      <footer className="custom-footer">
        <p>© Copyright 2025 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
