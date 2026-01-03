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
            fetch('https://api.thecatapi.com/v1/images/search').then(res =>
              res.json()
            )
          )
        );

        if (cancelled) return;

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index]?.[0]?.url || '',
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error(error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCatImages();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Find your perfect furry friend. Adopt, love, and give hope to these adorable cats.
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>
        <div className="cats-grid mt-2">
          {loading && <p>Loading cats...</p>}
          {cats.map((cat, i) => (
            <div key={`${cat.name}-${i}`} className="cat-card">
              <img
                src={cat.image || '/placeholder-cat.png'}
                alt={cat.name}
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
