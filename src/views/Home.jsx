import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
];

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
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Find your perfect feline companion from our selection of beautiful cats.
          Each cat has a unique personality and comes from various breed backgrounds.
        </p>
        
      </section>

      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Featured cats</h2>
          
        </div>
        <div className="mt-2 row g-4">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4 col-lg-3">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-1">Age: {cat.age} years</p>
                  <p className="mb-2 breed-type">
                    Breed: <span className="breed-badge">{cat.breed}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}