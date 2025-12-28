import { Outlet, Link } from "react-router-dom";

export default function BaseLayout() {
  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h2>Purrfect Adoption</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/available-cats">Available Cats</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Outlet />
      </div>
    </div>
  );
}