import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Bob Doe', age: '3' },
  { name: 'Bob Doe', age: '4' },
  { name: 'Bob Doe', age: '2 months' },
  { name: 'Bob Doe', age: '2 months' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || '',
        }));
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setCats(featuredCats);
      }
    };
    fetchCatImages();
  }, []); 

  return (
    <main>
      <h1>Welcome to Purrfect Adoption</h1>
      <div className="welcome-text">
        <p>
          At Purrfect Adoption, we believe every cat deserves a loving home. Our mission is to connect rescue cats with caring families who will provide them with the love, care, and forever homes they deserve. Browse our available cats and find your purrfect companion today!
        </p>
      </div>

      <section>
        <h2 className="section-title">Featured cats</h2>
        <div className="cat-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              {cat.image && <img src={cat.image} alt={cat.name} />}
              <div className="cat-info">
                <div className="cat-name">{cat.name}</div>
                <div className="cat-age">Age: {cat.age}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
