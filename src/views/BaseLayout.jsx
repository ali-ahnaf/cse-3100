import { NavLink, Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="app-header">
        <h1 className="mb-0">
          <Link className="text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>

        <div className="spacer" />

        <div className="header-actions">
          <NavLink to="/available-cats" className={({ isActive }) => `btn btn-primary${isActive ? ' active' : ''}`}>Available Cats</NavLink>
          <NavLink to="/about" className={({ isActive }) => `btn btn-primary${isActive ? ' active' : ''}`}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `btn btn-primary${isActive ? ' active' : ''}`}>Contact Us</NavLink>
          <NavLink to="/donate" className={({ isActive }) => `btn btn-primary${isActive ? ' active' : ''}`}>Donate</NavLink>
        </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
