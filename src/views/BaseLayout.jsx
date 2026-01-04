import { Link, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="bg-light border-bottom">
        <div className="container d-flex align-items-center py-3">
          <h1 className="h4 m-0">
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
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        </header>
        <main className="main-content py-4">
        <Outlet />
        </main>
       <footer className="bg-light border-top text-center py-3">
        <p className="mb-0">© Copyright 2024</p>
      </footer>
       </div>
         );
        };

export default BaseLayout;