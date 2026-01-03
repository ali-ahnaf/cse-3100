import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Persian' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then((res) => res.json())
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
    <div className="container">
      <div className="py-5">
        <h1 className="display-4 fw-bold mb-4">Welcome to Purrfect Adoption</h1>
        <p className="lead mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <section className="py-0">
        <h2 className="text-center mb-5">Featured cats</h2>
        <div className="row g-1">
          {cats.map((cat, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="cat-card border p-4 text-center" style={{ borderRadius: '8px', background: '#fff' }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-3"
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    width: '100%'
                  }}
                />
                <h3 className="h5 fw-bold mb-2" style={{ color: '#000' }}>
                  {cat.name}
                </h3>
                <p className="mb-1 fw-medium" style={{ color: '#666' }}>
                  Age: {cat.age}
                </p>
                <p className="mb-3 fw-medium" style={{ color: '#666' }}>
                  Breed: {cat.breed}
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}