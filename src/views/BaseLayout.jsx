import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
            <header className="d-flex align-items-center bg-light">
              <div className="container-md d-flex align-items-center">
                <h1 className="ms-5" style={{ fontFamily: "'Caveat', cursive", marginLeft: '100px' }}>
                  <Link className="text-decoration-none text-dark" to="/">
                    Purrfect Adoption
                  </Link>
                </h1>
      
                <div className="flex-grow-1"></div>
                <nav>
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/available-cats">
                        Available Cats
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/donate">
                        Donate
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>      <main id="content" className="flex-grow-1">
        <Outlet />
      </main>
      <footer className="bg-light">
        <div className="container">
          <p className="text-center">© Copyright 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
