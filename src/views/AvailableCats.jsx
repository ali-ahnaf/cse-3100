import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '2' },
  { name: 'Pumpkin', age: '2' },
  { name: 'Luna', age: '2' },
  { name: 'Simba', age: '2' },
  { name: 'Oliver', age: '2' },
  { name: 'Bella', age: '2' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
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
    <section className="available-cats-section">
      <h2>Available cats</h2>

      <div className="cats-grid" id="cats-container">
        {cats.map((cat, i) => (
          <div key={i} className="cat-card">
            {cat.image ? (
              <img src={cat.image} alt={cat.name} />
            ) : (
              <div className="cat-image-placeholder"></div>
            )}
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
