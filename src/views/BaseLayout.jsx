import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center justify-content-between bg-white">
        <h1 className="h4 mb-0">
          <Link className="text-decoration-none text-dark" style={{fontWeight: 'bold'}} to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="nav">
            <li className="nav-item"><Link className="nav-link text-dark" to="/about-us">About us</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/available-cats">Available Cats</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/donate">Donate</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/contact-us">Contact us</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p className="mb-0">© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;