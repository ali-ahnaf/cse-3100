import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout-container">
      <header className="navbar-container">
  <h1>
    <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
      Purrfect Adoption
    </Link>
  </h1>
  <nav>
    <ul className="nav-links">
      <li><Link to="/about">About us</Link></li>
      <li><Link to="/available-cats">Available cats</Link></li>
      <li><span className="app-btn">Donate</span></li>
      <li><Link to="/contact">Contact us</Link></li>
    </ul>
  </nav>
</header>

      <main className="main-content" style={{ padding: '20px 5%' }}>
        <Outlet />
      </main>

      <footer>
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;