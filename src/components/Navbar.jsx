import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="brand">
        <Link to="/" className="brand-link">Purrfect Adoption</Link>
      </h1>

      <nav className="site-nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/available-cats" className="nav-link">Available Cats</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
