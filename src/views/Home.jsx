import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
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
          Welcome to Purrfect Adoption — where every cat finds their forever home!
        </p>
      </section>

      <section className="container mt-5">
        <h2 className="mb-4 text-center">Featured Cats</h2>

        <div className="row g-4 justify-content-center">
          {cats.map((cat, i) => (
            <div key={i} className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 shadow-sm"
                style={{ borderRadius: '12px' }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="card-img-top"
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{cat.name}</h5>
                  <p className="card-text">Age: {cat.age}</p>
                  <p className="card-text">
                    <strong>Breed:</strong> {cat.breed}
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
