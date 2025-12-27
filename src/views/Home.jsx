import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Bella', age: '3' },
];

const possibleBreeds = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

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
          breed: possibleBreeds[Math.floor(Math.random() * possibleBreeds.length)],
        }));

        setCats((prevCats) => [...prevCats, ...catsWithImages]);

        if (cats.length > 10) {
          alert(
            'Hey, you should quickly fix this infinite state loop before your PC crashes! Stop the App, Refresh the browser and fix the bug!! '
          );
        }
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section style={{ textAlign: 'center', marginBottom: '3em' }}>
        <h2 style={{ fontSize: '2.5em', fontWeight: '300', marginBottom: '1em', color: '#333' }}>
          Welcome to Purrfect Adoption
        </h2>
        <p style={{ color: '#666', fontSize: '1.1em', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
          Find your perfect cat at Purrfect Adoption. We connect caring homes with sweet cats looking for their forever families.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2em', fontWeight: '400', marginBottom: '1.5em', color: '#333' }}>
          Featured cats
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2em',
            justifyItems: 'center',
          }}
        >
          {cats.map((cat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '1.5em',
                width: '100%',
                maxWidth: '250px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  borderRadius: '8px',
                  height: '180px',
                  objectFit: 'cover',
                  width: '100%',
                  marginBottom: '1em',
                }}
              />
              <h3 style={{ fontSize: '1.2em', fontWeight: '600', margin: '0 0 0.5em 0', color: '#333' }}>
                {cat.name}
              </h3>
              <p style={{ margin: '0', color: '#666', fontSize: '0.9em' }}>
                Age: {cat.age}
              </p>
              <p style={{ margin: '0', color: '#666', fontSize: '0.9em' }}>
                Breed: {cat.breed}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
