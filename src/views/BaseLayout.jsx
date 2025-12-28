import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>

         <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' ,color: '#000000ff' }} to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' ,color: '#000000ff' }} to="/available-cats">Available cats</Link>
            </li>
            {/* You can rename "Donate" to anything or keep it, but let's add Contact */}
            <li className="nav-item">
               {/* Just a placeholder per design */}
              <span className="nav-link" style={{ cursor: "pointer", fontFamily: 'Comic Sans MS, cursive, sans-serif' ,color: '#000000ff' }}>Donate</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' ,color: '#000000ff' }} to="/contact">Contact us</Link>
            </li>
          </ul>

        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;