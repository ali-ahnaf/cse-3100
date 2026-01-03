import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Luna', age: '3', breed: 'Persian' },
  { name: 'Oliver', age: '4', breed: 'Birman' },
  { name: 'Cleo', age: '1', breed: 'Peterbald' },
  { name: 'Bella', age: '5', breed: 'Sphynx' },
  { name: 'Leo', age: '2', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);


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
          image: responses[index]?.[0]?.url || '',
          id: `${cat.name}-${index}`,
        }));

        setCats(catsWithImages);
        if (catsWithImages.length > 10) {
          alert('Warning: unusually large number of featured cats loaded.');
        }
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  },[]);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p className="welcome-paragraph">
          Welcome to Purrfect Adoption — a caring rescue dedicated to finding
          loving homes for cats of every age. Browse our available cats,
          read quick bios, and submit an adoption inquiry for a match.
        </p>
      </section>

  <section className="mt-5 featured-section">
        <h2>Featured cats</h2>
    
        <div className="mt-2 cat-grid">
          {cats.map((cat, i) => (
            <div key={cat.id}>
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    width: '100%',
                    maxHeight: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  {cat.breed && (
                    <p className="mb-0 mt-1"><span className="breed-badge">{cat.breed}</span></p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
