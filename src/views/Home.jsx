import { useEffect, useState } from 'react';
import AvailableCats from './AvailableCats'; // ✅ import the real component

const featuredCats = [
  { name: 'Bob Doe', age: '3 years', breed: 'Siamese' },
  { name: 'Milo Doe', age: '4 years', breed: 'Bengal' },
  { name: 'Luna Doe', age: '2 months', breed: 'Persian' },
  { name: 'Cleo Doe', age: '2 months', breed: 'Birman' },
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
      {/* Welcome section */}
      <section className="text-center mt-4">
        <h2 className="page-title">Welcome to Purrfect Adoption</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
      </section>

      {/* Featured Cats */}
      <section className="mt-5">
        <h2 className="page-title">Featured Cats</h2>
        <div className="container">
          <div className="cat-grid">
            {cats.map((cat, i) => (
              <div key={i} className="cat-card">
                <img src={cat.image} alt={cat.name} className="cat-image" />
                <div className="cat-info">
                  <h3 className="cat-name">{cat.name}</h3>
                  <p className="cat-breed"><strong>Breed:</strong> {cat.breed}</p>
                  <p className="cat-age"><strong>Age:</strong> {cat.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Available Cats reused below Featured Cats */}
      <section className="mt-5">
        <AvailableCats />
      </section>
    </>
  );
}
