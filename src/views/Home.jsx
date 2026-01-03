import { useEffect, useState } from 'react';

const featuredCats = [
  {
    name: 'Mochi',
    age: '2',
    breed: 'Siamese',
    location: 'Shelter A',
    description: 'Playful and affectionate. Loves attention and cuddles.',
    image: 'https://cdn2.thecatapi.com/images/9j7.jpg',
  },
  {
    name: 'Nemo',
    age: '1',
    breed: 'Abyssinian',
    location: 'Shelter B',
    description: 'Curious and energetic — loves to climb and explore.',
    image: 'https://cdn2.thecatapi.com/images/bb.jpg',
  },
  {
    name: 'Tiger',
    age: '3',
    breed: 'Bengal',
    location: 'Shelter A',
    description: 'Active and playful; needs space to run and play.',
    image: 'https://cdn2.thecatapi.com/images/cc.jpg',
  },
  {
    name: 'Lily',
    age: '4',
    breed: 'Birman',
    location: 'Foster Home',
    description: 'Gentle and social; gets along well with other pets.',
    image: 'https://cdn2.thecatapi.com/images/dd.jpg',
  },
  {
    name: 'Simba',
    age: '2',
    breed: 'Sphynx',
    location: 'Shelter C',
    description: 'Affectionate and attention-seeking; loves warmth and cuddles.',
    image: 'https://cdn2.thecatapi.com/images/ee.jpg',
  },
  {
    name: 'Cleo',
    age: '2',
    breed: 'Persian',
    location: 'Foster Home',
    description: 'Calm lap cat who enjoys quiet afternoons and gentle brushing.',
    image: 'https://cdn2.thecatapi.com/images/ae.jpg',
  },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    setCats(featuredCats);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="home-hero text-center"
        style={{ backgroundColor: '#fdf8f2', padding: '5rem 1rem' }}
      >
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#b66e41', marginBottom: '1rem', fontWeight: '600' }}>
            Welcome to Purrfect Adoption
          </h2>
          <p
            className="lead"
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6rem',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: '500',
            }}
          >
            Discover your purr-fect feline friend! We help cats find loving forever homes
            and guide families in providing safe, happy, and healthy environments for their pets.
          </p>
        </div>
      </section>

      {/* Featured Cats Section */}
      <section
        className="featured-section mt-5"
        style={{ backgroundColor: '#fffdf7', padding: '3rem 1rem' }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: '#b66e41', marginBottom: '1.5rem', fontWeight: '600' }}>
            Featured Cats
          </h2>

          <div
            className="cats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {cats.map((cat, i) => (
              <div
                key={i}
                className="cat-card"
                style={{
                  backgroundColor: '#fffefc',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(182,110,65,0.15)',
                  overflow: 'hidden',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  aspectRatio: '1 / 1', // keeps card roughly square
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(182,110,65,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(182,110,65,0.15)';
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flex: 1, // takes most of the card height
                  }}
                ></div>
                <div className="cat-info" style={{ padding: '0.8rem' }}>
                  <h3 style={{ marginBottom: '0.3rem', fontWeight: '600' }}>{cat.name}</h3>
                  <p style={{ marginBottom: '0.3rem', fontWeight: '500' }}>
                    <strong>Age:</strong> {cat.age} &nbsp;•&nbsp;
                    <strong>Breed:</strong> {cat.breed}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#555', fontWeight: '400' }}>
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
