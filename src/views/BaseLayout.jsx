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
          <Link to="/available-cats">
            Available Cats
          </Link>

          <Link to="/donate">
            Donate
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
