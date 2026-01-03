import { Link, Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <header className="navbar">
        <h2>Purrfect Adoption</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/available">Available Cats</Link>
          <Link to="/about">About Us</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        © 2026 Purrfect Adoption
      </footer>
    </>
  );
}
