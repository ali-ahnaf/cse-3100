import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Luna', age: '1 year' },
  { name: 'Simba', age: '2 years' },
  { name: 'Milo', age: '3 years' },
  { name: 'Bella', age: '2 years' },
  { name: 'Oliver', age: '1.5 years' },
  { name: 'Chloe', age: '4 years' },
  { name: 'Leo', age: '2.5 years' },
  { name: 'Nala', age: '1 year' },
  { name: 'Charlie', age: '3 years' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || '',
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div className="home-page">
      {/* Intro Section */}
      <section className="text-center mt-4">
        <h2 style={{ textAlign: 'center' }}>Welcome to Purrfect Adoption</h2>
        <p
          style={{
            textAlign: 'center',
            marginTop: '12px',
            marginBottom: '40px',
          }}
        >
          We believe every cat deserves a loving and safe home.
          <br />
          At Purrfect Adoption, we connect adorable cats with kind-hearted
          people who are ready to give them a forever family.
        </p>
      </section>

      {/* Featured Cats */}
      <section className="mt-4">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Featured Cats
        </h2>
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            padding: '0 40px',
          }}
        >
          {cats.map((cat, index) => (
            <div key={index} className="team-card">
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <div
                className="team-info"
                style={{
                  textAlign: 'center',
                  marginTop: '6px',
                  fontSize: '14px', // 👈 smaller text
                }}
              >
                <strong style={{ fontSize: '14px' }}>{cat.name}</strong>
                <p style={{ fontSize: '13px', margin: 0 }}>Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
