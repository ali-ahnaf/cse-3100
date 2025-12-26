import { Link, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      <div>

        <header className="p-0">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <a className="navbar-brand fw-bold" href="/">
                Purrfect Adoption
              </a>
              <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav gap-1">
                  <li className="nav-item">
                    <a className="nav-link" href="/about-us">About us</a>
                  </li><li className="nav-item">
                    <a className="nav-link" href="/available-cats">Available Cats</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/donate">Donate</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact-us">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main id="content">
          <div style={{ maxWidth: "1440px", width: "100%" }}>
            <Outlet />
          </div>
        </main>
      </div>

      <footer>
        © Copyright {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default BaseLayout;
