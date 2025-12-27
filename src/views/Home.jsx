// Home.jsx
import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Snowball', age: '3', breed: 'Peterbald' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res =>
              res.json()
            )
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        // Fallback images if API fails
        const catsWithFallback = featuredCats.map((cat, index) => ({
          ...cat,
          image: `https://placekitten.com/300/200?image=${index + 1}`,
        }));
        setCats(catsWithFallback);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center">
        <h1>Welcome to Purrfect Adoption</h1>
        <p>Your new best friend is waiting ❤️</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>
        
        {/* FIX: Using CSS Grid instead of Bootstrap row */}
        <div className="cats-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age} years</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}