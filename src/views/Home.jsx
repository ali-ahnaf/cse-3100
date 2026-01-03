import { useEffect, useState } from 'react';

const featuredCatsList = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const KEY = 'home_cats_lock';
    const cached = localStorage.getItem(KEY);

    if (cached) {
      setCats(JSON.parse(cached));
    } else {
      const fetchImages = async () => {
        const results = await Promise.all(
          featuredCatsList.map(() => 
            fetch('https://api.thecatapi.com/v1/images/search').then(r => r.json())
          )
        );
        const lockedCats = featuredCatsList.map((cat, i) => ({
          ...cat,
          image: results[i][0].url
        }));
        localStorage.setItem(KEY, JSON.stringify(lockedCats));
        setCats(lockedCats);
      };
      fetchImages();
    }
  }, []);

  return (
    <>
      <section className="welcome-section">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Find your new best friend today. We have a wide variety of feline companions 
          waiting to meet you and join your family forever.
        </p>
      </section>

      <h2 className="section-title">Featured cats</h2>
      <div className="cat-grid">
        {cats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-img" />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p className="breed-tag">{cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}