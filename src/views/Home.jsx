import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        if (cancelled) return;

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index]?.[0]?.url || '',
        }));

        // replace state once (avoid appending repeatedly which caused the loop)
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCatImages();

    return () => {
      cancelled = true;
    };
  }, []); // run once on mount

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>

        {/* CSS Grid container to ensure cards display in a responsive grid */}
        <div
          id="cats-container"
          className="mt-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            alignItems: 'start',
          }}
        >
          {loading && <p>Loading cats...</p>}
          {cats.map((cat, i) => (
            <div key={`${cat.name}-${i}`} className="cat-grid-item">
              <div className="cat-card">
                <img
                  src={cat.image || '/placeholder-cat.png'}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0 text-muted">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
