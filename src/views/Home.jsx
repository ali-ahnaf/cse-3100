import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Peterbald' },
  { name: 'Luna', age: '5', breed: 'Birman' }
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
    <>
      <section className="text-center mt-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Welcome to Purrfect Adoption! We're dedicated to finding loving homes for cats in need. Every cat deserves a second chance at happiness...
        </p>
      </section>

      <section className="mt-5">
        <h3>Featured cats</h3>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} className="cat-image" />
              <div className="cat-info">
                <h4>{cat.name}</h4>
                <p>Breed: {cat.breed}</p>
                <p>Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
