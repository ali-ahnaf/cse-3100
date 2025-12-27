import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <h1>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/available-cats">Available Cats</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <p>© Copyright 2025</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
