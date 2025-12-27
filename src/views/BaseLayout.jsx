import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header>

        <h1>
          <Link to="/">
            Purrfect Adoption
          </Link>
        </h1>

        <nav>
          <Link to="/about">
            About us
          </Link>

          <Link to="/available-cats">
            Available Cats
          </Link>

          <Link>
            Donate
          </Link>

          <Link to="/contact">
            Contact us
          </Link>
        </nav>

      </header>



      <main id="content">
        <Outlet />
      </main>
      {/* <footer>
        <p>© Copyright 2024</p>
      </footer> */}
    </div>
  );
};

export default BaseLayout;
