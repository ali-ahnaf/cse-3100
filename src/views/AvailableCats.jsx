import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },
  { name: 'Garfield', age: '5' },
  { name: 'Oreo', age: '1' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
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
    <section>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Available Cats</h2>
        <p>Meet our adorable cats looking for their forever home!</p>
      </div>

      <div className="row cats-container">
        {cats.map((cat, i) => (
          <div key={i}>
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  width: '100%',
                  objectFit: 'cover',
                  marginBottom: '10px'
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}