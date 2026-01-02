import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '3 months' },
  { name: 'Luna', age: '3 months' },
  { name: 'Oliver', age: '2 months' },
  { name: 'Bella', age: '5 months' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        featuredCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res =>
            res.json()
          )
        )
      );

      setCats(
        featuredCats.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url,
        }))
      );
    };

    fetchImages();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Welcome to Purrfect Adoption</h2>
        <p style={{ maxWidth: '800px', margin: '20px auto' }}>
          At Purrfect Adoption, we believe every cat deserves a safe and loving home. Our mission is to connect wonderful cats with caring families through a simple and trusted adoption process.
        </p>
      </div>

      <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />

      <h2 style={{ textAlign: 'center' }}>Featured cats</h2>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '30px',
        marginTop: '30px'
      }}>
        {cats.map((cat, i) => (
          <div key={i} className="cat-card" style={{ 
            width: '250px',
            border: '1px solid #ddd',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <strong>{cat.name}</strong>
              <p>Age: {cat.age}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}