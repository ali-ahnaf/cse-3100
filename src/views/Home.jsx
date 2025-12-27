import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
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
    };

    fetchCatImages();
  }, []); // ✅ FIXED

  return (
    <>
      <section className="text-center">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      <section>
        <h2>Featured cats</h2>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} style={{ height: 200, width: '100%', objectFit: 'cover' }} />
              <div className="cat-info">
                <strong>{cat.name}</strong>
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
