import { Link, Outlet, useLocation } from 'react-router-dom';

const BaseLayout = () => {
  const location = useLocation();
  
  return (
    <div className="layout">
      <header className="d-flex align-items-center justify-content-between bg-light">
        <h1 className="m-0">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/available-cats' ? 'active' : ''}`} 
                to="/available-cats"
              >
                Available Cats
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main id="content" className="container py-4">
        <Outlet /> 
      </main>
      
      <footer className="bg-light text-center py-3">
        <p className="m-0">© Copyright 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;