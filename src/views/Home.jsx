import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
              })
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || 'https://via.placeholder.com/300x200?text=Cat+Image'
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        // Fallback to placeholder images if API fails
        const catsWithPlaceholders = featuredCats.map(cat => ({
          ...cat,
          image: 'https://via.placeholder.com/300x200?text=Cat+Image'
        }));
        setCats(catsWithPlaceholders);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []); // Empty dependency array ensures it runs only once

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="text-center mt-4">
        <h2 className="mb-3">Welcome to Purrfect Adoption</h2>
        <p className="lead">
          Find your perfect feline companion at Purrfect Adoption. We connect loving families with cats in need of forever homes. 
          Browse our selection of adorable cats, learn about different breeds, and start your adoption journey today.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="mb-4">Featured Cats</h2>
        <div className="row g-4">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card h-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid w-100"
                  style={{
                    borderRadius: '8px',
                    height: '250px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info p-3">
                  <h3 className="h5 mb-2">{cat.name}</h3>
                  <p className="mb-1"><strong>Age:</strong> {cat.age} years</p>
                  <p className="mb-0"><strong>Breed:</strong> {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}