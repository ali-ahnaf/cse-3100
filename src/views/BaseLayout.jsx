import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="site-header">
        <h1 className="site-title">
          <Link to="/" className="title-link">Purrfect Adoption</Link>
        </h1>
        <nav className="site-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/available-cats" className="nav-link">Available Cats</Link>
            </li>
            <li className="nav-item">
              <Link to="/donate" className="nav-link">Donate</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className="site-main">
        <Outlet />
      </main>
      
      <footer className="site-footer">
        <p>© Copyright 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;