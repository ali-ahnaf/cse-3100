import { Link, Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/" className="logo">
            Purrfect Adoption
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/available-cats">Available Cats</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} Purrfect Adoption. All rights reserved.</p>
      </footer>
    </div>
  );
}