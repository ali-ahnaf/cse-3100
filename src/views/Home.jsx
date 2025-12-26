import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '3' },
  { name: 'Mittens', age: '4' },
  { name: 'Shadow', age: '2 months' },
  { name: 'Pumpkin', age: '2 months' },
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
    <>
      <section className="welcome-section">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="featured-section">
        <h2>Featured cats</h2>
        <div className="cats-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
              />
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
