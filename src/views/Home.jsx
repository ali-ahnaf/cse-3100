import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Bob Doe', age: '3 months' },
  { name: 'Bob Doe', age: '3 months' },
  { name: 'Bob Doe', age: '2 months' },
  { name: 'Bob Doe', age: '5 months' },
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
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div className="page-container">
      <section className="hero">
        <h2><u>Welcome to Purrfect Adoption</u></h2>
        <p className="hero-text">
          At Purrfect Adoption, we believe every cat deserves a safe and loving home.
          Our mission is to connect wonderful cats with caring families through a simple
          and trusted adoption process.
        </p>
      </section>

      <section className="section">
        <h3 className="section-title">Featured cats</h3>

        <div className="cats-grid cats-grid-4">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <div className="cat-image">
                {cat.image ? (
                  <img src={cat.image} alt={cat.name} />
                ) : (
                  <div className="cat-image-placeholder" />
                )}
              </div>

              <div className="cat-info">
                <div className="cat-name">{cat.name}</div>
                <div className="cat-age">Age: {cat.age}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
