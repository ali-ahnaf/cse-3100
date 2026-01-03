import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>
        <h1 className="h4 mb-0">
          <Link className="text-decoration-none text-dark" to="/">Purrfect Adoption</Link>
        </h1>
        <nav>
          <ul className="nav small">
            <li className="nav-item"><Link className="nav-link text-dark" to="/about">About us</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/available-cats">Available cats</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/donate">Donate</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/contact">Contact us</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p className="small mb-0">© Copyright 2026</p>
      </footer>
    </div>
  );
};

export default BaseLayout;