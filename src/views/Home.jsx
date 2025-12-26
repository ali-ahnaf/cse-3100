import { useEffect, useState } from 'react';

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=3')
      .then(res => res.json())
      .then(data => setCats(data));
  }, []);

  return (
    <div className="text-center">
      {/* styling*/}
      <div className="mb-5 py-5 bg-primary text-white rounded-5 shadow">
        <h1 className="display-3 fw-bold">Find Your New Best Friend</h1>
        <p className="lead fs-4">The #1 place to adopt beautiful, loving cats.</p>
      </div>

      <h2 className="display-5 fw-bold mb-4">Featured Cats</h2>
      
      {/* row */}
      <div className="row g-4 justify-content-center">
        {cats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <img src={cat.url} className="card-img-top" style={{height: '250px', objectFit: 'cover'}} alt="cat" />
              <div className="card-body">
                <h3 className="fw-bold">Featured Pet</h3>
                <p className="text-muted">Available for adoption today!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}