import { Link, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      <div>
        <header className="d-flex justify-content-between align-items-center bg-light">
          <h1>
            <Link className="text-decoration-none text-dark" to="/">
              Purrfect Adoption
            </Link>
          </h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/available-cats">
                  Available Cats
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main id="content">
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ maxWidth: "1440px" }}>
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-light">
        <p>© Copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
