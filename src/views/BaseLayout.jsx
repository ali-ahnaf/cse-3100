// src/views/BaseLayout.jsx
import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <div className="container">
          <h1>
            <Link to="/">Purrfect Adoption</Link>
          </h1>

          <nav>
            <ul className="nav">
              <li><Link className="nav-link" to="/about">About us</Link></li>
              <li><Link className="nav-link" to="/available-cats">Available cats</Link></li>
              <li><Link className="nav-link" to="/contact">Contact us</Link></li>

              
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
      <footer className="site-footer">
  <div className="footer-inner">
    <p>© 2024 Purrfect Adoption. All rights reserved.</p>
    <p className="footer-tagline">
      Built with ❤️ for cats and their forever homes.
    </p>
  </div>
</footer>


    </div>
  );
};

export default BaseLayout;
