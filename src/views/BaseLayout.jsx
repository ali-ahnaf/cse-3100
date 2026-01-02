import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            Purrfect Adoption
          </Link>
        </div>

        <nav className="header-right">
          <Link to="/available-cats">Available cats</Link>
          <Link to="/about">About us</Link>
<Link to="/contact">Contact us</Link>

          <a href="#">Donate</a>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        © 2024 Purrfect Adoption
      </footer>
    </div>
  );
};

export default BaseLayout;
