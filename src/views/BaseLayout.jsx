import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem'
      }}>
        {/* Logo on left */}
        <h1 style={{ margin: 0 }}>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        
        {/* Navigation links on right */}
        <nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            
            <Link className="text-dark text-decoration-none" to="/about">
              About Us
            </Link>
            <Link className="text-dark text-decoration-none" to="/available-cats">
              Available Cats
            </Link>
            <Link className="text-dark text-decoration-none" to="/donate">
              Donate
            </Link>
            <Link className="text-dark text-decoration-none" to="/contact">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
      <main id="content" className="p-4">
        <Outlet />
      </main>
      <footer className="text-center p-3">
        <p className="m-0">© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;