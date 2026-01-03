import { useEffect, useState } from 'react';
import { getCats } from '../lib/getCats';

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    let mounted = true;
    
    getCats(4).then((data) => {
      if (mounted) setCats(data);
    });
    return () => (mounted = false);
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Meet our adorable cats looking for their forever home!
        </p>
      </section>

      <section className="mt-5">
        <div className="container"> 
          <h2 className="mb-4">Featured Cats</h2>

          <div className="row g-4"> 
            {cats.map(cat => (
              <div key={cat.name} className="col-lg-3 col-md-4 col-sm-6">
                <div className="cat-card">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="cat-img"
                  />
                  <div className="cat-info">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Breed: {cat.breed}</p>
                    <p className="mb-0">Age: {cat.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
