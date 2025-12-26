import { Link, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      <div>

        <header className="p-0">
          <nav class="navbar navbar-expand-md">
            <div class="container-fluid">
              <a class="navbar-brand fw-bold" href="/">
                Purrfect Adoption
              </a>
              <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav gap-1">
                  <li class="nav-item">
                    <a class="nav-link" href="/about-us">About us</a>
                  </li><li class="nav-item">
                    <a class="nav-link" href="/available-cats">Available Cats</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/donate">Donate</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact-us">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
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
