import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="page">
      <h1 className="page-title">Cat Adoption Website</h1>
      
      <div className="mockup">
        <header className="mockup-header">
          <h2 className="brand">
            <Link className="brand-link" to="/">
              Purrfect Adoption
            </Link>
          </h2>

          <nav className="mockup-nav">
            <Link className="mockup-nav-link" to="/about">
              About us
            </Link>

            <Link className="mockup-nav-link" to="/available-cats">
              Available Cats
            </Link>

            <Link className="mockup-nav-link" to="/donate">
              Donate
            </Link>

            <Link className="mockup-nav-link" to="/contact">
              Contact Us
            </Link>

          </nav>
        </header>

        <main className="mockup-content">
          <Outlet />
        </main>
        <footer className="site-footer">
          © Copyright 2024 Purrfect Adoption. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default BaseLayout;
