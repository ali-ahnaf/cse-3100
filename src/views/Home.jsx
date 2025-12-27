

import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        // FIX: We set the cats directly. 
        // Dave's old code used (...prevCats) which caused the infinite loop.
        setCats(catsWithImages); 
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []); // The empty array [] means this only runs ONCE when the page loads.

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-5 bg-light rounded-3 mb-5 shadow-sm">
        <h1 className="display-4 fw-bold text-primary">Welcome to Purrfect Adoption</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          We help beautiful cats find their forever homes. Browse our featured friends 
          below and start your journey of pet parenthood today!
        </p>
        <button className="btn btn-primary btn-lg px-5 mt-3 shadow-sm">Adopt Today</button>
      </section>

      {/* Featured Cats Section */}
      <section className="mb-5">
        <h2 className="text-center fw-bold mb-4">Featured Cats</h2>
        
        {/* The 'row' class puts items side-by-side */}
        <div className="row g-4">
          {cats.map((cat, i) => (
            /* col-md-4 means 3 cards in a row (12 / 4 = 3) */
            <div key={i} className="col-md-4">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h3 className="h4 fw-bold mb-1">{cat.name}</h3>
                  <p className="text-primary small fw-bold mb-2">{cat.breed}</p>
                  <p className="card-text text-muted">Age: {cat.age} years</p>
                  <button className="btn btn-outline-primary w-100 mt-2">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}