import { Link, Outlet, NavLink } from 'react-router-dom';

const BaseLayout = () => {
  const handleDonateClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="layout">
      <header className="site-header">
        <Link to="/" className="brand-link">
          Purrfect Adoption
        </Link>
        <nav className="site-nav">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/about">
            About us
          </NavLink>

          <NavLink className="nav-link" to="/available-cats">
            Available cats
          </NavLink>

          <a href="#" className="nav-link" onClick={handleDonateClick}>
            Donate
          </a>

          <NavLink className="nav-link" to="/contact">
            Contact us
          </NavLink>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};
export default BaseLayout;
