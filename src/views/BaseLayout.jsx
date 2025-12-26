import { Link } from 'react-router-dom';

export default function BaseLayout({ children }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/" className="logo">Purrfect Adoption</Link>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/available-cats">Available cats</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}
