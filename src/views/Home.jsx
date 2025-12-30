import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index] && responses[index][0] ? responses[index][0].url : undefined,
        }));

        // Replace state once — avoid appending on every render
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="overlay">
          <h1 style={{ margin: 0, fontSize: '2rem' }}>Find Your Purrfect Companion</h1>
          <p style={{ marginTop: 8, marginBottom: 16, color: 'rgba(0,0,0,0.85)' }}>Adopt a cat, save a life</p>
          <Link to="/available-cats" className="browse-button">Browse Cats</Link>
        </div>
      </section>

      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          At Purrfect Adoption, we believe every cat deserves a loving home. Our dedicated team works tirelessly to rescue cats in need, provide medical care and rehabilitation, and match them with families who will cherish them forever. Whether you&apos;re looking for a playful kitten or a calm senior companion, we have the perfect match waiting for you.
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 cats-grid" id="cats-container">
          {cats.map((cat, i) => (
            <article key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
