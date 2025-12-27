import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    // fetch images once on mount — do not run on every render
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
        }));

        // Replace the list on first load instead of appending to avoid infinite loop
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="hero mt-4">
        <div className="container">
          <h1>Welcome to Purrfect Adoption</h1>
          <p>
            Whether you're here to meet a wonderful cat waiting to be discovered or
            to adopt a loving friend, we make the process joyful and simple.
            Browse our selections, learn about each cat, and connect with us.
          </p>
          <Link to="/available-cats" className="cta-button">
            See Available Cats
          </Link>
        </div>
      </section>

      <section className="mt-5 container">
        <h2>Featured cats</h2>
        <div className="mt-2 cats-container" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">
                  Breed:
                  <span className="breed-badge">{cat.breed}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
