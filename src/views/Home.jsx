import { useEffect, useState } from 'react';

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
            fetch('https://api.thecatapi.com/v1/images/search').then(res =>
              res.json()
            )
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index]?.[0]?.url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching featured cats:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">
            Welcome to <span>Purrfect Adoption</span>
          </h2>

          <p className="hero-subtitle">
            Find your perfect feline companion. All our cats are vaccinated,
            loved, and ready for a forever home.
          </p>

          <div className="hero-actions">
            <a href="/available-cats" className="hero-btn">
              View Available Cats
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED CATS */}
      <section>
        <h2>Featured Cats</h2>
        <p>
          A few of our lovely cats who are currently looking for a caring home.
        </p>

        <div className="row">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
