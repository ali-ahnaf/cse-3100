import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Bengal' },
  { name: 'Mittens', age: '4', breed: 'Persian' },
  { name: 'Shadow', age: '2', breed: 'Siamese' },
  { name: 'Pumpkin', age: '2', breed: 'Abyssinian' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
          )
        );

        const result = featuredCats.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url,
        }));

        setCats(result);
      } catch {
        setCats(featuredCats);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <section className="hero">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          <p>
              At Purrfect Adoption, we believe every cat deserves a safe, loving home.
              Our mission is to connect kind-hearted people with cats who are ready
              to become lifelong companions. Browse our featured cats and help give
              them the forever family they’ve been waiting for.
          </p>

        </p>
      </section>

      <section className="section">
        <h2>Featured cats</h2>

        <div className="cats-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              {cat.image && <img src={cat.image} alt={cat.name} className="cat-img" />}
              <div className="cat-info">
                <div className="cat-name">{cat.name}</div>
                <div className="cat-meta">Age: {cat.age}</div>
                <div className="cat-meta">Breed: {cat.breed}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
