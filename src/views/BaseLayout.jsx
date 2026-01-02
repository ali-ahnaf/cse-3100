import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <h1>
          <Link to="/" style={{ textDecoration: 'none', color: '#2c3e50' }}>
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul>
            <li><Link to="/available-cats">Available cats</Link></li>
            <li><a href="#donate">Donate</a></li>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© Copyright 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;