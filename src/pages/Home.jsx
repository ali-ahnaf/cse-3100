import React from 'react';
import { Link } from 'react-router-dom';
import { catsData } from '../data/catsData';
import CatCard from '../components/CatCard';

const Home = () => {
  const featuredCats = catsData.slice(0, 4);

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to Purrfect Adoption</h1>
          <p className="hero-text">
            Purrfect Adoption is a digital home for cats waiting to be loved. 
            Browse through our carefully vetted cats, learn their stories, 
            and find the companion that fits your lifestyle. Every adoption 
            helps us rescue, care for, and rehome even more cats in need.
          </p>
        </div>
      </section>

      <section className="container page-content">
        <h2 className="page-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
          Featured cats
        </h2>
        <div className="cats-grid">
          {featuredCats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link
            to="/available-cats"
            className="btn btn-adopt btn-lg"
            style={{ maxWidth: '300px' }}
          >
            View All Available Cats
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
