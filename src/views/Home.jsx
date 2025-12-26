// src/views/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-section">
      <div className="container text-center py-5">
        <h1 className="display-5 fw-bold mb-4" style={{ color: '#6a1b9a' }}>
          Welcome to Purrfect Adoption
        </h1>
        <p className="lead text-muted mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia lorem dolor sit amet,
          consectetur adipiscing elit. Maecenas lacinia lorem dolor sit amet.
        </p>

        <h2 className="mb-4" style={{ color: '#6a1b9a' }}>Featured Cats</h2>
        <p className="text-muted mb-5">
          Meet some of our adorable cats looking for their forever home!
        </p>

        {/* Simple call-to-action button */}
        <Link to="/available-cats" className="submit-btn" style={{ display: 'inline-block', padding: '1rem 2.5rem', fontSize: '1.2rem' }}>
          View All Available Cats
        </Link>
      </div>
    </section>
  );
}