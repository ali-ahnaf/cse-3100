import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function BaseLayout() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h2 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          Purrfect Adoption
        </h2>
        <nav>
          <Link to="/about">About us</Link>
          <Link to="/available-cats">Available Cats</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        © Copyright 2024 Purrfect Adoption. All rights reserved.
      </footer>
    </>
  );
}