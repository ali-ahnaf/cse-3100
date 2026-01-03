import { Link, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="btn" to="/available-cats">
                Available Cats
              </Link>
              <Link to="/donate" className="btn">
                Donate
              </Link>
              <Link to="/contact-us" className="btn">
                Contact us
              </Link>
              <Link to="/about-us" className="btn">
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="footer">
        <p style={{ margin: 0, color: 'black' }}>© Copyright 2024</p>

      </footer>
    </div>
  );
};

export default BaseLayout;
