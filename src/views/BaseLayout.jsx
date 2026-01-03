import { Link, Outlet, useLocation } from 'react-router-dom';

const BaseLayout = () => {
  const location = useLocation();
  
  return (
    <div className="layout">
      <header>
        <h1>
          <Link className="logo" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="nav">
            <li>
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link ${location.pathname === '/available-cats' ? 'active' : ''}`} 
                to="/available-cats"
              >
                Available Cats
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer>
        <p>Adopted by: AI Meow!</p>
      </footer>
    </div>
  );
};

export default BaseLayout;